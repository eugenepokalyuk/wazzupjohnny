import { FC, ReactNode } from 'react';
import clsx from 'clsx';

import { Color, Size, Tags, Weight } from '@components/ui/enums';

import classes from './Text.module.scss';

interface Props {
  tag?:Tags;
  size?:Size;
  weight?:Weight;
  color?:Color;
  className?:string;
  children:ReactNode;
}

export const Text:FC<Props> = ({
                                 tag = Tags.Paragraph,
                                 size = Size.MD,
                                 weight = Weight.Regular,
                                 color = Color.Default,
                                 className,
                                 children,
                                 ...props
                               }) => {
  const Comp = tag as keyof JSX.IntrinsicElements;

  return (
    <Comp
      className={clsx(
        classes.text,
        classes[size],
        classes[weight],
        classes[color],
        className,
      )}
      {...props}
    >
      {children}
    </Comp>
  );
};
