import {IProduct} from "./IProduct.ts";

export interface IProductResponseModel {
    products: IProduct[];
    total: number;
    skip: number;
    limit: number;
}