import {FC} from "react";
import {IPost} from "../../models/IPost.ts";

type PostPropsType = {
    post: IPost
}

const PostComponent: FC<PostPropsType> = ({post:{id, title, body}}) => {
    return (
        <div className='border-2 border-amber-600'>
            <h3>id: {id}, title: {title}</h3>
            <p>body: {body}</p>
        </div>
    );
};

export default PostComponent;