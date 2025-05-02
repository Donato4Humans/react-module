import {ICar} from "../../models/ICar.ts";
import {useEffect, useState} from "react";
import CarComponent from "../car/CarComponent.tsx";
import {carService} from "../../services/api.service.ts";

const CarsComponent = () => {

    const [cars, setCars] = useState<ICar[]>([]);

    useEffect(() => {
        carService.getAllCars().then(allCars => {
            setCars(allCars);
        })
    }, []);

    return (
        <div>
            {cars.map((car) => <CarComponent key={car.id} item={car}/>)}
        </div>
    );
};

export default CarsComponent;