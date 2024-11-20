import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';

import { rootReducer } from './rootReducer';
import { rootSaga } from './rootSaga';
import {
  initialStateControllerState,
  StateControllerState,
} from './StateController/reducer';

export interface RootStore {
  controller: StateControllerState;
}

const defaultValue: Partial<RootStore> = {
  controller: initialStateControllerState,
};

export const createStore = (initialStore?: Partial<RootStore>) => {
  const sagaMiddleware = createSagaMiddleware();

  const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(sagaMiddleware),
    preloadedState: { ...defaultValue, ...initialStore },
  });

  sagaMiddleware.run(rootSaga);

  return store;
};

export const store = createStore();

export const StoreProvider = Provider;
export type Store = ReturnType<typeof createStore>;
export type AppDispatch = Store['dispatch'];
