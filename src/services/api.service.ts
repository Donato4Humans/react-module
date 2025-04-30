import {IUser} from "../models/IUser.ts";
import {urls} from "../constants/urls.ts";
import {IPost} from "../models/IPost.ts";

export const userService = {
    getUsers: async (): Promise<IUser[]> => {
        return await fetch(urls.users.allUsers)
            .then(value => value.json());
    },
    getUser: async (id: number): Promise<IUser> => {
        return await fetch(urls.users.byId(id))
            .then(value => value.json());
    }
}

export const postService = {
    getAllPostsOfUserById: async (userId: number): Promise<IPost[]> => {
        return await fetch(urls.posts.userPostsById(userId))
            .then(value => value.json());
    },
    getAllPosts: async (): Promise<IPost[]> => {
        return await fetch(urls.posts.allPosts)
            .then(value => value.json());
    },
}