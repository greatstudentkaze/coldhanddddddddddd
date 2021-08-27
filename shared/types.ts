export type UriString = string;
export type UniqueString = string;
export type EntityId = UniqueString;

export type Category = "T-shirt" | "Hoodie" | "Longsleeve";

export interface Product {
    id: EntityId,
    categories: Category[],
    title: string,
    image: UriString,
    price: number,
    new?: boolean,
}
