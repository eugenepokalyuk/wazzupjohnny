import { FC, SVGProps } from 'react';

const defaultProps = {
  width: '1em',
  height: '1em',
  fill: 'currentColor',
};

type Props = SVGProps<SVGSVGElement>;

export const CloseIcon: FC<Props> = (props) => (
  <svg viewBox="0 -960 960 960" {...defaultProps} {...props}>
    <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
  </svg>
);

export const CopyIcon: FC<Props> = (props) => (
  <svg viewBox="0 -960 960 960" {...defaultProps} {...props}>
    <path d="M360-240q-33 0-56.5-23.5T280-320v-480q0-33 23.5-56.5T360-880h360q33 0 56.5 23.5T800-800v480q0 33-23.5 56.5T720-240H360Zm0-80h360v-480H360v480ZM200-80q-33 0-56.5-23.5T120-160v-560h80v560h440v80H200Zm160-240v-480 480Z" />
  </svg>
);

export const DoneIcon: FC<Props> = (props) => (
  <svg viewBox="0 -960 960 960" {...defaultProps} {...props}>
    <path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z" />
  </svg>
);

export const ArrowUpIcon: FC<Props> = (props) => (
  <svg viewBox="0 -960 960 960" {...defaultProps} {...props}>
    <path d="M320-120v-240H120l360-440 360 440H640v240H320Z" />
  </svg>
);

export const SettingsIcon: FC<Props> = (props) => (
  <svg viewBox="0 -960 960 960" {...defaultProps} {...props}>
    <path d="m370-80-16-128q-13-5-24.5-12T307-235l-119 50L78-375l103-78q-1-7-1-13.5v-27q0-6.5 1-13.5L78-585l110-190 119 50q11-8 23-15t24-12l16-128h220l16 128q13 5 24.5 12t22.5 15l119-50 110 190-103 78q1 7 1 13.5v27q0 6.5-2 13.5l103 78-110 190-118-50q-11 8-23 15t-24 12L590-80H370Zm112-260q58 0 99-41t41-99q0-58-41-99t-99-41q-59 0-99.5 41T342-480q0 58 40.5 99t99.5 41Z" />
  </svg>
);

export const StarIcon: FC<Props> = (props) => (
  <svg viewBox="0 -960 960 960" {...defaultProps} {...props}>
    <path d="m233-120 65-281L80-590l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z" />
  </svg>
);

export const LinkIcon: FC<Props> = (props) => (
  <svg viewBox="0 -960 960 960" {...defaultProps} {...props}>
    <path d="m256-240-56-56 384-384H240v-80h480v480h-80v-344L256-240Z" />
  </svg>
);

export const PlayIcon: FC<Props> = (props) => (
  <svg viewBox="0 -960 960 960" {...defaultProps} {...props}>
    <path d="M320-200v-560l440 280-440 280Z" />
  </svg>
);
