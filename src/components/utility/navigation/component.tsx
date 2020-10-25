import { Text, Icon } from '@adobe/react-spectrum';
import Link from 'next/link';
import React from 'react';
import { Paths } from '../../../constants/paths';
import { State } from '../../../containers/utility/navigation/container';
import * as Styles from './styles';

export const Navigation: React.FC<State> = ({ currentKey }) => {
    const navigationList = React.useMemo(() => {
        return Object.entries(Paths).map((entry) => {
            const key = entry[0] as State['currentKey'];
            const { label, path } = entry[1];

            return {
                label: label.en,
                path,
                isSelected: key === currentKey,
            };
        });
    }, []);

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
