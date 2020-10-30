import React from 'react';
import { QueryStatus } from 'react-query';
import { State } from '../../../containers/pages/index/container';
import { Wrapper } from '../../utility/wrapper';
import * as Styles from './styles';

export const Index: React.FC<State> = ({ entities, isSignIn }) => {
    const { subCategories, products, categories, imagesGroups, images, keyVisuals } = entities;

    const data = React.useMemo(() => {
        return [subCategories, products, categories, imagesGroups, images, keyVisuals];
    }, [subCategories, products, categories, imagesGroups, images, keyVisuals]);

    const isLoading = React.useMemo(() => {
        const statusList = data.map((_data) => _data.status);

        const allLength = statusList.length;
        const successLength = statusList.filter((status) => status === QueryStatus.Success).length;

        return successLength !== allLength;
    }, [data]);

    const productsData = React.useMemo(() => {
        products.data.products.map;
    }, [products.data]);

    return (
        <Wrapper isLoading={isLoading} canRender={isSignIn}>
            <Styles.CardWrap>
                <Styles.Card>
                    <Styles.CardTitle>{products.key}</Styles.CardTitle>
                </Styles.Card>
            </Styles.CardWrap>
        </Wrapper>
    );
};
