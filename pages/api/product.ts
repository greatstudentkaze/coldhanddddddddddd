import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

import { config } from '../../api/config';
import { Product } from '../../shared/types';

export const fetchProduct = async (id: Product['id']): Promise<Product[]> => {
    const { data } = await axios.get(`${config.baseUrl}/product.json`);
    return data;
};

const handler = async (req: NextApiRequest, res: NextApiResponse<Product[]>): Promise<void> => {
    const mockId = '1';
    const product = await fetchProduct(mockId);
    res.json(product);
};

export default handler;
