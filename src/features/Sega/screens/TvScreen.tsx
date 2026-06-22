import {
  CSSProperties,
  FC,
  PointerEvent,
  useEffect,
  useRef,
  useState,
} from 'react';
import clsx from 'clsx';

import classes from '../sega.module.scss';

interface Pixel {
  id: number;
  x: number;
  y: number;
  dx: number;
  dy: number;
  color: string;
}

const PIXEL_COLORS = [
  'var(--gold)',
  'var(--blue)',
  'var(--white)',
  'var(--red)',
];

/** Press-duration thresholds (ms) that shape the recoil. */
const MIN_PRESS = 60; // quick tap
const HOLD_180 = 1200; // hold this long → half spin
const HOLD_360 = 2200; // hold this long → full spin

/** Wobble angle range for short presses (deg). */
const MIN_WOBBLE = 6;
const MAX_WOBBLE = 120;

/** Where the 180° threshold sits on the charge bar (0..1). */
const ARM_AT = HOLD_180 / HOLD_360;

const SPRING = 'cubic-bezier(0.34, 1.56, 0.64, 1)';
const SPIN_EASE = 'cubic-bezier(0.25, 0.6, 0.3, 1)';

interface Props {
  /** Image shown on the screen. */
  src?: string;
  alt?: string;
}

/** Interactive Sega-style TV: press to recoil (rotate), hold to spin, with a charge bar. */
export const TvScreen: FC<Props> = ({
  src = '/images/shape/cat.png',
  alt = 'Аватар-кот',
}) => {
  const [tvStyle, setTvStyle] = useState<CSSProperties>({});
  const [pixels, setPixels] = useState<Pixel[]>([]);
  const [charge, setCharge] = useState(0); // 0..1 while holding
  const [charging, setCharging] = useState(false);
  const rotation = useRef(0); // cumulative angle, deg
  const pressStartedAt = useRef(0);
  const pixelId = useRef(0);
  const revertTimer = useRef<number>();
  const rafId = useRef<number>();

  useEffect(
    () => () => {
      if (rafId.current) cancelAnimationFrame(rafId.current);
    },
    [],
  );

  const applyRotation = (ms: number, ease: string) => {
    setTvStyle({
      transform: `rotate(${rotation.current}deg)`,
      transition: `transform ${ms}ms ${ease}`,
    });
  };

  const tickCharge = () => {
    const elapsed = performance.now() - pressStartedAt.current;
    setCharge(Math.min(elapsed / HOLD_360, 1));
    rafId.current = requestAnimationFrame(tickCharge);
  };

  const handlePointerDown = (e: PointerEvent<HTMLDivElement>) => {
    pressStartedAt.current = performance.now();
    e.currentTarget.setPointerCapture(e.pointerId); // keep pointerup on the TV
    setCharging(true);
    setCharge(0);
    rafId.current = requestAnimationFrame(tickCharge);
  };

  const handlePointerUp = (e: PointerEvent<HTMLDivElement>) => {
    if (rafId.current) cancelAnimationFrame(rafId.current);
    setCharging(false);
    setCharge(0);

    const held = performance.now() - pressStartedAt.current;
    const dir = Math.random() < 0.5 ? -1 : 1; // -1 ccw, +1 cw

    window.clearTimeout(revertTimer.current);

    if (held >= HOLD_360) {
      // Full spin — lands back upright, stays put.
      rotation.current += dir * 360;
      applyRotation(900, SPIN_EASE);
    } else if (held >= HOLD_180) {
      // Half spin — flips the screen over, stays put.
      rotation.current += dir * 180;
      applyRotation(650, SPIN_EASE);
    } else {
      // Short press — wobble out and spring back to neutral.
      const clamped = Math.min(Math.max(held, MIN_PRESS), HOLD_180);
      const t = (clamped - MIN_PRESS) / (HOLD_180 - MIN_PRESS);
      const wobble = MIN_WOBBLE + t * (MAX_WOBBLE - MIN_WOBBLE);
      rotation.current += dir * wobble;
      applyRotation(300, SPRING);
      revertTimer.current = window.setTimeout(() => {
        rotation.current -= dir * wobble;
        applyRotation(300, SPRING);
      }, 320);
    }

    // Pixel burst at the release point — denser/wider the longer it was held.
    const power = Math.min(held / HOLD_360, 1);
    const rect = e.currentTarget.getBoundingClientRect();
    const ox = e.clientX - rect.left;
    const oy = e.clientY - rect.top;
    const count = 8 + Math.round(power * 16);
    const burst: Pixel[] = Array.from({ length: count }, () => {
      const angle = Math.random() * Math.PI * 2;
      const radius = 16 + Math.random() * (24 + power * 44);
      return {
        id: pixelId.current++,
        x: ox,
        y: oy,
        dx: Math.cos(angle) * radius,
        dy: Math.sin(angle) * radius,
        color: PIXEL_COLORS[Math.floor(Math.random() * PIXEL_COLORS.length)],
      };
    });
    setPixels((prev) => [...prev, ...burst]);
    const ids = new Set(burst.map((p) => p.id));
    window.setTimeout(
      () => setPixels((prev) => prev.filter((p) => !ids.has(p.id))),
      650,
    );
  };

  // Glow color ramps with how long the screen is held.
  const glowClass = charging
    ? charge >= 1
      ? classes.tvMax // 360° — blinking white/red
      : charge >= ARM_AT
        ? classes.tvHot // 180° — red
        : classes.tvWarm // held a little — orange
    : undefined;

  return (
    <div
      className={clsx(classes.tv, glowClass)}
      style={tvStyle}
      onPointerDown={handlePointerDown}
      onPointerUp={handlePointerUp}
      onContextMenu={(e) => e.preventDefault()}
    >
      <img className={classes.tvImg} src={src} alt={alt} draggable={false} />

      {pixels.map((p) => (
        <span
          key={p.id}
          className={classes.pixel}
          style={
            {
              left: p.x,
              top: p.y,
              background: p.color,
              '--dx': `${p.dx}px`,
              '--dy': `${p.dy}px`,
            } as CSSProperties
          }
        />
      ))}
    </div>
  );
};
