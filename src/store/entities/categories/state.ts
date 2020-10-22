import { QueryStatus } from 'react-query';
import { CategoriesState } from './types';

export const categoriesState: CategoriesState = { data: { categories: [], success: false }, status: QueryStatus.Idle };
