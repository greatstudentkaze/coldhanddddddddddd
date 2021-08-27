import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { Product } from '../../shared/types';

export interface ProductCardProps extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> {
    product: Product,
    form?: 'vertical' | 'square';
}
