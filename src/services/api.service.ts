import {IProduct} from "../models/IProduct.ts";
import {IProductResponse} from "../models/IProductResponse.ts";

const productsEndpoint = import.meta.env.VITE_API_BASE_URL + "/products";

const getProducts = async (): Promise<IProduct[]> => {
    const response: IProductResponse = await fetch(productsEndpoint)
        .then(value => value.json());
    return response.products;
}

export {
    getProducts
};