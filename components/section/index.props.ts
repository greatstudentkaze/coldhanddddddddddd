import { DetailedHTMLProps, HTMLAttributes } from 'react';

import { Product } from '../../shared/types';

export interface SectionProps extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> {
    title: string,
    products: Product[],
}
