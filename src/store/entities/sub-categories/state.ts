import { QueryStatus } from 'react-query';
import { SubCategoriesState } from './types';

export const subCategoriesState: SubCategoriesState = {
    data: { subCategories: [], success: false },
    status: QueryStatus.Idle,
};
