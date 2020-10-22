import React, { ComponentProps } from 'react';

import { Dialogs } from '.';

export default {
    title: 'Example/Button',
    component: Dialogs,
};

const Template = (arg: ComponentProps<typeof Dialogs>) => <Dialogs {...arg} />;

export const SIGN_IN = Template.bind({});
SIGN_IN.args = {
    dialogType: 'SIGN_IN',
};
