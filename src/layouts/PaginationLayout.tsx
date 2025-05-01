import {Outlet} from "react-router-dom";
import PaginationComponent from "../components/pagination/PaginationComponent.tsx";

const PaginationLayout = () => {
    return (
        <div>
            <PaginationComponent/>
            <Outlet/>
        </div>
    );
};

export default PaginationLayout;