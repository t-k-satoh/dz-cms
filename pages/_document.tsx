import NextDocument, { Head, Main, NextScript } from 'next/document';
import React from 'react';
import { ServerStyleSheet } from 'styled-components';

class Document extends NextDocument {
    static async getInitialProps(ctx) {
        const sheet = new ServerStyleSheet();
        const originalRenderPage = ctx.renderPage;

        try {
            ctx.renderPage = () =>
                originalRenderPage({
                    enhanceApp: (App) => (props) => sheet.collectStyles(<App {...props} />),
                });

            const initialProps = await NextDocument.getInitialProps(ctx);
            return {
                ...initialProps,
                styles: (
                    <>
                        {initialProps.styles}
                        {sheet.getStyleElement()}
                    </>
                ),
            };
        } finally {
            sheet.seal();
        }
    }

    render(): JSX.Element {
        return (
            <html lang="en">
                <Head>
                    <meta name="format-detection" content={['telephone=no', 'email=no', 'address=no'].join(', ')} />
                    <meta name="robots" content="noindex" />

                    <meta name="viewport" content="width=device-width" />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
                <style jsx global>{`
                    html,
                    body,
                    #__next {
                        width: 100%;
                        height: 100%;
                        margin: 0;
                    }
                `}</style>
            </html>
        );
    }
}

export default Document;
