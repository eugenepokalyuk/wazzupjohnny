import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootStore } from './context';

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector = <TSelected>(
  selector: (state: RootStore) => TSelected,
): TSelected => useSelector(selector);
