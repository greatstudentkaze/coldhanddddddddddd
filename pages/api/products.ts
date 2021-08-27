import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

import { config } from '../../api/config';
import { Product } from '../../shared/types';

export const fetchProducts = async (): Promise<Product[]> => {
    const { data } = await axios.get(`${config.baseUrl}/products.json`);
    return data;
};

const handler = async (req: NextApiRequest, res: NextApiResponse<Product[]>): Promise<void> => {
    const products = await fetchProducts();
    res.json(products);
};

export default handler;
