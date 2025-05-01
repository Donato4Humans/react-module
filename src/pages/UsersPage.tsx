import UsersDComponent from "../components/users/UsersDComponent.tsx";
import {Outlet} from "react-router-dom";

const UsersPage = () => {
    return (
        <div>
            <hr/>
            <Outlet/>
            <hr/>
            <UsersDComponent/>
        </div>
    );
};

export default UsersPage;