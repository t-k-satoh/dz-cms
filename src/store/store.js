import { configureStore, createAction, createReducer, createSlice } from '@reduxjs/toolkit';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import * as entitiesSlices from './entities';

let store;

const initialState = {
    lastUpdate: 0,
    light: false,
    count: 0,
};

export const counterSlice = createSlice({
    name: 'counter',
    initialState: { count: 0 },
    reducers: {
        increment: (state) => ({ ...state, count: state.count + 1 }),
        decrement: (state) => ({ ...state, count: state.count - 1 }),
        reset: (state) => ({ ...state, count: initialState.count }),
    },
});

const { categoriesSlice } = entitiesSlices;

// const reducer = (state = initialState, action) => {
//     switch (action.type) {
//         case 'TICK':
//             return {
//                 ...state,
//                 lastUpdate: action.lastUpdate,
//                 light: !!action.light,
//             };
//         case increment.type:
//             return {
//                 ...state,
//                 count: state.count + 1,
//             };
//         case decrement.type:
//             return {
//                 ...state,
//                 count: state.count - 1,
//             };
//         case reset.type:
//             return {
//                 ...state,
//                 count: initialState.count,
//             };
//         default:
//             return state;
//     }
// };

function initStore(preloadedState = initialState) {
    return configureStore({ reducer: categoriesSlice.reducer });
}

export const initializeStore = (preloadedState) => {
    let _store = store ?? initStore(preloadedState);

    // After navigating to a page with an initial Redux state, merge that state
    // with the current state in the store, and create a new store
    if (preloadedState && store) {
        _store = initStore({
            ...store.getState(),
            ...preloadedState,
        });
        // Reset the current store
        store = undefined;
    }

    // For SSG and SSR always create a new store
    if (typeof window === 'undefined') return _store;
    // Create the store once in the client
    if (!store) store = _store;

    return _store;
};

export function useStore(initialState) {
    const store = initializeStore(initialState);
    return store;
}
