import { appState } from '../app';
import { entitiesState } from '../entities';
import { userState } from '../user';
import { InitialState } from './types';

export const initialState: InitialState = {
    entities: entitiesState,
    app: appState,
    user: userState,
};
