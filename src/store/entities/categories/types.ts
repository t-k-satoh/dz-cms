import { categories } from 'dz-js-client';
import { QueryStatus } from 'react-query';
import { PromiseReturnType } from '../../../../utils/types';

export type CategoriesState = {
    data: PromiseReturnType<typeof categories.list>;
    status: QueryStatus;
};
