import { QueryStatus } from 'react-query';
import { CategoriesState } from './types';

export const categoriesState: CategoriesState = { categories: { data: [], status: QueryStatus.Idle } };
