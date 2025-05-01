import './App.css';
import {Link, Outlet} from "react-router-dom";

const MainLayout = () => {
  return (
    <>
        <Link to={'users?pg=1'}>USERS</Link>
        <hr/>
        <Outlet/>
    </>
  );
};

export default MainLayout;