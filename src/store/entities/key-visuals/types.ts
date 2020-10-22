import { keyVisuals } from 'dz-js-client';
import { QueryStatus } from 'react-query';
import { PromiseReturnType } from '../../../../utils/types';

export type KeyVisualsState = {
    data: PromiseReturnType<typeof keyVisuals.list>;
    status: QueryStatus;
};
