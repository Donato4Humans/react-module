import {IProduct} from "./IProduct.ts";

export interface IProductResponse {
    products: IProduct[];
    total: number;
    skip: number;
    limit: number;
}