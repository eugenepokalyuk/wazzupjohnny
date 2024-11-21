import { FC } from 'react';

import { Link as LinkUI } from '@components/ui';

import classes from './Link.module.scss';

interface Props {
  content: string;
  linkUrl: string;
}

export const Link: FC<Props> = ({ content, linkUrl }) => (
  <LinkUI
    to={linkUrl}
    // @ts-ignore
    target="_blank"
    rel="noopener noreferrer"
    className={classes.link}
  >
    {content}
  </LinkUI>
);
