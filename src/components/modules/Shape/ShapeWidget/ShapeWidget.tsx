import { FC, useEffect, useState } from 'react';
import clsx from 'clsx';

import { Text } from '@components/ui';
import { Shape } from '@components/modules';

import classes from './ShapeWidget.module.scss';

interface Props {
  visible: boolean;
  message?: string | null;
}

export const ShapeWidget: FC<Props> = ({ visible, message }) => {
  const [showMessage, setShowMessage] = useState<boolean>(false);

  useEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout>;

    if (showMessage) {
      timeoutId = setTimeout(() => {
        setShowMessage(false);
      }, 3000);
    }

    return () => {
      clearTimeout(timeoutId);
    };
  }, [showMessage]);

  const handleClick = () => {
    setShowMessage(true);
  };

  const [displayedText, setDisplayedText] = useState('');
  const [_, setTypingIndex] = useState(0);

  useEffect(() => {
    if (!message) {
      setDisplayedText('');
      setTypingIndex(0);
      return;
    }

    setDisplayedText('');
    setTypingIndex(0);

    const interval = setInterval(() => {
      setTypingIndex((prev) => {
        if (prev < message.length) {
          setDisplayedText(message.slice(0, prev + 1));
          return prev + 1;
        } else {
          clearInterval(interval);
          return prev;
        }
      });
    }, 50); // скорость печати (50 мс на символ)

    return () => clearInterval(interval);
  }, [message]);

  const isTyping = displayedText.length < (message?.length ?? 0);

  return (
    <div
      className={clsx(classes.box, {
        [classes.visible]: visible,
      })}
      onClick={handleClick}
    >
      {displayedText && (
        <div className={classes.hint}>
          <Text>{displayedText}</Text>
        </div>
      )}

      <Shape isTyping={isTyping} />
    </div>
  );
};
