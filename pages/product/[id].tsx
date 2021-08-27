import { GetStaticPaths, GetStaticProps, GetStaticPropsContext, NextPage } from 'next';
import { useRouter } from 'next/router';
import Image from 'next/image';

import { productPaths as paths } from '../../shared/static-paths';
import { fetchProduct } from '../api/product';
import { formatRuPrice } from '../../helpers/format-price';
import { Product as ProductType } from '../../shared/types';

import { withLayout } from '../../layout';
import { Loader } from '../../components/loader';

interface ProductProps extends Record<string, unknown> {
    product: ProductType,
}

const Product: NextPage<ProductProps> = ({ product }) => {
    const { isFallback } = useRouter();

    if (isFallback) {
        return <Loader />;
    }

    const {
        id,
        title,
        price,
        categories,
        image,
    } = product;

    const titleId = `product-title-${id}`;

    return (
        <div className="container">
            <article className="productCard">
                <h1 id={titleId}>{title}</h1>
                <div className="imageContainer">
                    <Image src={image} width={600} height={600} alt="" aria-labelledby={titleId} />
                </div>
                <p>{formatRuPrice(price)}</p>
            </article>
        </div>
    );
};

export const getStaticPaths: GetStaticPaths = async () => {
    return {
        paths,
        fallback: true,
    };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
    if (!params) {
        return { notFound: true };
    }

    if (typeof params.id !== 'string') {
        throw new Error("Unexpected id");
    }

    try {
        const product = await fetchProduct(params.id);

        return {
            props: { product },
        };
    } catch (err) {
        return { notFound: true };
    }
};

export default withLayout(Product);
