import {createBrowserRouter} from "react-router-dom";
import Layout from "../layouts/Layout.tsx";
import HomePage from "../pages/HomePage.tsx";
import UsersPage from "../pages/UsersPage.tsx";
import PostsPage from "../pages/PostsPage.tsx";
import UserDetailsPage from "../pages/UserDetailsPage.tsx";

export const routes = createBrowserRouter([
    {
        path: '/', element: <Layout/>,
        children:
            [
                {index: true,   element: <HomePage/>},
                {path: 'users', element: <UsersPage/>, children:[
                        {path: 'posts/:userId', element: <PostsPage/>} // WE WILL GET :userId PARAM INSIDE POSTS-PAGE TO CREATE DYNAMIC ROUTE
                    ]},
                {path: 'users/details', element: <UserDetailsPage/>}, // new route for user details
                {path: 'posts', element: <PostsPage/>},
            ]
    },
]);