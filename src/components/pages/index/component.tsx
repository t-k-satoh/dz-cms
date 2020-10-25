import React from 'react';
import { QueryStatus } from 'react-query';
import { State } from '../../../containers/pages/index/container';
import { Wrapper } from '../../utility/wrapper';

export const Index: React.FC<State> = ({ entities }) => {
    const loadingStatus = React.useMemo(() => {
        const { subCategories, products, categories, imagesGroups, images, keyVisuals } = entities;
        const statusList = [
            subCategories.status,
            products.status,
            categories.status,
            imagesGroups.status,
            images.status,
            keyVisuals.status,
        ];

        const allLength = statusList.length;
        const successLength = statusList.filter((status) => status === QueryStatus.Success).length;

        return {
            allLength,
            successLength,
        };
    }, [entities]);

    const isLoading = React.useMemo(() => loadingStatus.successLength !== loadingStatus.allLength, [loadingStatus]);

    return (
        <Wrapper isLoading={isLoading}>
            <p>test</p>
        </Wrapper>
    );
};
