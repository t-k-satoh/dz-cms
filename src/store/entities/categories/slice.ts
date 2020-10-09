import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { initialState } from '../../state/initial-state';
import { CategoriesState } from './types';

export const categoriesSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        set: (state, action: PayloadAction<Pick<CategoriesState, 'categories'>>) => {
            const { categories } = action.payload;

            state.entities.categories = categories;
        },
    },
});
