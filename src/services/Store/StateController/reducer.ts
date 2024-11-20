import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { Reducer } from '@services/Store/enums.ts';

import { ErrorPayload, KeyPayload } from './types';

export interface State {
  isStarted: boolean;
  isLoading: boolean;
  isSuccess: boolean;
  isError: boolean;
  error?: unknown;
}

export type StateControllerState = Record<string, State>;

export const initialStateControllerState: StateControllerState = {};

const stateControllerSlice = createSlice({
  name: Reducer.StateController,
  initialState: initialStateControllerState,
  reducers: {
    start(state, action: PayloadAction<KeyPayload>) {
      const { key } = action.payload;

      state[key] = updateState(state[key] || defaultState(), {
        isStarted: true,
        isLoading: true,
        isSuccess: false,
        isError: false,
        error: undefined,
      });
    },

    stop(state, action: PayloadAction<KeyPayload>) {
      const { key } = action.payload;

      if (!state[key]) return;

      state[key] = updateState(state[key] || defaultState(), {
        isLoading: false,
      });
    },

    success(state, action: PayloadAction<KeyPayload>) {
      const { key } = action.payload;

      if (!state[key]) return;

      state[key] = updateState(state[key] || defaultState(), {
        isSuccess: true,
        isError: false,
        isLoading: false,
        error: undefined,
      });
    },

    failure(state, action: PayloadAction<KeyPayload & ErrorPayload>) {
      const { key, error } = action.payload;

      if (!state[key]) return;

      state[key] = updateState(state[key] || defaultState(), {
        isSuccess: false,
        isError: true,
        isLoading: false,
        error,
      });
    },

    reset(state, action: PayloadAction<KeyPayload>) {
      const { key } = action.payload;

      if (!state[key]) return;

      state[key] = defaultState();
    },
  },
});

export const stateControllerActions = stateControllerSlice.actions;
export const stateControllerReducer = stateControllerSlice.reducer;

const defaultState = (): State => ({
  isStarted: false,
  isLoading: false,
  isSuccess: false,
  isError: false,
  error: undefined,
});

const updateState = (state: State, updates: Partial<State>) => {
  return { ...state, ...updates };
};
