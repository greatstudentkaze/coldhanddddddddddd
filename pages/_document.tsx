import Document, { Html, Head, Main, NextScript } from 'next/document';

class AppDocument extends Document {
    render(): JSX.Element {
        return (
            <Html className="page" lang="ru">
                <Head />
                <body className="page__body">
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default AppDocument;
