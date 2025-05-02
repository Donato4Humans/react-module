import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../layouts/MainLayout.tsx";
import CarsPage from "../pages/CarsPage.tsx";
import CreateCarPage from "../pages/CreateCarPage.tsx";

export const routes = createBrowserRouter([
    {path: '/', element: <MainLayout/>, children:[
            {path: 'cars', element: <CarsPage/>},
            {path: 'cars/create', element: <CreateCarPage/>}
        ]}
]);