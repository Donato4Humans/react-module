import axios from 'axios';
import {IUserWithTokens} from "../models/IUserWithTokens.ts";
import {IProduct} from "../models/IProduct.ts";
import {IProductResponseModel} from "../models/IProductResponseModel.ts";
import {retrieveLocalStorage} from "./helpers.ts";
import {ITokenPair} from "../models/ITokenPair.ts";

type LoginDataType = {
    username: string;
    password: string;
    expiresInMins: number;
}

const axiosInstance = axios.create({
    baseURL: 'https://dummyjson.com/auth',
    headers: {'Content-Type': 'application/json'}
});

axiosInstance.interceptors.request.use((requestObject) => {
        if(requestObject.method?.toUpperCase() === 'GET') {
            requestObject.headers.Authorization = 'Bearer ' + retrieveLocalStorage<IUserWithTokens>('user').accessToken;
        }
    return requestObject;
});

// ----------------------------------- SERVICES ------------------------------

export const loginService = {
    login: async (formLoginData: LoginDataType): Promise<IUserWithTokens> => {
        const {data: userWithTokens} = await axiosInstance.post<IUserWithTokens>('/login', formLoginData);
        console.log('login successful. YOU CAN GO TO AUTH-RESOURCES PAGE', userWithTokens);
        localStorage.setItem('user', JSON.stringify(userWithTokens));
        return userWithTokens;
    },
    refresh: async () => {
       const userWithTokens = retrieveLocalStorage<IUserWithTokens>('user');
       const {data: {accessToken, refreshToken}} = await axiosInstance.post<ITokenPair>('/refresh',
           {refreshToken: userWithTokens.refreshToken, expiresInMins: 1});
       userWithTokens.accessToken = accessToken;
       userWithTokens.refreshToken = refreshToken;
       localStorage.setItem('user', JSON.stringify(userWithTokens));
    }
}

export const authResourcesService = {
    getAuthProducts: async (): Promise<IProduct[]> => {
        const {data: response} = await axiosInstance.get<IProductResponseModel>('/products');
        return response.products;
    }
}