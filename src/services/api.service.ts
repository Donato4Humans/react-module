import {IUser} from "../models/IUser.ts";

// WE ENCAPSULATE IN THIS SERVICE LAYER FILE ALL ASYNC API CALLS AND EXPORT THEM

const getUsers = async (): Promise<IUser[]> => {
    return await fetch('https://jsonplaceholder.typicode.com/users')
        .then(value => value.json());
}

const getUser = async (id:string): Promise<IUser> => {
    return await fetch(`https://jsonplaceholder.typicode.com/users` + id)
        .then(value => value.json());
}

export {
    getUsers,
    getUser
}