import type { GetStaticProps, NextPage } from 'next';
import Head from 'next/head';

import { fetchCategories } from './api/categories';
import { fetchProducts } from './api/products';
import { withLayout } from '../layout';

import { Section } from '../components/section';
import { Category, Product } from '../shared/types';

interface Props extends Record<string, unknown> {
    products: Product[],
    categories: Category[],
}

const Home: NextPage<Props> = ({ products, categories }): JSX.Element => {
    const newProducts = products.filter((product) => product.new);

    return (
        <>
            <Head>
                <title>coldhand</title>
            </Head>
            <Section className="container" title="Новые поступления" products={newProducts} />
        </>
    );
};

export const getStaticProps: GetStaticProps = async () => {
    const categories = await fetchCategories();
    const products = await fetchProducts();

    return {
        props: { categories, products }
    };
};

export default withLayout(Home);
