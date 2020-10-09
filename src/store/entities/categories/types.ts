import { categories } from 'dz-js-client';
import { QueryStatus } from 'react-query';
import { PromiseReturnType } from '../../../../utils/types';

export type CategoriesState = {
    categories: {
        data: PromiseReturnType<typeof categories.list>['categories'];
        status: QueryStatus;
    };
};
