import {FC} from "react";
import {IUser} from "../../models/IUser.ts";

type DetailsPropsType = {
    item: IUser
}

const UserDetails: FC<DetailsPropsType> = ({item:{ name, phone, email, website}}) => {
    return (
        <div>
            <h3>{name}</h3>
            <p>Phone: {phone} - Email: {email} - Website: {website}</p>
        </div>
    );
};

export default UserDetails;