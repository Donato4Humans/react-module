import {useEffect, useState} from "react";
import {authResourcesService, loginService} from "../../services/api.service.ts";
import {IProduct} from "../../models/IProduct.ts";
import AuthResourceComponent from "./AuthResourceComponent.tsx";

const AuthResourcesComponent = () => {

    const [products, setProducts] = useState<IProduct[]>([]);

    // AFTER LOGIN ON PREVIOUS(LOGIN PAGE) WE CAN USE OUR TOKEN SAVED IN LOCAL-STORAGE TO GET SECURED DATA FROM API
    useEffect(() => {
        authResourcesService.getAuthProducts().then(authProducts => {
            setProducts(authProducts);
        }).catch(reason => { // HERE WE CATCH ERROR IF OUR TOKEN EXPIRED AND CALLING API VIA SERVICES TO REFRESH TOKEN
            console.log(reason);
            loginService.refresh().then(() => authResourcesService.getAuthProducts()) // AFTER TOKEN REFRESHED
                // WE CALL API AGAIN WITH REFRESHED TOKEN AND GRAB DATA TO DISPLAY
                .then(authProducts => setProducts(authProducts));
        });
    }, []);

    return (
        <div>
            {products.map((product) => <AuthResourceComponent key={product.id} item={product}/>)}
            {/*  HERE WE DISPLAY SECURED DATA --> */}
        </div>
    );
};

export default AuthResourcesComponent;