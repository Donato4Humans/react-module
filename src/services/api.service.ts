import {IUserDummyResponse} from "../models/IUserDummyResponse.ts";
import {IUser} from "../models/IUser.ts";
import {urls} from "../constants/urls.ts";

export const getUsersByPage = async (page: string): Promise<IUser[]> => {
    const response: IUserDummyResponse = await fetch(urls.usersByPage(page))
        .then(res => res.json());
    return response.users;
};