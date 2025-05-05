import {FC} from "react";
import {IUser} from "../../models/IUser.ts";

type UserPropsType = {
    item: IUser
}

const UserComponent: FC<UserPropsType> = ({item:{username,id}}) => {
    return (
        <div>
            <h3>{username}, ID: {id}</h3>
        </div>
    );
};

export default UserComponent;