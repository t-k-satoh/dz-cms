import { QueryStatus } from 'react-query';
import { ImagesGroupsState } from './types';

export const imagesGroupsState: ImagesGroupsState = {
    data: { imagesGroups: [], success: false },
    status: QueryStatus.Idle,
};
