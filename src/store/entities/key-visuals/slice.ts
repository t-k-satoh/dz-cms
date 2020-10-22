import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { NAME } from './constants';
import { keyVisualsState } from './state';
import { KeyVisualsState } from './types';

export const keyVisualsSlice = createSlice({
    name: NAME,
    initialState: keyVisualsState,
    reducers: {
        setData: (state, action: PayloadAction<Pick<KeyVisualsState, 'data'>>) => {
            state.data = action.payload.data;
        },
        setStatus: (state, action: PayloadAction<Pick<KeyVisualsState, 'status'>>) => {
            state.status = action.payload.status;
        },
    },
});
