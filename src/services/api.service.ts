import {urls} from "../constants/urls.ts";
import {IUserD} from "../models/IUserD.ts";
import {IPostD} from "../models/IPostD.ts";

export const userService = {
    getUsersFromD: async (): Promise<IUserD[]> => {
        const response = await fetch(urls.users.allUsersD)
            .then(res => res.json());
        return response.users;
    },
}

export const postService = {
    getPostsFromD: async (): Promise<IPostD[]> => {
        const response = await fetch(urls.posts.allPostsD)
            .then(res => res.json());
        return response.posts;
    },
}