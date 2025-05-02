import {Outlet} from "react-router-dom";
import MenuComponent from "../components/menu/MenuComponent.tsx";

const MainLayout = () => {
    return (
        <div className='text-center'>
            <MenuComponent/>
            <hr/>
            <Outlet/>
        </div>
    );
};

export default MainLayout;