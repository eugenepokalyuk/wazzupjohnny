import { useEffect, useState } from 'react';

export interface MediaState {
  mdUp: boolean;
  lgUp: boolean;
  mdDown: boolean;
  lgDown: boolean;
  mdOnly: boolean;
}

const getInitialState = (): MediaState => {
  if (typeof window !== 'undefined') {
    const mdUp = window.matchMedia('(min-width: 640px)').matches;
    const lgUp = window.matchMedia('(min-width: 1024px)').matches;

    return {
      mdUp,
      lgUp,
      mdDown: !mdUp,
      lgDown: !lgUp,
      mdOnly: mdUp && !lgUp,
    };
  }

  return {
    mdUp: false,
    lgUp: false,
    mdDown: true,
    lgDown: true,
    mdOnly: false,
  };
};

export const useMedia = (): MediaState => {
  const [state, setState] = useState<MediaState>(getInitialState);

  useEffect(() => {
    const mdQuery = window.matchMedia('(min-width: 640px)');
    const lgQuery = window.matchMedia('(min-width: 1024px)');

    const updateState = () => {
      const mdUp = mdQuery.matches;
      const lgUp = lgQuery.matches;

      setState({
        mdUp,
        lgUp,
        mdDown: !mdUp,
        lgDown: !lgUp,
        mdOnly: mdUp && !lgUp,
      });
    };

    mdQuery.addEventListener('change', updateState);
    lgQuery.addEventListener('change', updateState);

    return () => {
      mdQuery.removeEventListener('change', updateState);
      lgQuery.removeEventListener('change', updateState);
    };
  }, []);

  return state;
};
