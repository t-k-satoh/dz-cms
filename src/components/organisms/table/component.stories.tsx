import React, { ComponentProps } from 'react';
import { Name } from '../constants';
import { Table } from '.';

const Component = Table;

const Template = (arg: ComponentProps<typeof Component>) => <Component {...arg} />;

export default {
    title: `${Name}/${Component.name}`,
    component: Component,
};

const props: ComponentProps<typeof Component> = {
    columns: [
        {
            title: 'String',
            key: 'string',
            type: 'string',
        },
        {
            title: 'NumberNumberNumber',
            key: 'number',
            type: 'number',
        },
    ],
    data: [
        {
            string: '',
            number: 0,
        },
        {
            string: '',
            number: 100,
        },
    ],
};

export const COMPONENT = Template.bind({});
COMPONENT.args = props;
