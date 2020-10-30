import React from 'react';
import logo from './logo.png';
import * as Styles from './styles';

export const Header: React.FC = () => {
    return (
        <Styles.Main>
            <Styles.Logo src={logo} alt={'DZ works CMS'} />
        </Styles.Main>
    );
};
