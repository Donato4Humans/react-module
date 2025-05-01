import {ICommentD} from "../../../models/ICommentD.ts";
import {FC} from "react";

type CommentPropsType  = {
    item: ICommentD
}

const CommentDComponent: FC<CommentPropsType> = ({item:{user, body}}) => {
    return (
        <div className='border-2 border-violet-600'>
            <h3>User: {user.fullName}</h3>
            <p>Comment: {body}</p>
        </div>
    );
};

export default CommentDComponent;