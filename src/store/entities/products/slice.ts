import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { NAME } from './constants';
import { productsState } from './state';
import { ProductsState } from './types';

export const productsSlice = createSlice({
    name: NAME,
    initialState: productsState,
    reducers: {
        setData: (state, action: PayloadAction<Pick<ProductsState, 'data'>>) => {
            state.data = action.payload.data;
        },
        setStatus: (state, action: PayloadAction<Pick<ProductsState, 'status'>>) => {
            state.status = action.payload.status;
        },
    },
});
