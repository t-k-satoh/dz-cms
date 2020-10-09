import { categories } from 'dz-js-client';
import Cookies from 'js-cookie';
import React from 'react';
import { useQuery } from 'react-query';
import { State, Dispatch } from '../../../containers/pages/index/container';

const getCategories = async () =>
    await categories.list({
        withCredentials: true,
        timeout: 500000,
        headers: {
            authorization: `Bearer ${Cookies.get('token')}`,
        },
    });

export const Index: React.FC<State & Dispatch> = ({ categories, setCategoriesData, setCategoriesStatus }) => {
    const categoriesQuery = useQuery('categories', getCategories);

    React.useEffect(() => {
        setCategoriesStatus(categoriesQuery.status);
        if (categoriesQuery.isSuccess) {
            setCategoriesData(categoriesQuery.data.categories);
        }
    }, [setCategoriesData, setCategoriesStatus, categoriesQuery]);

    return <div>{JSON.stringify(categories)}</div>;
};
