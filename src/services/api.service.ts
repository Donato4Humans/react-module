import axios from 'axios';
import {IUser} from "../models/IUser.ts";
import {IPost} from "../models/IPost.ts";
import {IComment} from "../models/IComment.ts";

const axiosInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
    headers: {'Content-Type': 'application/json'}
});

// <<--- AXIOS-INIT-CONFIG |
//                   | SERVICES-CONFIG --->>

// MORE EXPANDABLE APPROACH THAN GENERIC FUNC BELOW
export const userService = {
    getAllUsers: async (): Promise<IUser[]> => {
        const {data : users} = await axiosInstance.get<IUser[]>(`/users`);
        return users;
    }
};

export const postService = {
    getAllPosts: async (): Promise<IPost[]> => {
        const {data : posts} = await axiosInstance.get<IPost[]>(`/posts`);
        return posts;
    }
};

export const commentService = {
    getAllComments: async (): Promise<IComment[]> => {
        const {data : comments} = await axiosInstance.get<IComment[]>(`/comments`);
        return comments;
    }
};

// --- generic fetch for general cases with similar requests
export const getAllResources = async <T>(endpoint: string) => {
    const {data : resources} = await axiosInstance.get<T>(endpoint);
    return resources;
}