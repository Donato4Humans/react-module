import {Outlet} from "react-router-dom";

const UsersPage = () => {
    return (
        <div>
            USERS-PAGE-CONTENT
            <hr/>
            <Outlet/>
        </div>
    );
};

export default UsersPage;