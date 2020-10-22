import { QueryStatus } from 'react-query';
import { ImagesState } from './types';

export const imagesState: ImagesState = { data: { images: [], success: false }, status: QueryStatus.Idle };
