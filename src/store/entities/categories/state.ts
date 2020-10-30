import { QueryStatus } from 'react-query';
import { CATEGORIES } from '../../../constants';
import { CategoriesState } from './types';

export const categoriesState: CategoriesState = {
    data: { categories: [], success: false },
    status: QueryStatus.Idle,
    key: CATEGORIES,
};
