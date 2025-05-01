import {useEffect, useState} from "react";
import {postService} from "../../services/api.service.ts";
import {IPostD} from "../../models/IPostD.ts";
import PostDComponent from "../post/PostDComponent.tsx";

const PostsDComponent = () => {

    const [posts, setPosts] = useState<IPostD[]>([]);

    useEffect(() => {
        postService.getPostsFromD().then(allPosts => {
            setPosts(allPosts);
        })
    }, []);

    return (
        <div>
            {posts.map((post) => <PostDComponent key={post.id} item={post} />)}
        </div>
    );
};

export default PostsDComponent;