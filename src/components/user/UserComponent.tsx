import {FC} from "react";
import {IUser} from "../../models/IUser.ts";

type UserPropsType = {
    item: IUser
}

const UserComponent: FC<UserPropsType> = ({item}) => {
    return (
        <div>
            {item.username}
        </div>
    );
};

export default UserComponent;