import {createBrowserRouter} from "react-router-dom";
import Layout from "../layouts/Layout.tsx";
import HomePage from "../pages/HomePage.tsx";
import UsersPage from "../pages/UsersPage.tsx";
import PostsPage from "../pages/PostsPage.tsx";
import CommentsPage from "../pages/CommentsPage.tsx";
import PlaceholderComponent from "../components/placeholder/PlaceholderComponent.tsx";
import DummyComponent from "../components/dummy/DummyComponent.tsx";

export const routes = createBrowserRouter([
    {
        path: '/', element: <Layout/>, children:[
            {index: true, element:      <HomePage/>},
            {path: 'users', element:    <UsersPage/>, children:[
                    {path: 'jsonplaceholder', element: <PlaceholderComponent/>},
                    {path: 'dummyjson', element: <DummyComponent/>}
                ]},
            {path: 'posts', element:    <PostsPage/>, children:[
                    {path: 'jsonplaceholder', element: <PlaceholderComponent/>},
                    {path: 'dummyjson', element: <DummyComponent/>}
                ]},
            {path: 'comments', element: <CommentsPage/>, children:[
                    {path: 'jsonplaceholder', element: <PlaceholderComponent/>},
                ]},
        ]
    }
]);