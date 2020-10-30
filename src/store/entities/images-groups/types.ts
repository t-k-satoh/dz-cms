import { imagesGroups } from 'dz-js-client';
import { QueryStatus } from 'react-query';
import { PromiseReturnType } from '../../../../utils/types';
import { IMAGES_GROUPS } from '../../../constants';

export type ImagesGroupsState = {
    data: PromiseReturnType<typeof imagesGroups.list>;
    status: QueryStatus;
    key: typeof IMAGES_GROUPS;
};
