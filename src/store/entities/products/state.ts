import { QueryStatus } from 'react-query';
import { ProductsState } from './types';

export const productsState: ProductsState = { data: { products: [], success: false }, status: QueryStatus.Idle };
