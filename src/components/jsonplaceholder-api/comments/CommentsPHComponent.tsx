import {useEffect, useState} from "react";
import {commentService} from "../../../services/api.service.ts";
import {ICommentPH} from "../../../models/ICommentPH.ts";
import CommentPHComponent from "./CommentPHComponent.tsx";

const CommentsPHComponent = () => {

    const [comments, setComments] = useState<ICommentPH[]>([]);

    useEffect(() => {
        commentService.getCommentsFromPH().then(allComments => {
            setComments(allComments);
        })
    }, []);

    return (
        <div>
            {comments.map((comment) => <CommentPHComponent key={comment.id} item={comment} />)}
        </div>
    );
};

export default CommentsPHComponent;