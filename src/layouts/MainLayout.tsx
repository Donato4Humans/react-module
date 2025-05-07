import MenuComponent from "../components/menu/MenuComponent.tsx";
import {Outlet} from "react-router-dom";

const MainLayout = () => {
    return (
        <div className='text-center border-2 bg-gray-600'>
            <MenuComponent/>
            <hr/>
            <Outlet/>
        </div>
    );
};

export default MainLayout;