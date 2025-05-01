import {FC} from "react";
import {IUser} from "../../models/IUser.ts";

type UserPropsType = {
    item: IUser
}

const UserComponent: FC<UserPropsType> = ({item:{id, username, firstName, lastName}}) => {
    return (
        <div className='border-2 border-violet-600 flex flex-col align-middle'>
            <h3 className='bg-red-400'>ID: {id} Full name: {firstName} {lastName}</h3>
            <p>username: {username}</p>
        </div>
    );
};

export default UserComponent;