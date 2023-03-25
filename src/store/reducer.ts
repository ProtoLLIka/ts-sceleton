import { createReducer } from '@reduxjs/toolkit';

import { action, asyncAction } from '@store/actions';

import { TReducer } from './types';

const initialState: TReducer = {};

export const reducer = createReducer(initialState, {
  [action.type]: (state, payload) => {
    console.log({ payload, state });
  },
  [asyncAction.fulfilled.type]: (state, payload) => {
    console.log({ payload, state });
  },
  [asyncAction.rejected.type]: (state, payload) => {
    console.log({ payload, state });
  },
  [asyncAction.pending.type]: (state, payload) => {
    console.log({ payload, state });
  },
});
