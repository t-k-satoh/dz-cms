import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { NAME } from './constants';
import { categoriesState } from './state';
import { CategoriesState } from './types';

export const categoriesSlice = createSlice({
    name: NAME,
    initialState: categoriesState,
    reducers: {
        setData: (state, action: PayloadAction<Pick<CategoriesState, 'data'>>) => {
            state.data = action.payload.data;
        },
        setStatus: (state, action: PayloadAction<Pick<CategoriesState, 'status'>>) => {
            state.status = action.payload.status;
        },
    },
});
