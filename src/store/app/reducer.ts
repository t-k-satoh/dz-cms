import { combineReducers } from '@reduxjs/toolkit';

import * as appSlices from '.';

export const appReducer = combineReducers({
    dialogs: appSlices.dialogsSlice.reducer,
});
