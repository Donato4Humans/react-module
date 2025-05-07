import {useAppDispatch} from "../../redux/hooks/useAppDispatch.tsx";
import {useAppSelector} from "../../redux/hooks/useAppSelector.tsx";
import {useEffect} from "react";
import {postSliceActions} from "../../redux/slices/PostSlice.ts";
import PostComponent from "./PostComponent.tsx";

const PostsComponent = () => {

    const dispatch = useAppDispatch();
    const { posts } = useAppSelector(storeStateRef => storeStateRef.postStoreSlice);

    useEffect(() => {
        dispatch(postSliceActions.loadPosts());
    }, []);

    return (
        <div>
            {posts.map((post) => <PostComponent key={post.id} item={post}/>)}
        </div>
    );
};

export default PostsComponent;