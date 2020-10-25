import React from 'react';
import * as Styles from './styles';

type Props = {
    isShow: boolean;
};

export const Loading: React.FC<Props> = ({ isShow }) => {
    return isShow ? (
        <Styles.Main>
            <Styles.IconWrap>
                <Styles.SVG viewBox="25 25 50 50">
                    <Styles.Circle cx="50" cy="50" r="20" fill="none" stroke="#FF0000" strokeWidth="2" />
                </Styles.SVG>
            </Styles.IconWrap>
        </Styles.Main>
    ) : null;
};
