import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { createSelector } from 'reselect';
import { Index } from '../../../components/pages/index';
import * as entitiesSlices from '../../../store/entities';
import { InitialState } from '../../../store/state/types';

export type State = {
    categories: InitialState['entities']['categories'];
};

export type Dispatch = {
    setCategoriesData: (data: InitialState['entities']['categories']['data']) => void;
    setCategoriesStatus: (status: InitialState['entities']['categories']['status']) => void;
};

const selector = createSelector(
    [(state: InitialState) => state.entities.categories, (state: InitialState) => state.entities.categories.status],
    (categories) => {
        return {
            categories,
        };
    },
);

export const IndexContainer = (): JSX.Element => {
    const dispatch = useDispatch();

    const mapStateToProps: State = useSelector(selector);
    const mapDispatchToProps: Dispatch = {
        setCategoriesData: (data) => {
            dispatch(entitiesSlices.categoriesSlice.actions.setData({ data }));
        },
        setCategoriesStatus: (status) => {
            dispatch(entitiesSlices.categoriesSlice.actions.setStatus({ status }));
        },
    };

    return <Index {...mapStateToProps} {...mapDispatchToProps} />;
};
