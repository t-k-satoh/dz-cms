import { imagesGroups } from 'dz-js-client';
import { QueryStatus } from 'react-query';
import { PromiseReturnType } from '../../../../utils/types';

export type ImagesGroupsState = {
    data: PromiseReturnType<typeof imagesGroups.list>;
    status: QueryStatus;
};
