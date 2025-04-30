import MenuComponent from "../components/menu/MenuComponent.tsx";
import {Outlet} from "react-router-dom";

const Layout = () => {
    return (
        <div className='bg-gray-600 p-2 flex flex-col text-center'>
            <MenuComponent/>
            <hr/>
            <Outlet/>
        </div>
    );
};

export default Layout;