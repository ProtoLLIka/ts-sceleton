import { createAction, createAsyncThunk } from '@reduxjs/toolkit';

import { someAPI } from 'api/someApies';

export const someAsyncAction = createAsyncThunk('app/someAsyncAction', someAPI);

export const someSyncAction = createAction<number>('app/someSyncAction');
