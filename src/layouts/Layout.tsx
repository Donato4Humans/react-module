import MenuComponent from "../components/menu/MenuComponent.tsx";
import {Outlet} from "react-router-dom";

const Layout = () => {
    return (
        <div>
            <MenuComponent/>
            <hr/>
            <Outlet/>
        </div>
    );
};

export default Layout;