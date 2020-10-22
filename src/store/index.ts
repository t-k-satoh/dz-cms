import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { appReducer } from './app';
import { entitiesReducer } from './entities';
import { userReducer } from './user';

export const rootReducer = combineReducers({
    entities: entitiesReducer,
    app: appReducer,
    user: userReducer,
});

export const store = configureStore({
    reducer: rootReducer,
});

export const allSlices = {
    entities: entitiesReducer,
    app: appReducer,
    user: userReducer,
};
