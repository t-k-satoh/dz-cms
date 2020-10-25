import React, { ComponentProps } from 'react';
import { UtilityName } from '../constants';
import { Navigation } from '.';

export default {
    title: `${UtilityName}/${Navigation.name}`,
    component: Navigation,
};

const Template = (arg: ComponentProps<typeof Navigation>) => <Navigation {...arg} />;

export const Component = Template.bind({});
Component.args = {
    isShow: true,
};
