import React, { ComponentProps } from 'react';
import { UtilityName } from '../constants';
import { Dialogs } from '.';

const Template = (arg: ComponentProps<typeof Dialogs>) => <Dialogs {...arg} />;

export default {
    title: `${UtilityName}/${Dialogs.name}`,
    component: Dialogs,
};

export const SIGN_IN = Template.bind({});
SIGN_IN.args = {
    dialogType: 'SIGN_IN',
};
