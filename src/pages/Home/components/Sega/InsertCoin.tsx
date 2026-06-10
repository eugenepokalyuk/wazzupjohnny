import { FC, useState } from 'react';
import clsx from 'clsx';

import { ArrowUpIcon } from '@components/ui';

import classes from '@components/sega/sega.module.scss';
import { ContactCard, CONTACTS, KONAMI_KEYS } from './sega.data';
import { useSega } from './SegaContext';

interface Props {
  cheat: boolean;
  onCheat: () => void;
}

export const InsertCoin: FC<Props> = ({ cheat, onCheat }) => {
  const { showToast } = useSega();
  const [progress, setProgress] = useState(0);
  const [wrong, setWrong] = useState(false);

  const handleCoin = (contact: ContactCard) => {
    showToast('🪙 ' + contact.label.toUpperCase() + ' — НОВАЯ ИГРА!');
  };

  // Tap the keycaps left-to-right to enter the code (mobile-friendly path).
  const handleKeyTap = (i: number) => {
    if (i === progress) {
      const next = progress + 1;

      if (next === KONAMI_KEYS.length) {
        setProgress(0);
        onCheat();
      } else {
        setProgress(next);
      }
      return;
    }

    // Wrong key — shake and restart (count this tap if it was the first key).
    setWrong(true);
    window.setTimeout(() => setWrong(false), 400);
    setProgress(i === 0 ? 1 : 0);
  };

  const isExternal = (href: string) => href.startsWith('http');

  return (
    <section id="coin" className={`${classes.sec} ${classes.coin}`}>
      <div className={classes.wrap}>
        <div className={classes.coinHead}>INSERT COIN</div>
        <p className={classes.coinSub}>
          CONTINUE? — напиши мне, начнём новую игру вместе
        </p>

        <div className={classes.coinRow}>
          {CONTACTS.map((contact) => (
            <a
              key={contact.label}
              className={classes.coinBtn}
              href={contact.href}
              target={isExternal(contact.href) ? '_blank' : undefined}
              rel={isExternal(contact.href) ? 'noreferrer' : undefined}
              onClick={() => handleCoin(contact)}
            >
              <span className={classes.ci}>{contact.icon}</span>
              <span className={classes.ct}>
                <b>{contact.label}</b>
                <span>{contact.hint}</span>
              </span>
            </a>
          ))}
        </div>

        <div className={classes.footerNote}>
          THANKS FOR PLAYING · WAZZUPJOHNNY.RU
        </div>

        <div className={classes.secret}>
          <div className={classes.secretHint}>
            🕹️ SECRET CODE — набери на клавиатуре или нажми по порядку
          </div>

          <div
            className={clsx(classes.konami, {
              [classes.konamiLit]: cheat,
              [classes.konamiWrong]: wrong,
            })}
          >
            {KONAMI_KEYS.map((key, i) => (
              <button
                key={i}
                type="button"
                className={clsx(classes.keycap, {
                  [classes.keyDone]: i < progress,
                })}
                onClick={() => handleKeyTap(i)}
                aria-label={key.type === 'arrow' ? key.dir : key.label}
              >
                {key.type === 'arrow' ? (
                  <ArrowUpIcon
                    className={clsx(
                      classes.keyArrow,
                      classes[`arrow_${key.dir}`],
                    )}
                  />
                ) : (
                  key.label
                )}
              </button>
            ))}
            <span className={clsx(classes.keycap, classes.keycapWide)}>
              START
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
