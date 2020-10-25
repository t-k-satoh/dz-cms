import React, { ComponentProps } from 'react';
import { UtilityName } from '../constants';
import { Wrapper } from '.';

export default {
    title: `${UtilityName}/${Wrapper.name}`,
    component: Wrapper,
};

const Template = (arg: ComponentProps<typeof Wrapper>) => <Wrapper {...arg} />;

export const Component = Template.bind({});
Component.args = {
    isLoading: true,
};
