import pascalcase from 'pascalcase';
import React, { ComponentProps } from 'react';
import { State } from '../../../containers/pages/products/container';
import { Wrapper } from '../../utility/wrapper';
import * as Styles from './styles';

export const Products: React.FC<State> = ({ products }) => {
    return <Wrapper isLoading={false} canRender={true}></Wrapper>;
};
