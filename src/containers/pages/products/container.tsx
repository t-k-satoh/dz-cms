import React from 'react';
import { useQuery } from 'react-query';
import { useSelector, useDispatch } from 'react-redux';
import { createSelector } from 'reselect';
import { Products } from '../../../components/pages/products';
import * as appSlices from '../../../store/app';
import * as entitiesSlices from '../../../store/entities';
import { InitialState } from '../../../store/state/types';
import * as userSlices from '../../../store/user';
import { useCases } from '../../../use-cases';

export type State = {
    products: InitialState['entities']['products']['data']['products'];
};

// export type Dispatch = Record<string, unknown>;

const selector = createSelector([(state: InitialState) => state], (state) => {
    return {
        products: state.entities.products.data.products,
    };
});

// export const useDispatchToProps = (): Dispatch => {};

export const ProductsContainer = (): JSX.Element => {
    const dispatch = useDispatch();
    const productsQuery = useQuery('products', useCases.getProducts);

    React.useEffect(() => {
        dispatch(entitiesSlices.productsSlice.actions.setStatus({ status: productsQuery.status }));
    }, [productsQuery.status]);

    React.useEffect(() => {
        productsQuery.isSuccess && dispatch(entitiesSlices.productsSlice.actions.setData({ data: productsQuery.data }));
    }, [productsQuery.isSuccess, productsQuery.data]);

    const mapStateToProps: State = useSelector(selector);

    return <Products {...mapStateToProps} />;
};
