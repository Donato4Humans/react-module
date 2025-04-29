import ProductComponent from "../product-component/ProductComponent.tsx";
import {useEffect, useState} from "react";
import {getProducts} from "../../services/api.service.ts";
import {IProduct} from "../../models/IProduct.ts";

const ProductsComponent = () => {

    const [products, setProducts] = useState<IProduct[]>([]);

    useEffect(() => {
        getProducts().then(value => {
            setProducts(value);
        });

        return () => {
            console.log('done fetch');
        };
    }, []);

    return (
        <div>
            {products.map(value => <ProductComponent key={value.id} product={value}/>)}
        </div>
    );
};

export default ProductsComponent;