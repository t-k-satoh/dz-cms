import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { NAME } from './constants';
import { initialState } from './state';
import { InitialState } from './types';

export const dialogsSlice = createSlice({
    name: NAME,
    initialState,
    reducers: {
        setType: (state, action: PayloadAction<Pick<InitialState, 'type'>>) => {
            state.type = action.payload.type;
        },
    },
});
