import {FC} from "react";
import {IPost} from "../../models/IPost.ts";

type PostPropsType = {
    item: IPost
}

const PostComponent: FC<PostPropsType> = ({item:{title, body}}) => {
    return (
        <div className='border-2 bg-green-300'>
            <h3>Title: {title}</h3>
            <p>Post: {body}</p>
        </div>
    );
};

export default PostComponent;