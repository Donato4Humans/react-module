import {useAppDispatch} from "../../redux/hooks/useAppDispatch.tsx";
import {useAppSelector} from "../../redux/hooks/useAppSelector.tsx";
import {useEffect} from "react";
import {commentSliceActions} from "../../redux/slices/CommentSlice.ts";
import CommentComponent from "./CommentComponent.tsx";

const CommentsComponent = () => {

    const dispatch = useAppDispatch();
    const { comments } = useAppSelector(storeStateRef => storeStateRef.commentStoreSlice);

    useEffect(() => {
        dispatch(commentSliceActions.loadComments());
    }, []);

    return (
        <div>
            {comments.map((comment) => <CommentComponent key={comment.id} item={comment}/>)}
        </div>
    );
};

export default CommentsComponent;