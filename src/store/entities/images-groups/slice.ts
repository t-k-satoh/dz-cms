import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { NAME } from './constants';
import { imagesGroupsState } from './state';
import { ImagesGroupsState } from './types';

export const imagesGroupsSlice = createSlice({
    name: NAME,
    initialState: imagesGroupsState,
    reducers: {
        setData: (state, action: PayloadAction<Pick<ImagesGroupsState, 'data'>>) => {
            state.data = action.payload.data;
        },
        setStatus: (state, action: PayloadAction<Pick<ImagesGroupsState, 'status'>>) => {
            state.status = action.payload.status;
        },
    },
});
