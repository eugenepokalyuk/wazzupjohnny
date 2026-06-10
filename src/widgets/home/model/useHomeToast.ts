import { useCallback, useEffect, useRef, useState } from 'react';

export interface HomeToast {
  showToast: (msg: string) => void;
  message: string;
  shown: boolean;
}

/** Small self-contained toast used by the Home arcade screens. */
export const useHomeToast = (): HomeToast => {
  const [message, setMessage] = useState('');
  const [shown, setShown] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const showToast = useCallback((msg: string) => {
    setMessage(msg);
    setShown(true);

    if (timer.current) {
      clearTimeout(timer.current);
    }
    timer.current = setTimeout(() => setShown(false), 1800);
  }, []);

  useEffect(
    () => () => {
      if (timer.current) {
        clearTimeout(timer.current);
      }
    },
    [],
  );

  return { showToast, message, shown };
};
