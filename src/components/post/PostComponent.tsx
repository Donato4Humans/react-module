import {FC} from "react";
import {IPost} from "../../models/IPost.ts";

type PostPropsType = {
    post: IPost
}

const PostComponent: FC<PostPropsType> = ({post:{title, body}}) => {
    return (
        <div className='border-4 border-violet-600 bg-gray-600 m-2'>
            <h3 className='bg-red-400'>Post-title: {title}</h3>
            <p>Post: {body}</p>
        </div>
    );
};

export default PostComponent;