import {IComment} from "../models/IComment.ts";
import {ICommentResponse} from "../models/ICommentResponse.ts";
import {IPost} from "../models/IPost.ts";
import {IPostResponse} from "../models/IPostResponse.ts";
import {ITodo} from "../models/ITodo.ts";
import {ITodoResponse} from "../models/ITodoResponse.ts";

const todosEndpoint = import.meta.env.VITE_API_BASE_URL + "/todos";
const postsEndpoint = import.meta.env.VITE_API_BASE_URL + "/posts";
const commentsEndpoint = import.meta.env.VITE_API_BASE_URL + "/comments";

const getTodos = async (): Promise<ITodo[]> => {
    const response: ITodoResponse = await fetch(todosEndpoint)
        .then(value => value.json());
    return response.todos;
}

const getPosts = async (): Promise<IPost[]> => {
    const response: IPostResponse = await fetch(postsEndpoint)
        .then(value => value.json());
    return response.posts;
}

const getComments = async (): Promise<IComment[]> => {
    const response: ICommentResponse = await fetch(commentsEndpoint)
        .then(value => value.json());
    return response.comments;
}

export {
    getTodos,
    getPosts,
    getComments
};