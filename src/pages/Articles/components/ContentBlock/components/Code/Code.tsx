import React, { FC } from 'react';
import clsx from 'clsx';

import { Button, CopyIcon, DoneIcon, Size, Variant } from '@components/ui';
import { Breakpoints, useMedia } from '@/utils';

import classes from './Code.module.scss';

interface Props {
  content: string;
}

export const Code: FC<Props> = ({ content }) => {
  const isMobile = useMedia(Breakpoints.Mobile);

  const [copied, setCopied] = React.useState<boolean>(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(content).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div className={classes.box}>
      {!isMobile ? (
        <div
          onClick={handleCopy}
          className={clsx(classes.button_icon, {
            [classes.copied]: copied,
          })}
        >
          {copied ? <DoneIcon /> : <CopyIcon />}
        </div>
      ) : (
        <Button
          size={Size.SM}
          variant={Variant.Accent}
          className={classes.button}
          onClick={handleCopy}
          outline
        >
          {copied ? 'Скопировано!' : 'Копировать'}
        </Button>
      )}

      <pre className={classes.code}>
        <code>{content}</code>
      </pre>
    </div>
  );
};
