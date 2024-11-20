import { createContext, FC, ReactNode, useCallback, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { Toast, ToastVariants } from '@components/ui';

import classes from './Toast.module.scss';

interface ToastType {
  id:string;
  title:string;
  description:string;
  variant:ToastVariants;
  icon?:ReactNode;
  children?:ReactNode;
}

interface ToastContextProps {
  addToast:(
    title:string,
    description:string,
    variant:ToastVariants,
    icon?:ReactNode,
    children?:ReactNode,
  ) => void;
}

export const ToastContext = createContext<ToastContextProps|undefined>(
  undefined,
);

export const ToastProvider:FC<{ children:ReactNode }> = ({ children }) => {
  const [toasts, setToasts] = useState<ToastType[]>([]);

  const addToast = useCallback(
    (
      title:string,
      description:string,
      variant:ToastVariants,
      icon?:ReactNode,
      children?:ReactNode,
    ) => {
      const newToast:ToastType = {
        title,
        description,
        variant,
        icon,
        children,
        id: uuidv4(),
      };

      setToasts((prev) => [...prev, newToast]);

      setTimeout(() => {
        setToasts((prev) => prev.filter((toast) => toast.id !== newToast.id));
      }, 5000);
    },
    [],
  );

  const removeToast = (id:string) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id));
  };

  return (
    <ToastContext.Provider value={{ addToast }}>
      {children}

      <div className={classes.toast_container}>
        {toasts.map((toast) => (
          <Toast
            key={toast.id}
            title={toast.title}
            description={toast.description}
            variant={toast.variant}
            icon={toast.icon}
            onClose={() => removeToast(toast.id)}
          >
            {toast.children}
          </Toast>
        ))}
      </div>
    </ToastContext.Provider>
  );
};
