import {FC} from "react";
import {IPostPH} from "../../../models/IPostPH.ts";

type PostPropsType  = {
    item: IPostPH
}

const PostPHComponent: FC<PostPropsType> = ({item:{title, body}}) => {
    return (
        <div className='border-2 border-violet-600'>
            <h3>Title: {title}</h3>
            <p>Post: {body}</p>
        </div>
    );
};

export default PostPHComponent;