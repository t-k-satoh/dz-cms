import { QueryStatus } from 'react-query';
import { KeyVisualsState } from './types';

export const keyVisualsState: KeyVisualsState = { data: { keyVisuals: [], success: false }, status: QueryStatus.Idle };
