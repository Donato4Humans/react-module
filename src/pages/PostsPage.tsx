import {useParams} from "react-router-dom";
import PostsComponent from "../components/posts/PostsComponent.tsx";

const PostsPage = () => {

    const {userId} = useParams() // USING useParams() hook to get dynamic route parameter from path in /router/routes.tsx

    return (
        <div>
            <hr/>
            &#8595;POSTS-PAGE-CONTENT&#8595;
            <hr/>
            { userId && <PostsComponent userId={userId}/>}
            {/*ABOVE IS LAYOUT FOR SPECIFIC USER POSTS*/}

            {/*DOWN IS LAYOUT FOR ALL POSTS OF ALL USERS*/}
            { !userId && <PostsComponent/>}
        </div>
    );
};

export default PostsPage;