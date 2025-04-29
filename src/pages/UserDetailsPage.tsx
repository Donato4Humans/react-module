import {useLocation} from "react-router-dom";
import {IUser} from "../models/IUser.ts";

const UserDetailsPage = () => {

    const {state} = useLocation(); // WE GRAB PREVIOUSLY SAVED USER OBJ FROM OTHER PAGE AND DISPLAY IT
    const user = state as IUser;

    return (
        <div>
            {user.phone}
        </div>
    );
};

export default UserDetailsPage;