import Link from 'next/link';
import Image from 'next/image';
import cn from 'classnames';
import { useMediaQuery } from 'react-responsive';

import { formatRuPrice } from '../../helpers/format-price';

import { ProductCardProps } from './index.props';
import styles from './index.module.css';

const getImageDimensions = (form: ProductCardProps['form'], isMobile = false) => {
    if (isMobile) {
        return { width: 435, height: 435 };
    }

    switch (form) {
        case 'vertical':
            return { width: 275, height: 400 };
        case 'square':
        default:
            return { width: 275, height: 275 };
    }
};

export const ProductCard = ({ product, form = 'square', ...props }: ProductCardProps): JSX.Element => {
    const {
        id,
        title,
        price,
        categories,
        image,
    } = product;

    const isMobile = useMediaQuery({ query: '(max-width: 475px)' });

    const titleId = `product-card-${id}`;
    const { width, height } = getImageDimensions(form, isMobile);

    return (
        <article {...props}>
            <Link href={'/product/[id]'} as={`/product/${id}`}>
                <a className={styles.link}>
                    <Image
                        objectFit="cover"
                        src={image}
                        width={width}
                        height={height}
                        alt=""
                        aria-labelledby={titleId}
                        title={title}
                    />
                </a>
            </Link>
            <h3 className={styles.title} id={titleId}>{title}</h3>
            <p className={styles.price}>{formatRuPrice(price)}</p>
        </article>
    );
};
