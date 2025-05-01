import {urls} from "../constants/urls.ts";
import {IUserD} from "../models/IUserD.ts";
import {ICartD} from "../models/ICartD.ts";

export const userService = {
    getUsersFromD: async (): Promise<IUserD[]> => {
        const response = await fetch(urls.users.allUsersD)
            .then(res => res.json());
        return response.users;
    },
}

export const cartService = {
    getCartsOfUserById: async (userId: string): Promise<ICartD[]> => {
        const response = await fetch(urls.carts.cartsById(userId))
            .then(res => res.json());
        return response.carts;
    },
}