import {FC} from "react";
import {IUser} from "../../models/IUser.ts";

type UserPropsType = {
    item: IUser
}

const UserComponent: FC<UserPropsType> = ({item:{first_name, last_name, avatar}}) => {
    return (
        <div className='border-2 border-violet-600 flex flex-col align-middle'>
            <h3>Full name: {first_name}{last_name}</h3>
            <img className='w-3xs' src={avatar} alt={last_name}/>
        </div>
    );
};

export default UserComponent;