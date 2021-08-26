import type { NextPage } from 'next';
import Head from 'next/head';

import { withLayout } from '../layout';

const Home: NextPage = () => {
    return (
        <>
            <Head>
                <title>coldhand</title>
            </Head>
            <section className="container">
                <h1>coldhand</h1>
            </section>
        </>
    );
};

export default withLayout(Home);
