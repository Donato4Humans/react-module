import {FC} from "react";
import {IProduct} from "../../models/IProduct.ts";

type AuthResourcePropsType = {
    item: IProduct
}

const AuthResourceComponent: FC<AuthResourcePropsType> = ({item: {title, category, price}}) => {
    return (
        <div>
            <h3>Title: {title}, Category: {category}, Price: {price}</h3>
        </div>
    );
};

export default AuthResourceComponent;