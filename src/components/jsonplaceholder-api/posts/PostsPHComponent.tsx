import {useEffect, useState} from "react";
import {postService} from "../../../services/api.service.ts";
import {IPostPH} from "../../../models/IPostPH.ts";
import PostPHComponent from "./PostPHComponent.tsx";

const PostsPHComponent = () => {

    const [posts, setPosts] = useState<IPostPH[]>([]);

    useEffect(() => {
        postService.getPostsFromPH().then(allPosts => {
            setPosts(allPosts);
        })
    }, []);

    return (
        <div>
            {posts.map((post) => <PostPHComponent key={post.id} item={post} />)}
        </div>
    );
};

export default PostsPHComponent;