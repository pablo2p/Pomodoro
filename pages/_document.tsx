import Head from 'next/head';
import Document, { DocumentProps, Html, Main, NextScript } from 'next/document';

class myDocument extends Document<DocumentProps> {
    render(): JSX.Element {
        return (
            <Html>
                <Head>
                    <title>Pomodoro</title>
                    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                    <link href="https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@400;500;600&display=swap" rel="stylesheet" />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default myDocument;