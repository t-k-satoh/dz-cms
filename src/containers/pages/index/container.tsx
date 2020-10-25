import React from 'react';
import { useQuery } from 'react-query';
import { useSelector, useDispatch } from 'react-redux';
import { createSelector } from 'reselect';
import { Index } from '../../../components/pages/index';
import * as appSlices from '../../../store/app';
import * as entitiesSlices from '../../../store/entities';
import { InitialState } from '../../../store/state/types';
import * as userSlices from '../../../store/user';
import { useCases } from '../../../use-cases';

export type State = {
    entities: InitialState['entities'];
};

// export type Dispatch = Record<string, unknown>;

const selector = createSelector([(state: InitialState) => state], (state) => {
    return {
        entities: state.entities,
    };
});

// export const useDispatchToProps = (): Dispatch => {};

export const IndexContainer = (): JSX.Element => {
    const dispatch = useDispatch();
    const categoriesQuery = useQuery('categories', useCases.getCategories);
    const imagesQuery = useQuery('images', useCases.getImages);
    const imagesGroupsQuery = useQuery('imagesGroups', useCases.getImagesGroups);
    const keyVisualsQuery = useQuery('keyVisuals', useCases.getKeyVisuals);
    const productsQuery = useQuery('products', useCases.getProducts);
    const subCategoriesQuery = useQuery('subCategories', useCases.getSubCategories);

    React.useEffect(() => {
        dispatch(entitiesSlices.categoriesSlice.actions.setStatus({ status: categoriesQuery.status }));
    }, [categoriesQuery.status]);

    React.useEffect(() => {
        categoriesQuery.isSuccess &&
            dispatch(entitiesSlices.categoriesSlice.actions.setData({ data: categoriesQuery.data }));
    }, [categoriesQuery.isSuccess, categoriesQuery.data]);

    React.useEffect(() => {
        dispatch(entitiesSlices.imagesSlice.actions.setStatus({ status: imagesQuery.status }));
    }, [imagesQuery.status]);

    React.useEffect(() => {
        imagesQuery.isSuccess && dispatch(entitiesSlices.imagesSlice.actions.setData({ data: imagesQuery.data }));
    }, [imagesQuery.isSuccess, imagesQuery.data]);

    React.useEffect(() => {
        dispatch(entitiesSlices.imagesGroupsSlice.actions.setStatus({ status: imagesGroupsQuery.status }));
    }, [imagesGroupsQuery.status]);

    React.useEffect(() => {
        imagesGroupsQuery.isSuccess &&
            dispatch(entitiesSlices.imagesGroupsSlice.actions.setData({ data: imagesGroupsQuery.data }));
    }, [imagesGroupsQuery.isSuccess, imagesGroupsQuery.data]);

    React.useEffect(() => {
        dispatch(entitiesSlices.keyVisualsSlice.actions.setStatus({ status: keyVisualsQuery.status }));
    }, [keyVisualsQuery.status]);

    React.useEffect(() => {
        keyVisualsQuery.isSuccess &&
            dispatch(entitiesSlices.keyVisualsSlice.actions.setData({ data: keyVisualsQuery.data }));
    }, [keyVisualsQuery.isSuccess, keyVisualsQuery.data]);

    React.useEffect(() => {
        dispatch(entitiesSlices.productsSlice.actions.setStatus({ status: productsQuery.status }));
    }, [productsQuery.status]);

    React.useEffect(() => {
        productsQuery.isSuccess && dispatch(entitiesSlices.productsSlice.actions.setData({ data: productsQuery.data }));
    }, [productsQuery.isSuccess, productsQuery.data]);

    React.useEffect(() => {
        dispatch(entitiesSlices.subCategoriesSlice.actions.setStatus({ status: subCategoriesQuery.status }));
    }, [subCategoriesQuery.status]);

    React.useEffect(() => {
        subCategoriesQuery.isSuccess &&
            dispatch(entitiesSlices.subCategoriesSlice.actions.setData({ data: subCategoriesQuery.data }));
    }, [subCategoriesQuery.isSuccess, subCategoriesQuery.data]);

    const isAllDataSuccess: boolean = React.useMemo(() => {
        const dataList = [
            categoriesQuery.data,
            imagesQuery.data,
            imagesGroupsQuery.data,
            keyVisualsQuery.data,
            productsQuery.data,
            subCategoriesQuery.data,
        ];

        if (dataList.every((data) => data !== undefined)) {
            return dataList.map((data) => data.success).every((_success) => _success);
        }
        return false;
    }, [
        categoriesQuery.data,
        imagesQuery.data,
        imagesGroupsQuery.data,
        keyVisualsQuery.data,
        productsQuery.data,
        subCategoriesQuery.data,
    ]);

    React.useEffect(() => {
        dispatch(userSlices.isSignInSlice.actions.setIsSignIn({ isSignIn: isAllDataSuccess }));

        !isAllDataSuccess && dispatch(appSlices.dialogsSlice.actions.setType({ type: 'SIGN_IN' }));
    }, [isAllDataSuccess]);

    const mapStateToProps: State = useSelector(selector);

    return <Index {...mapStateToProps} />;
};
