import { FC, useEffect, useState } from 'react';

import classes from './ShapeWidget.module.scss';
import { Shape } from '../Shape/Shape';

interface Props {
  visible:boolean;
}

export const ShapeWidget:FC<Props> = ({ visible }) => {
  const [showMessage, setShowMessage] = useState<boolean>(false);

  useEffect(() => {
    let timeoutId:ReturnType<typeof setTimeout>;

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

  return (
    <div
      className={`${classes.box} ${visible ? classes.visible : ''}`}
      onClick={handleClick}
    >
      <Shape />
    </div>
  );
};
