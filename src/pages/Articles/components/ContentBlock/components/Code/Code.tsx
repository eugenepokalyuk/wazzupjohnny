import { FC, useState } from 'react';

import { Button, Size, Variant } from '@components/ui';

import classes from './Code.module.scss';

interface Props {
  content: string;
}

export const Code: FC<Props> = ({ content }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(content).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div className={classes.box}>
      <Button
        size={Size.SM}
        variant={Variant.Secondary}
        className={classes.btn}
        onClick={handleCopy}
        tilt
      >
        {copied ? 'Скопировано!' : 'Копировать'}
      </Button>

      <pre className={classes.code}>
        <code>{content}</code>
      </pre>
    </div>
  );
};
