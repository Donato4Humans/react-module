import {FC} from "react";
import {IUser} from "../../models/IUser.ts";
import {Link, useNavigate} from "react-router-dom";

type UserPropsType = {
    item: IUser
}

const UserComponent: FC<UserPropsType> = ({item}) => {

    const navigate = useNavigate(); // SECOND APPROACH(ADD ON_CLICK EVENT AND USE BUTTON
    const handleOnClick = () => {
        navigate('details', {state: item});
    }

    return (
        <div>
            <Link to={'details'} state={item}>{item.username}</Link>
        {/*  !!!FIRST APPROACH(LINK COMPONENT) ==  WE SAVE STATE OF USER OBJ TO GRAB IT LATER INSIDE USER-DETAILS PAGE */}

            <button onClick={handleOnClick} className='border-violet-600 bg-gray-600'>---DETAILS</button>
        {/*    !!!SECOND APPROACH*/}
        </div>
    );
};

export default UserComponent;