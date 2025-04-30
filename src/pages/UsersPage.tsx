import UsersComponent from "../components/users/UsersComponent.tsx";
import {Outlet} from "react-router-dom";

const UsersPage = () => {
    return (
        <div>
            &#8595;USERS-PAGE-CONTENT&#8595;
            <hr/>
            <UsersComponent/>
            <Outlet/>
        </div>
    );
};

export default UsersPage;