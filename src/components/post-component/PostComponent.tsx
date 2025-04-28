import './post-component-style.css'
import {FC} from "react";
import {IPost} from "../../models/IPost.ts";

type PostPropsType = {
    post: IPost
}

const PostComponent: FC<PostPropsType> = ({post:{title, userId, id, body}}) => {
    return (
        <div className='border-2 border-amber-200'>
             <h3>userId: {userId}</h3>
             <p>postId: {id}, title: {title}</p>
             <p>body : {body}</p>
        </div>
    );
};

export default PostComponent;