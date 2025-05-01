import {FC} from "react";
import {IUserD} from "../../../models/IUserD.ts";

type UserPropsType = {
    item: IUserD
}

const UserDComponent: FC<UserPropsType> = ({item:{firstName, username, lastName, age, email}}) => {
    return (
        <div className='border-2 border-violet-600'>
            <h3>{firstName}{lastName}, username: {username}</h3>
            <p>age: {age}, email: {email}</p>
        </div>
    );
};

export default UserDComponent;