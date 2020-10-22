import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { NAME } from './constants';
import { initialState } from './state';
import { InitialState } from './types';

export const isSignInSlice = createSlice({
    name: NAME,
    initialState,
    reducers: {
        setIsSignIn: (state, action: PayloadAction<Pick<InitialState, 'isSignIn'>>) => {
            state.isSignIn = action.payload.isSignIn;
        },
    },
});
