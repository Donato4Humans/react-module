import {createBrowserRouter} from "react-router-dom";

import Layout from "../layouts/Layout.tsx";
import HomePage from "../pages/HomePage.tsx";
import UsersPage from "../pages/UsersPage.tsx";
import PostsPage from "../pages/PostsPage.tsx";
import CommentsPage from "../pages/CommentsPage.tsx";
import UsersPHComponent from "../components/jsonplaceholder-api/users/UsersPHComponent.tsx";
import UsersDComponent from "../components/dummyjson-api/users/UsersDComponent.tsx";
import PostsPHComponent from "../components/jsonplaceholder-api/posts/PostsPHComponent.tsx";
import PostsDComponent from "../components/dummyjson-api/posts/PostsDComponent.tsx";
import CommentsPHComponent from "../components/jsonplaceholder-api/comments/CommentsPHComponent.tsx";
import CommentsDComponent from "../components/dummyjson-api/comments/CommentsDComponent.tsx";

export const routes = createBrowserRouter([
    {
        path: '/', element: <Layout/>, children:[
            {index: true, element:      <HomePage/>},
            {path: 'users', element:    <UsersPage/>, children:[
                    {path: 'jsonplaceholder', element: <UsersPHComponent/>},
                    {path: 'dummyjson', element: <UsersDComponent/>}
                ]},
            {path: 'posts', element:    <PostsPage/>, children:[
                    {path: 'jsonplaceholder', element: <PostsPHComponent/>},
                    {path: 'dummyjson', element: <PostsDComponent/>}
                ]},
            {path: 'comments', element: <CommentsPage/>, children:[
                    {path: 'jsonplaceholder', element: <CommentsPHComponent/>},
                    {path: 'dummyjson', element: <CommentsDComponent/>}
                ]},
        ]
    }
]);