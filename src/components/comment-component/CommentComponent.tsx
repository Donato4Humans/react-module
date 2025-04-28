import './comment-component-style.css'
import {FC} from "react";
import {IComment} from "../../models/IComment.ts";

type PostPropsType = {
    comment: IComment
}

const CommentComponent: FC<PostPropsType> = ({comment:{postId, id, name, email, body}}) => {
    return (
        <div className='border-2 border-amber-200'>
             <h3>postId: {postId}</h3>
             <p>Id: {id}, name: {name}, email: {email}</p>
             <p>body : {body}</p>
        </div>
    );
};

export default CommentComponent;