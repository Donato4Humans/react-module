import {IComment} from "../../models/IComment.ts";
import {useEffect, useState} from "react";
import {getComments} from "../../services/api.service.ts";
import CommentComponent from "../comment-component/CommentComponent.tsx";

const CommentsComponent = () => {
    const [comments, setComments] = useState<IComment[]>([]);

    useEffect(() => {
        getComments().then(value => {
            setComments(value);
        });

        return () => {
            console.log('done fetch');
        };
    }, []);


    return (
        <div>
            {comments.map(value => <CommentComponent key={value.id} comment={value}/>)}
        </div>
    );
};

export default CommentsComponent;