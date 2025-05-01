import {IReqresInResponse} from "../models/IReqresInResponse.ts";
import {IUser} from "../models/IUser.ts";

export const getUsersByPage = async (page: string): Promise<IUser[]> => {
    const response: IReqresInResponse = await fetch('https://reqres.in/api/users?page=' + page, {headers: {"x-api-key": "reqres-free-v1"}})
        .then(res => res.json());
    return response.data;
};