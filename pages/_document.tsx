import Document, { Html, Head, Main, NextScript } from 'next/document';

class AppDocument extends Document {
    render(): JSX.Element {
        return (
            <Html className="page" lang="ru">
                <Head>
                    <link rel="preconnect" href="https://fonts.googleapis.com" />
                    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
                    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&family=Ruda:wght@400;700;900&display=swap" rel="stylesheet" />
                </Head>
                <body className="page__body">
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default AppDocument;
