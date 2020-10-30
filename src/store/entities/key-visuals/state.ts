import { QueryStatus } from 'react-query';
import { KEY_VISUALS } from '../../../constants';
import { KeyVisualsState } from './types';

export const keyVisualsState: KeyVisualsState = {
    data: { keyVisuals: [], success: false },
    status: QueryStatus.Idle,
    key: KEY_VISUALS,
};
