import { initialState as isSignInSliceInitialState } from './is-sign-in';

export type UserState = {
    isSignIn: typeof isSignInSliceInitialState;
};

export const userState: UserState = {
    isSignIn: isSignInSliceInitialState,
};
