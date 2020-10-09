import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { initialState } from '../../state/initial-state';
import { NAME } from './constants';
import { CategoriesState } from './types';

export const categoriesSlice = createSlice({
    name: NAME,
    initialState,
    reducers: {
        setData: (state, action: PayloadAction<Pick<CategoriesState['categories'], 'data'>>) => {
            state.entities.categories.data = action.payload.data;
        },
        setStatus: (state, action: PayloadAction<Pick<CategoriesState['categories'], 'status'>>) => {
            state.entities.categories.status = action.payload.status;
        },
    },
});
