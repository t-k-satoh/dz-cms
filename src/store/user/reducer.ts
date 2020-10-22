import { combineReducers } from '@reduxjs/toolkit';

import * as slices from '.';

export const userReducer = combineReducers({
    isSignIn: slices.isSignInSlice.reducer,
});
