import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { NAME } from './constants';
import { imagesState } from './state';
import { ImagesState } from './types';

export const imagesSlice = createSlice({
    name: NAME,
    initialState: imagesState,
    reducers: {
        setData: (state, action: PayloadAction<Pick<ImagesState, 'data'>>) => {
            state.data = action.payload.data;
        },
        setStatus: (state, action: PayloadAction<Pick<ImagesState, 'status'>>) => {
            state.status = action.payload.status;
        },
    },
});
