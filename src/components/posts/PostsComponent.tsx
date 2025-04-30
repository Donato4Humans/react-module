import {FC, useEffect, useState} from "react";
import {IPost} from "../../models/IPost.ts";
import {postService} from "../../services/api.service.ts";
import PostComponent from "../post/PostComponent.tsx";

type PostsPropsType = {
    userId?: string
}

const PostsComponent:FC<PostsPropsType> = ({userId}) => {

    const [posts, setPosts] = useState<IPost[]>([])

    useEffect(() => {
        if(userId){
            postService.getAllPostsOfUserById(+userId)
                .then(userPosts => {
                    setPosts(userPosts);
                });
        }else{ // IF WE HAVE NO USER-ID, WE SET ALL USER POSTS INSTEAD OF SPECIFIC USER POSTS
            postService.getAllPosts()
                .then(userPosts => {
                    setPosts(userPosts);
                });
        }

    }, [userId]); // capture userId into deps array to rerender posts every time when route changes(other user-posts button clicked)

    return (
        <div>
            {posts.map((post) => <PostComponent key={post.id} post={post}/>)}
        </div>
    );
};

export default PostsComponent;