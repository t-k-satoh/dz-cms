import { categoriesState } from './categories/state';
import { CategoriesState } from './categories/types';

export type EntitiesState = CategoriesState;

export const entitiesState: EntitiesState = {
    ...categoriesState,
};
