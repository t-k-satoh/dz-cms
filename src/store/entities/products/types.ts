import { products } from 'dz-js-client';
import { QueryStatus } from 'react-query';
import { PromiseReturnType } from '../../../../utils/types';

export type ProductsState = {
    data: PromiseReturnType<typeof products.list>;
    status: QueryStatus;
};
