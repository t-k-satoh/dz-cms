import { initialState as dialogsInitialState } from './dialogs';

export type AppState = {
    dialogs: typeof dialogsInitialState;
};

export const appState: AppState = {
    dialogs: dialogsInitialState,
};
