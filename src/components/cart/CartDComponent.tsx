import {FC} from "react";
import {ICartD} from "../../models/ICartD.ts";

type PostPropsType  = {
    item: ICartD
}

const CartDComponent: FC<PostPropsType> = ({item:{total, totalProducts}}) => {
    return (
        <div className='border-2 border-violet-600'>
            <p>Products: {totalProducts}</p>
            <h3>Total: {total}</h3>
        </div>
    );
};

export default CartDComponent;