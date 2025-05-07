import {IUser} from "../../models/IUser.ts";
import {IPost} from "../../models/IPost.ts";
import {IComment} from "../../models/IComment.ts";
import {useAppDispatch} from "../../redux/hooks/useAppDispatch.tsx";
import {useAppSelector} from "../../redux/hooks/useAppSelector.tsx";
import UserComponent from "../users/UserComponent.tsx";
import {useEffect} from "react";
import PostComponent from "../posts/PostComponent.tsx";
import CommentComponent from "../comments/CommentComponent.tsx";
import {userSliceActions} from "../../redux/slices/UserSlice.ts";
import {postSliceActions} from "../../redux/slices/PostSlice.ts";
import {commentSliceActions} from "../../redux/slices/CommentSlice.ts";

type ComplexStoreSlicesComponentType = {
    userStoreSlice: {users: IUser[];},
    postStoreSlice: {posts: IPost[];},
    commentStoreSlice: {comments: IComment[];}
}

const ComplexComponent = () => {

    const dispatch = useAppDispatch();
    const complexSlicesStore: ComplexStoreSlicesComponentType =
        useAppSelector(storeStateRef => storeStateRef);

    useEffect(() => {
        if(!complexSlicesStore.userStoreSlice.users.length){
            dispatch(userSliceActions.loadUsers());
        }
        if(!complexSlicesStore.postStoreSlice.posts.length){
            dispatch(postSliceActions.loadPosts());
        }
        if(!complexSlicesStore.commentStoreSlice.comments.length){
            dispatch(commentSliceActions.loadComments());
        }
    }, []);

    return (
        <div>
            <hr/>
            <h3 className='bg-red-400'>USERS</h3>
            <div className='bg-red-400'>{complexSlicesStore.userStoreSlice.users.map((user) => <UserComponent key={user.id} item={user}/>)}</div>
            <hr/>

            <h3 className='bg-green-300'>POSTS</h3>
            <div className='bg-green-300'>{complexSlicesStore.postStoreSlice.posts.map((post) => <PostComponent key={post.id} item={post}/>)}</div>
            <hr/>

            <h3 className='bg-amber-300'>COMMENTS</h3>
            <div className='bg-amber-300'>{complexSlicesStore.commentStoreSlice.comments.map((comment) => <CommentComponent key={comment.id} item={comment}/>)}</div>
            <hr/>
        </div>
    );
};

export default ComplexComponent;