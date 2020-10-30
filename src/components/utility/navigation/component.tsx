import { Text } from '@adobe/react-spectrum';
import Link from 'next/link';
import React from 'react';
import { NAVIGATION } from '../../../constants';
import { State } from '../../../containers/utility/navigation/container';
import * as Styles from './styles';

export const Navigation: React.FC<State> = ({ currentKey }) => {
    const navigationList = React.useMemo(
        () =>
            NAVIGATION.map(({ label, key, path }) => ({
                label,
                path,
                isSelected: key === currentKey,
            })),
        [currentKey, NAVIGATION],
    );

    return (
        <Styles.Main>
            <Styles.ListWrap>
                {navigationList.map((navigation) => {
                    return (
                        <Styles.List key={navigation.label}>
                            <Link href={navigation.path}>
                                <Styles.LinkDetail>
                                    <Styles.IconWrap></Styles.IconWrap>
                                    <Styles.TextWrap isSelected={navigation.isSelected}>
                                        <Text>{navigation.label}</Text>
                                    </Styles.TextWrap>
                                </Styles.LinkDetail>
                            </Link>
                        </Styles.List>
                    );
                })}
            </Styles.ListWrap>
        </Styles.Main>
    );
};
