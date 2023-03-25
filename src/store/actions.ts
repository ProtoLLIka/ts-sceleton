import { createAction, createAsyncThunk } from '@reduxjs/toolkit';

import apiMethodExample from '@api/apiMethodExample';

export const action = createAction<number>('action');
export const asyncAction = createAsyncThunk('asyncAction', apiMethodExample);
