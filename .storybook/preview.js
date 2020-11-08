import { Provider as UIProvider, defaultTheme } from '@adobe/react-spectrum';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Reset } from 'styled-reset';
import { Provider } from 'react-redux';
import { store } from '../src/store';

const theme = {
    colors: {
        primary: '#0070f3',
    },
};

export const parameters = {
    actions: { argTypesRegex: '^on[A-Z].*' },
};

export const decorators = [
    (Story) => (
        <Provider store={store}><UIProvider theme={defaultTheme} minHeight="100%">
        <ThemeProvider theme={theme}>
            <Reset />
            <Story />
        </ThemeProvider>
    </UIProvider></Provider>

    ),
];
