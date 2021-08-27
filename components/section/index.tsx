import Link from 'next/link';
import cn from 'classnames';

import { ProductCard } from '../product-card';

import { SectionProps } from './index.props';
import styles from './index.module.css';
import ArrowIcon from './arrow.svg';

export const Section = ({ title, products, className, ...props }: SectionProps): JSX.Element => {
    return (
        <section className={cn(className, styles.section)} {...props}>
            <div className={styles.header}>
                <h2 className={styles.title}>{title}</h2>
                <Link href={'/catalog'}>
                    <a className={styles.linkToCatalog}>
                        Перейти в каталог
                        <span className={styles.arrowIcon}>
                            <ArrowIcon />
                        </span>
                    </a>
                </Link>
            </div>
            <ul className={styles.productList}>
                {products.slice(0, 4).map((product, i) => <li key={product.id}>
                    <ProductCard product={product} form={i % 2 ? 'square' : 'vertical'} />
                </li>)}
            </ul>
        </section>
    );
};
