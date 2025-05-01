import {urls} from "../constants/urls.ts";
import {IUserPH} from "../models/IUserPH.ts";
import {IUserD} from "../models/IUserD.ts";
import {IPostPH} from "../models/IPostPH.ts";
import {IPostD} from "../models/IPostD.ts";
import {ICommentPH} from "../models/ICommentPH.ts";
import {ICommentD} from "../models/ICommentD.ts";

export const userService = {
    getUsersFromPH: async (): Promise<IUserPH[]> => {
        return await fetch(urls.users.allUsersPH)
            .then(res => res.json());
    },
    getUsersFromD: async (): Promise<IUserD[]> => {
        const response = await fetch(urls.users.allUsersD)
            .then(res => res.json());
        return response.users;
    },
}

export const postService = {
    getPostsFromPH: async (): Promise<IPostPH[]> => {
        return await fetch(urls.posts.allPostsPH)
            .then(res => res.json());
    },
    getPostsFromD: async (): Promise<IPostD[]> => {
        const response = await fetch(urls.posts.allPostsD)
            .then(res => res.json());
        return response.posts;
    },
}

export const commentService = {
    getCommentsFromPH: async (): Promise<ICommentPH[]> => {
        return await fetch(urls.comments.allCommentsPH)
            .then(res => res.json());
    },
    getCommentsFromD: async (): Promise<ICommentD[]> => {
        const response = await fetch(urls.comments.allCommentsD)
            .then(res => res.json());
        return response.comments;
    },
}