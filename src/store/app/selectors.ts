import { createSelector } from '@reduxjs/toolkit';

import { Store } from 'store/types';

const appStoreSelector = (state: Store) => state.app;

export const selectSomeData = createSelector(appStoreSelector, (state) => state.someData);
