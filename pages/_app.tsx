import { Provider as UIProvider, defaultTheme } from '@adobe/react-spectrum';
import { SSRProvider } from '@react-aria/ssr';
import NextApp, { AppInitialProps } from 'next/app';
import React from 'react';
import { ReactQueryConfigProvider, ReactQueryConfig } from 'react-query';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { Reset } from 'styled-reset';
import { store } from '../src/store';

const theme = {
    colors: {
        primary: '#0070f3',
    },
};

const queryConfig: ReactQueryConfig = {
    shared: {
        suspense: true,
    },
};

class App extends NextApp<AppInitialProps> {
    render(): JSX.Element {
        const { Component, pageProps } = this.props;

        return (
            <SSRProvider>
                <Provider store={store}>
                    <UIProvider theme={defaultTheme} minHeight="100%">
                        <ThemeProvider theme={theme}>
                            <Reset />
                            <Component {...pageProps} />
                        </ThemeProvider>
                    </UIProvider>
                </Provider>
            </SSRProvider>
        );
    }
}

export default App;
