import {FC} from "react";
import {IUser} from "../../models/IUser.ts";

type UserPropsType = {
    item: IUser
}

const UserComponent: FC<UserPropsType> = ({item:{id, name}}) => {
    return (
        <div className='border-2 bg-red-400'>
            <h3>ID: {id}, Name: {name}</h3>
        </div>
    );
};

export default UserComponent;