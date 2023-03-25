import { configureStore } from '@reduxjs/toolkit';

import { useDispatch } from 'react-redux';

import { AppDispatch, TReducer } from '@store/types';

import { reducer } from './reducer';

export const store = configureStore<TReducer, any>({
  reducer,
});

export const useAppDispatch: () => AppDispatch = useDispatch;
export { AppDispatch, TReducer } from './types';
