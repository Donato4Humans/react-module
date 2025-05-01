import {ICommentPH} from "../../../models/ICommentPH.ts";
import {FC} from "react";

type CommentPropsType  = {
    item: ICommentPH
}

const CommentPHComponent: FC<CommentPropsType> = ({item:{name, body}}) => {
    return (
        <div className='border-2 border-violet-600'>
            <h3>Name: {name}</h3>
            <p>Comment: {body}</p>
        </div>
    );
};

export default CommentPHComponent;