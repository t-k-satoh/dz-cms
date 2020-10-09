import { Button } from '@adobe/react-spectrum';
import { categories, products } from 'dz-js-client';
import Cookies from 'js-cookie';
import { NextComponentType } from 'next';
import React from 'react';
import { useQuery } from 'react-query';

import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import * as entitiesSlices from '../src/store/entities';

const Title = styled.h1`
    font-size: 50px;
    color: ${({ theme }) => theme.colors.primary};
`;

const getCategories = async () =>
    await categories.list({
        withCredentials: true,
        timeout: 500000,
        headers: {
            authorization: `Bearer ${Cookies.get('token')}`,
        },
    });

const Index: NextComponentType = () => {
    const dispatch = useDispatch();
    const count = useSelector((state: any) => state);

    const categoriesQuery = useQuery('categories', getCategories);

    console.log(categoriesQuery.data);

    const onClick = async () => {
        const res = await categories.list({
            withCredentials: true,
            timeout: 500000,
            headers: {
                authorization: `Bearer ${Cookies.get('token')}`,
            },
        });

        dispatch(entitiesSlices.categoriesSlice.actions.set({ categories: res.categories }));
    };

    return (
        <div>
            <Title>Count:</Title>
            <p>{JSON.stringify(count)}</p>
            <a href="/api/login">login</a>
            <Button onPress={onClick} variant={'cta'}>
                Get
            </Button>
        </div>
    );
};

export default Index;
