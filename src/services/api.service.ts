import {IComment} from "../models/IComment.ts";

const getComments = async (): Promise<IComment[]> => {
    return await fetch(import.meta.env.VITE_API_URL)
        .then(value => value.json());
}

export {
    getComments
};