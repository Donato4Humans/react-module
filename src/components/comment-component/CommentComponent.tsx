import './comment-component-style.css'
import {FC} from "react";
import {IComment} from "../../models/IComment.ts";

type CommentPropsType = {
    comment: IComment
}

const CommentComponent: FC<CommentPropsType> = ({comment:{postId, id, body}}) => {
    return (
        <div className='border-2 border-amber-200'>
             <h3>postId: {postId}, id: {id}</h3>
             <p>body : {body}</p>
        </div>
    );
};

export default CommentComponent;