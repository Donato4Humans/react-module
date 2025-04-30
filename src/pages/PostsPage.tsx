import {Outlet} from "react-router-dom";

const PostsPage = () => {
    return (
        <div>
            POSTS-PAGE-CONTENT
            <hr/>
            <Outlet/>
        </div>
    );
};

export default PostsPage;