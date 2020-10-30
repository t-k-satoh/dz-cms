import React from 'react';
import { DialogsContainer } from '../../../containers/utility/dialogs';
import { NavigationContainer } from '../../../containers/utility/navigation';
import { Loading } from '../../utility/loading';
import { Header } from '../header';
import * as Styles from './styles';

type Props = {
    isLoading: boolean;
    canRender: boolean;
};

export const Wrapper: React.FC<Props> = ({ isLoading, canRender, children }) => {
    return (
        <Styles.Main>
            {isLoading ? (
                <Loading isShow />
            ) : (
                <>
                    <Styles.Header>
                        <Header />
                    </Styles.Header>
                    <Styles.ContentWrap>
                        <Styles.Navigation>
                            <NavigationContainer />
                        </Styles.Navigation>
                        <Styles.Contents>{children}</Styles.Contents>
                    </Styles.ContentWrap>
                    <DialogsContainer />
                </>
            )}
        </Styles.Main>
    );
};
