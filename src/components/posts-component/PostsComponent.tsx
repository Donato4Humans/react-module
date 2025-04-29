import PostComponent from "../post-component/PostComponent.tsx";
import {useEffect, useState} from "react";
import {getPosts} from "../../services/api.service.ts";
import {IPost} from "../../models/IPost.ts";

const PostsComponent = () => {

    const [posts, setPosts] = useState<IPost[]>([]);

    useEffect(() => {
        getPosts().then(value => {
            setPosts(value);
        });

        return () => {
            console.log('done fetch');
        };
    }, []);

    return (
        <div>
            {posts.map(value => <PostComponent key={value.id} post={value}/>)}
        </div>
    );
};

export default PostsComponent;