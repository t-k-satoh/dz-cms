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
    const categoriesQuery = useQuery('categories', useCases.getCategories, {
        initialData: { success: false, categories: [] },
    });
    const imagesQuery = useQuery('images', useCases.getImages, {
        initialData: { success: false, images: [] },
    });
    const imagesGroupsQuery = useQuery('imagesGroups', useCases.getImagesGroups, {
        initialData: { success: false, imagesGroups: [] },
    });
    const keyVisualsQuery = useQuery('keyVisuals', useCases.getKeyVisuals, {
        initialData: { success: false, keyVisuals: [] },
    });
    const productsQuery = useQuery('products', useCases.getProducts, {
        initialData: { success: false, products: [] },
    });
    const subCategoriesQuery = useQuery('subCategories', useCases.getSubCategories, {
        initialData: { success: false, subCategories: [] },
    });

    const testQuery = useQuery('subCategories', useCases.getProducts);

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
        return [
            categoriesQuery.data.success,
            imagesQuery.data.success,
            imagesGroupsQuery.data.success,
            keyVisualsQuery.data.success,
            productsQuery.data.success,
            subCategoriesQuery.data.success,
        ].every((_success) => _success);
    }, [
        categoriesQuery.data.success,
        imagesQuery.data.success,
        imagesGroupsQuery.data.success,
        keyVisualsQuery.data.success,
        productsQuery.data.success,
        subCategoriesQuery.data.success,
    ]);

    React.useEffect(() => {
        dispatch(userSlices.isSignInSlice.actions.setIsSignIn({ isSignIn: isAllDataSuccess }));

        !isAllDataSuccess && dispatch(appSlices.dialogsSlice.actions.setType({ type: 'SIGN_IN' }));
    }, [isAllDataSuccess]);

    const mapStateToProps: State = useSelector(selector);

    return <Index {...mapStateToProps} />;
};
