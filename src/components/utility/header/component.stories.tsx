import React, { ComponentProps } from 'react';
import { UtilityName } from '../constants';
import { Header } from '.';

const Template = (arg: ComponentProps<typeof Header>) => <Header {...arg} />;

export default {
    title: `${UtilityName}/${Header.name}`,
    component: Header,
};

export const Component = Template.bind({});
