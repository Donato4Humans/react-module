import {FC} from "react";
import {IProduct} from "../../models/IProduct.ts";

type ProductPropsType = {
    product: IProduct
}

const ProductComponent: FC<ProductPropsType> = ({product:{id, title, description, price, category}}) => {
    return (
        <div className='border-2 border-violet-600'>
            <h3 className='bg-green-300'>id: {id}, title: {title}, category: {category}</h3>
            <p>descr: {description}</p>
            <p className='bg-red-400'>PRICE: {price}</p>
        </div>
    );
};

export default ProductComponent;