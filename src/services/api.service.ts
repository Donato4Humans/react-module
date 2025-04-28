import {IPost} from "../models/IPost.ts";

const getPosts = async (): Promise<IPost[]> => {
    return await fetch(import.meta.env.VITE_API_URL)
        .then(value => value.json());
}

export {
    getPosts
};