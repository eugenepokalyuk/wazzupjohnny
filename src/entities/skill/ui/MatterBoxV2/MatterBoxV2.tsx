import { FC, useEffect, useRef, useState } from 'react';
import Matter from 'matter-js';

import { Breakpoints, useMedia } from '@shared/lib';

import { Skill } from '../../model/skills.mock';

import './MatterBoxV2.css';

interface Props {
  content: Skill[];
  trigger?: 'auto' | 'scroll' | 'click' | 'hover';
  wireframes?: boolean;
  /** Render skill cards in the pixel/Sega chip style instead of brand colors. */
  pixel?: boolean;
  /** Names highlighted as "core" chips (only used with `pixel`). */
  coreSkills?: string[];
}

export const MatterBoxV2: FC<Props> = ({
  content = [],
  trigger = 'auto',
  wireframes = false,
  pixel = false,
  coreSkills = [],
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const textRef = useRef<HTMLDivElement | null>(null);
  const canvasContainerRef = useRef<HTMLDivElement | null>(null);

  const isDesktop = useMedia(Breakpoints.Desktop);

  const [effectStarted, setEffectStarted] = useState(false);
  // Bumped (debounced) on container resize so the physics world rebuilds for
  // the new dimensions instead of leaving a stale/blank canvas.
  const [resizeKey, setResizeKey] = useState(0);

  // Configs
  const gravity = 0.6; // Base: 1
  const mouseConstraintStiffness = 0.9; // Base: 0.2
  const backgroundColor = 'transparent'; // Base: transparent

  useEffect(() => {
    if (!textRef.current) return;

    const coreSet = new Set(coreSkills);

    const newHTML = content
      .map((skill) => {
        if (pixel) {
          const cls = coreSet.has(skill.name) ? 'word word-pixel core' : 'word word-pixel';

          return `<span class="${cls}" style="color: ${skill.color}; background: ${skill.backgroundColor};">${skill.name}</span>`;
        }

        return `<span
            class="word"
            style="color: ${skill.color}; background: ${skill.backgroundColor}; border-radius: 24px; padding: 0.15em 0.5em; margin: 0 0.2em;"
          >${skill.name}</span>`;
      })
      .join(' ');

    textRef.current.innerHTML = newHTML;
  }, [content, pixel, coreSkills]);

  useEffect(() => {
    if (trigger === 'auto') {
      setEffectStarted(true);

      return;
    }

    if (trigger === 'scroll' && containerRef.current) {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setEffectStarted(true);
            observer.disconnect();
          }
        },
        { threshold: 0.1 },
      );

      observer.observe(containerRef.current);

      return () => observer.disconnect();
    }
  }, [trigger]);

  useEffect(() => {
    const el = containerRef.current;
    if (!el || typeof ResizeObserver === 'undefined') return;

    let timer: ReturnType<typeof setTimeout>;
    const ro = new ResizeObserver(() => {
      clearTimeout(timer);
      timer = setTimeout(() => setResizeKey((k) => k + 1), 250);
    });

    ro.observe(el);
    return () => {
      clearTimeout(timer);
      ro.disconnect();
    };
  }, []);

  useEffect(() => {
    if (!effectStarted) return;

    const { Engine, Render, World, Bodies, Runner, Mouse, MouseConstraint } =
      Matter;

    if (
      !containerRef.current ||
      !canvasContainerRef.current ||
      !textRef.current
    )
      return;

    const containerRect = containerRef.current.getBoundingClientRect();
    const width = containerRect.width;
    const height = containerRect.height;

    if (width <= 0 || height <= 0) {
      return;
    }

    const engine = Engine.create();
    engine.world.gravity.y = gravity;

    const render = Render.create({
      element: canvasContainerRef.current,
      engine,
      options: {
        width,
        height,
        background: backgroundColor,
        wireframes,
      },
    });

    const boundaryOptions = {
      isStatic: true,
      render: { fillStyle: backgroundColor },
    };

    const floor = Bodies.rectangle(
      width / 2,
      height + 25,
      width,
      50,
      boundaryOptions,
    );

    const leftWall = Bodies.rectangle(
      -25,
      height / 2,
      50,
      height,
      boundaryOptions,
    );

    const rightWall = Bodies.rectangle(
      width + 25,
      height / 2,
      50,
      height,
      boundaryOptions,
    );

    const ceiling = Bodies.rectangle(
      width / 2,
      -25,
      width,
      50,
      boundaryOptions,
    );

    const wordSpans =
      textRef.current.querySelectorAll<HTMLSpanElement>('.word');

    const wordBodies = Array.from(wordSpans).map((elem) => {
      const rect = elem.getBoundingClientRect();

      const x = rect.left - containerRect.left + rect.width / 2;
      const y = rect.top - containerRect.top + rect.height / 2;

      const body = Bodies.rectangle(x, y, rect.width, rect.height, {
        render: { fillStyle: backgroundColor },
        restitution: 0.8,
        frictionAir: 0.01,
        friction: 0.2,
      });

      Matter.Body.setVelocity(body, {
        x: (Math.random() - 0.5) * 5,
        y: 0,
      });

      Matter.Body.setAngularVelocity(body, (Math.random() - 0.5) * 0.05);

      return { elem, body };
    });

    wordBodies.forEach(({ elem, body }) => {
      elem.style.position = 'absolute';
      elem.style.left = `${body.position.x - body.bounds.max.x + body.bounds.min.x / 2}px`;
      elem.style.top = `${body.position.y - body.bounds.max.y + body.bounds.min.y / 2}px`;
      elem.style.transform = 'none';
    });

    const mouse = Mouse.create(containerRef.current);

    const mouseConstraint = MouseConstraint.create(engine, {
      mouse,
      constraint: {
        stiffness: mouseConstraintStiffness,
        render: { visible: false },
      },
    });

    render.mouse = mouse;

    // Don't let the physics canvas swallow page scroll — drop Matter's wheel capture.
    const wheelMouse = mouse as unknown as { element: HTMLElement; mousewheel: EventListener };
    ['wheel', 'mousewheel', 'DOMMouseScroll'].forEach((evt) =>
      wheelMouse.element.removeEventListener(evt, wheelMouse.mousewheel),
    );

    World.add(engine.world, [
      floor,
      leftWall,
      rightWall,
      ceiling,
      mouseConstraint,
      ...wordBodies.map((wb) => wb.body),
    ]);

    const runner = Runner.create();

    Runner.run(runner, engine);
    Render.run(render);

    const updateLoop = () => {
      wordBodies.forEach(({ body, elem }) => {
        const { x, y } = body.position;
        elem.style.left = `${x}px`;
        elem.style.top = `${y}px`;
        elem.style.transform = `translate(-50%, -50%) rotate(${body.angle}rad)`;
      });

      Matter.Engine.update(engine);

      requestAnimationFrame(updateLoop);
    };

    updateLoop();

    return () => {
      Render.stop(render);
      Runner.stop(runner);

      if (render.canvas && canvasContainerRef.current) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        canvasContainerRef.current.removeChild(render.canvas);
      }

      World.clear(engine.world, false);
      Engine.clear(engine);
    };
  }, [
    effectStarted,
    gravity,
    wireframes,
    backgroundColor,
    mouseConstraintStiffness,
    resizeKey,
  ]);

  const handleTrigger = () => {
    if (!effectStarted && (trigger === 'click' || trigger === 'hover')) {
      setEffectStarted(true);
    }
  };

  return (
    <div
      ref={containerRef}
      className="falling-text-container"
      onClick={trigger === 'click' ? handleTrigger : undefined}
      onMouseEnter={trigger === 'hover' ? handleTrigger : undefined}
    >
      <div
        ref={textRef}
        className="falling-text-target"
        style={{
          fontSize: isDesktop ? '2rem' : '1.2rem',
        }}
      />

      <div ref={canvasContainerRef} className="falling-text-canvas" />
    </div>
  );
};
