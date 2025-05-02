import axios from 'axios';
import {ICar} from "../models/ICar.ts";

const axiosInstance = axios.create({
    baseURL: 'http://185.69.152.209/carsAPI/v1',
    headers: {'Content-Type': 'application/json'}
});

export const carService = {
    getAllCars: async (): Promise<ICar[]> => {
        const {data} =  await axiosInstance.get<ICar[]>(`/cars`);
        return data;
    },
    postCar: async (car: ICar) => {
        await axiosInstance.post<ICar>(`/cars`, car);
    }
}