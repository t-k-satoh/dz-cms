import { products } from 'dz-js-client';
import { QueryStatus } from 'react-query';
import { PromiseReturnType } from '../../../../utils/types';
import { PRODUCTS } from '../../../constants';

export type ProductsState = {
    data: PromiseReturnType<typeof products.list>;
    status: QueryStatus;
    key: typeof PRODUCTS;
};
