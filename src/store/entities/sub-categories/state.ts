import { QueryStatus } from 'react-query';
import { SUB_CATEGORIES } from '../../../constants';
import { SubCategoriesState } from './types';

export const subCategoriesState: SubCategoriesState = {
    data: { subCategories: [], success: false },
    status: QueryStatus.Idle,
    key: SUB_CATEGORIES,
};
