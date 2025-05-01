import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../App.tsx";
import UsersPage from "../pages/UsersPage.tsx";
import PaginationLayout from "../layouts/PaginationLayout.tsx";

export const routes = createBrowserRouter([
    {path: '/', element: <MainLayout/>, children: [
            {path: '', element: <PaginationLayout/>, children: [ // PAGINATION AS PARENT TO REUSE PAGINATION-COMPONENT
                    {path: 'users', element: <UsersPage/>}, // ON ALL PAGES WHERE IT NEEDED
                ]}
        ]}
]);