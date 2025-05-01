import {useEffect, useState} from "react";
import {commentService} from "../../../services/api.service.ts";
import {ICommentD} from "../../../models/ICommentD.ts";
import CommentDComponent from "./CommentDComponent.tsx";

const CommentsDComponent = () => {

    const [comments, setComments] = useState<ICommentD[]>([]);

    useEffect(() => {
        commentService.getCommentsFromD().then(allComments => {
            setComments(allComments);
        })
    }, []);

    return (
        <div>
            {comments.map((comment) => <CommentDComponent key={comment.id} item={comment} />)}
        </div>
    );
};

export default CommentsDComponent;