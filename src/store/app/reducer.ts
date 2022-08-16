import { createReducer } from '@reduxjs/toolkit';

import { AppInitialState } from 'store/app/types';
import { someAsyncAction, someSyncAction } from 'store/app/actions';

const initialState: AppInitialState = {
  someData: 0,
};

export const appReducer = createReducer(initialState, {
  [someAsyncAction.pending.type]: (state, action) => {console.log('pending');
  },
  [someAsyncAction.fulfilled.type]: (state, action) => {console.log('fulfilled');},
  [someAsyncAction.rejected.type]: (state, action) => {console.log('rejected');},
  [someSyncAction.type]: (state, action) => {state.someData},
});

