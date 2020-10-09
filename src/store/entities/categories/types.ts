import { categories } from 'dz-js-client';
import { PromiseReturnType } from '../../../../utils/types';

export type CategoriesState = {
    categories: PromiseReturnType<typeof categories.list>['categories'];
};
