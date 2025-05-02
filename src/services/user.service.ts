import axios from 'axios';
import {IUser} from "../models/IUser.ts";

const axiosInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
    headers: {'Content-Type': 'application/json'},
});

// WE USE AXIOS TO WRAP DEFAULT FETCH RESPONSE WITH ADDITIONAL INFO ABOUT API CALLS(STATUS,HEADERS,REQUEST,CONFIG,RESPONSE)
// TO USE IT LATER FOR PROCESSING REQUEST OR RESPONSE(ERRORS AND OTHER) BUT MUCH SIMPLER THAN WITH REGULAR FETCH

export const getAllUsers = async (): Promise<IUser[]> => {
    const {data} = await axiosInstance.get<IUser[]>(`/users`);
    return data;
}

// USING AXIOS HELP US INTERCEPT OUR REQUEST OR RESPONSE AND CHECK IT OR CHANGE

axiosInstance.interceptors.request.use((request) => {
    console.log(request);
    request.headers.set("testHeader", 'testValue');
    console.log(request.method);
    return request;
});

// axiosInstance.interceptors.response.use((response) => {
//     console.log(response);
//     return response;
// });

export const saveUser = async (user: IUser): Promise<IUser> => {
    const {data} = await axiosInstance.post<IUser>(`/users`, user);
    return data;
}