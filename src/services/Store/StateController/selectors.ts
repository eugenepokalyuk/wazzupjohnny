import { createSelector } from 'reselect';

import { RootStore } from '@services/Store';

const selectStateController = (state: RootStore) => state.controller;

export const selectStateByKey = (key: string) =>
  createSelector(
    [selectStateController],
    (stateController) => stateController[key],
  );
