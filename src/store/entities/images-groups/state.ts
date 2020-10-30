import { QueryStatus } from 'react-query';
import { IMAGES_GROUPS } from '../../../constants';
import { ImagesGroupsState } from './types';

export const imagesGroupsState: ImagesGroupsState = {
    data: { imagesGroups: [], success: false },
    status: QueryStatus.Idle,
    key: IMAGES_GROUPS,
};
