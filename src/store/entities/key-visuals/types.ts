import { keyVisuals } from 'dz-js-client';
import { QueryStatus } from 'react-query';
import { PromiseReturnType } from '../../../../utils/types';
import { KEY_VISUALS } from '../../../constants';

export type KeyVisualsState = {
    data: PromiseReturnType<typeof keyVisuals.list>;
    status: QueryStatus;
    key: typeof KEY_VISUALS;
};
