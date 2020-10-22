import React from 'react';
import { useQuery, QueryStatus } from 'react-query';
import { useSelector, useDispatch } from 'react-redux';
import { createSelector } from 'reselect';
import { Dialogs } from '../../../components/utility/dialogs';
import * as entitiesSlices from '../../../store/entities';
import { InitialState } from '../../../store/state/types';
import { useCases } from '../../../use-cases';

export type State = {
    dialogType: InitialState['app']['dialogs']['type'];
};

const selector = createSelector([(state: InitialState) => state], (state) => {
    return {
        dialogType: state.app.dialogs.type,
    };
});

export const DialogsContainer = (): JSX.Element => {
    const mapStateToProps: State = useSelector(selector);

    return <Dialogs {...mapStateToProps} />;
};
