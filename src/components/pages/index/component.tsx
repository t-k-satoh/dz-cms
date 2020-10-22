import React from 'react';
import { State } from '../../../containers/pages/index/container';
import { DialogsContainer } from '../../../containers/utility/dialogs';

export const Index: React.FC<State> = ({ entities }) => {
    return (
        <>
            <DialogsContainer />
            {JSON.stringify(entities)}
        </>
    );
};
