import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

import { config } from '../../api/config';
import { Category } from '../../shared/types';

export const fetchCategories = async (): Promise<Category[]> => {
    const { data } = await axios.get(`${config.baseUrl}/categories.json`);
    return data;
};

const handler = async (req: NextApiRequest, res: NextApiResponse<Category[]>): Promise<void> => {
    const categories = await fetchCategories();
    res.json(categories);
};

export default handler;
