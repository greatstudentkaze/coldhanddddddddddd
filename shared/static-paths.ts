import { EntityId } from './types';

export const staticProductsIdList: EntityId[] = ['1', '2', '3', '4', '5', '6'];

export const productPaths = staticProductsIdList.map((id) => ({
    params: { id }
}));
