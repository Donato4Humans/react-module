import {FC} from "react";
import {IUserPH} from "../../../models/IUserPH.ts";

type UserPropsType = {
    item: IUserPH
}

const UserPHComponent: FC<UserPropsType> = ({item:{username, name, email, phone}}) => {
    return (
        <div className='border-2 border-violet-600'>
            <h3>{name} - username: {username}</h3>
            <p>email: {email}, phone: {phone}</p>
        </div>
    );
};

export default UserPHComponent;