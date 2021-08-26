import { FC } from 'react';

import { Header } from './header';
import { Footer } from './footer';

import { LayoutProps } from './index.props';
import styles from './index.module.css';

const Layout = ({ children }: LayoutProps): JSX.Element => {
    return (
        <div className={styles.wrapper}>
            <Header />
            <main>{children}</main>
            <Footer />
        </div>
    );
};

export const withLayout = <T extends Record<string, unknown>>(Component: FC<T>) => {
    // eslint-disable-next-line react/display-name
    return (props: T): JSX.Element => {
        return (
            <Layout>
                <Component {...props} />
            </Layout>
        );
    };
};
