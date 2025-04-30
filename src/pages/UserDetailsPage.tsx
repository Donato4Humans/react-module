import {useLocation} from "react-router-dom";
import {IUser} from "../models/IUser.ts";
import UserDetails from "../components/user/UserDetails.tsx";

const UserDetailsPage = () => {

    const {state} = useLocation(); // WE GRAB PREVIOUSLY SAVED USER OBJ FROM OTHER PAGE AND DISPLAY IT
    const user = state as IUser;

    return (
        <div>
            <UserDetails item={user}/>
        </div>
    );
};

export default UserDetailsPage;