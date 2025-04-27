import {IUser} from "../models/IUser.ts";

// WE ENCAPSULATE IN THIS SERVICE LAYER FILE ALL ASYNC API CALLS AND EXPORT THEM

const getUsers = async (): Promise<IUser[]> => {
    return await fetch(import.meta.env.VITE_API_URL) // TO PREVENT DUPLICATING URL OR OTHER CONSTANTS
        .then(value => value.json()); // WE WILL USE .env FILE AND CREATE THERE CONSTANTS AND CALL THEM FROM THERE
}

const getUser = async (id:string): Promise<IUser> => {
    return await fetch(import.meta.env.VITE_API_URL + '/' + id)
        .then(value => value.json());
}

export {
    getUsers,
    getUser
}