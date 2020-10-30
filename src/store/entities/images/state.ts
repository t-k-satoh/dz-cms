import { QueryStatus } from 'react-query';
import { IMAGES } from '../../../constants';
import { ImagesState } from './types';

export const imagesState: ImagesState = { data: { images: [], success: false }, status: QueryStatus.Idle, key: IMAGES };
