import {useEffect, useState} from "react";
import {cartService} from "../../services/api.service.ts";
import {ICartD} from "../../models/ICartD.ts";
import CartDComponent from "../cart/CartDComponent.tsx";
import {useParams} from "react-router-dom";

const CartsDComponent = () => {

    const {userId} = useParams();
    const [carts, setCarts] = useState<ICartD[]>([]);

    useEffect(() => {
        if(userId){
            cartService.getCartsOfUserById(userId).then(userCarts => {
                setCarts(userCarts);
            })
        }
    }, [userId]);

    return (
        <div>
            {carts.map((cart) => <CartDComponent key={cart.id} item={cart} />)}
        </div>
    );
};

export default CartsDComponent;