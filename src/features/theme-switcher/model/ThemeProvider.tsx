import { FC, PropsWithChildren, useMemo } from 'react';
import { useSessionStorage } from 'usehooks-ts';

import { ThemeContext } from './ThemeContext';
import { PaletteId, ThemeStorageKey } from './palettes';

/**
 * Holds the persisted Sega theme (palette + CRT toggles) and shares it with the
 * whole app, so any page can read or change it without prop drilling.
 */
export const ThemeProvider: FC<PropsWithChildren> = ({ children }) => {
  const [palette, setPalette] = useSessionStorage<PaletteId>(
    ThemeStorageKey.Palette,
    'genesis',
  );
  const [crt, setCrt] = useSessionStorage<boolean>(ThemeStorageKey.Crt, true);
  const [flicker, setFlicker] = useSessionStorage<boolean>(ThemeStorageKey.Flicker, true);
  const [floor, setFloor] = useSessionStorage<boolean>(ThemeStorageKey.Floor, true);

  const value = useMemo(
    () => ({ palette, setPalette, crt, setCrt, flicker, setFlicker, floor, setFloor }),
    [palette, crt, flicker, floor, setPalette, setCrt, setFlicker, setFloor],
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};
