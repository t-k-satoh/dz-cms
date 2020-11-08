import pascalcase from 'pascalcase';
import React, { ComponentProps } from 'react';
import { State } from '../../../containers/pages/products/container';
import { Wrapper } from '../../utility/wrapper';
import * as Styles from './styles';

export const Products: React.FC<State> = ({ products }) => {
    const columns: ComponentProps<typeof Table>['columns'] = React.useMemo(() => {
        if (products.length === 0) {
            return [];
        }

        const keys = Object.keys(products[0]);

        return keys.map((key) => {
            return {
                title: pascalcase(key),
                key,
            };
        });
    }, products);

    console.log(columns, products);

    return <Wrapper isLoading={false} canRender={true}></Wrapper>;
};
