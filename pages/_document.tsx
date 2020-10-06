import NextDocument, { Head, Main, NextScript } from 'next/document';
import React from 'react';

class Document extends NextDocument {
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
            </html>
        );
    }
}

export default Document;
