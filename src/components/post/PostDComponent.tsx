import {FC} from "react";
import {IPostD} from "../../models/IPostD.ts";

type PostPropsType  = {
    item: IPostD
}

const PostDComponent: FC<PostPropsType> = ({item:{title, body, views}}) => {
    return (
        <div className='border-2 border-violet-600'>
            <h3>Title: {title}, Views: {views}</h3>
            <p>Post: {body}</p>
        </div>
    );
};

export default PostDComponent;