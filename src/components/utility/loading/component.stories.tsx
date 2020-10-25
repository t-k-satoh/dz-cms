import React, { ComponentProps } from 'react';
import { UtilityName } from '../constants';
import { Loading } from '.';

export default {
    title: `${UtilityName}/${Loading.name}`,
    component: Loading,
};

const Template = (arg: ComponentProps<typeof Loading>) => <Loading {...arg} />;

export const Component = Template.bind({});
Component.args = {
    isShow: true,
};
