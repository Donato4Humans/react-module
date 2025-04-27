import {FC} from "react";
import {IUser} from "../../models/IUser.ts";

type UserPropsType = {
    item: IUser,
    details: (item: IUser) => void
}

const UserComponent: FC<UserPropsType> = ({item, details}) => {
    return (
        <>
            <div>
                {item.name}
            </div>
            <button className='border-2' onClick={() => {
                details(item);
            }}>details</button>
        </>
);
};

export default UserComponent;