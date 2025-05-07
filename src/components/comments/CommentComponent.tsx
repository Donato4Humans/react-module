import {FC} from "react";
import {IComment} from "../../models/IComment.ts";

type CommentPropsType = {
    item: IComment
}

const CommentComponent: FC<CommentPropsType> = ({item:{name, body}}) => {
    return (
        <div className='border-2 bg-amber-300'>
            <h3>Name: {name}</h3>
            <p>Comment: {body}</p>
        </div>
    );
};

export default CommentComponent;