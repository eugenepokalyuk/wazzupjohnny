import { MouseEventHandler, ReactNode } from 'react';
import { FormProps } from 'react-hook-form';

import { Size, Variant } from '@components/ui';

export interface BaseCardProps {
  className?:string;
  onClick?:MouseEventHandler<HTMLDivElement>;
  children:ReactNode;
  size?:Size;
  variant?:Variant;
}

export interface MainCardProps extends BaseCardProps {
  isForm?:boolean;
  //@ts-ignore
  formProps?:FormProps;
}
