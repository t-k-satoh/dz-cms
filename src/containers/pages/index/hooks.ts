import React from 'react';

import { useDispatch } from 'react-redux';
import * as entitiesSlices from '../../../store/entities';

export const useDispatchToProps = () => {
    const dispatch = useDispatch();

    const onLaunch = React.useCallback(() => {
        dispatch(entitiesSlices.categoriesSlice.actions.setData({ data: { categories: [], success: true } }));
    }, [dispatch]);

    return { onLaunch };
};
