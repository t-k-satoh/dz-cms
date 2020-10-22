import { DIALOG_TYPE } from './constants';

const values = Object.values(DIALOG_TYPE);

export type InitialState = {
    type: typeof values[number];
};
