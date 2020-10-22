import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { initialState } from '../../state/initial-state';
import { NAME } from './constants';
import { subCategoriesState } from './state';
import { SubCategoriesState } from './types';

export const subCategoriesSlice = createSlice({
    name: NAME,
    initialState: subCategoriesState,
    reducers: {
        setData: (state, action: PayloadAction<Pick<SubCategoriesState, 'data'>>) => {
            state.data = action.payload.data;
        },
        setStatus: (state, action: PayloadAction<Pick<SubCategoriesState, 'status'>>) => {
            state.status = action.payload.status;
        },
    },
});
