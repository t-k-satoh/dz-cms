import React from 'react';
import { DialogsContainer } from '../../../containers/utility/dialogs';
import { NavigationContainer } from '../../../containers/utility/navigation';
import { Loading } from '../../utility/loading';
import * as Styles from './styles';

type Props = {
    isLoading: boolean;
};

export const Wrapper: React.FC<Props> = ({ isLoading, children }) => {
    return (
        <Styles.Main>
            {isLoading ? (
                <Loading isShow />
            ) : (
                <>
                    <DialogsContainer />
                    <NavigationContainer />
                    {children}
                </>
            )}
        </Styles.Main>
    );
};
