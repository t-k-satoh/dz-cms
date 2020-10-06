import { Provider, defaultTheme } from '@adobe/react-spectrum';
import { SSRProvider } from '@react-aria/ssr';
import NextApp, { AppInitialProps } from 'next/app';
import React from 'react';

class App extends NextApp<AppInitialProps> {
    render(): JSX.Element {
        const { Component, pageProps } = this.props;

        return (
            <SSRProvider>
                <Provider theme={defaultTheme} minHeight="100%">
                    <Component {...pageProps} />
                </Provider>
            </SSRProvider>
        );
    }
}

export default App;
