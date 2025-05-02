import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";
import {ICar} from "../../models/ICar.ts";
import {carService} from "../../services/api.service.ts";
import {carValidator} from "../../validators/carValidator.ts";

const FormComponent = () => {

    const {register, handleSubmit, formState: {errors , isValid}} =
        useForm<ICar>({mode:"all", resolver:joiResolver(carValidator)});

    const customHandler = (data: ICar) => {
        carService.postCar(data);
    }

    return (
        <div>
            <form onSubmit={handleSubmit(customHandler)}>
                <div className='border-2'>
                    <input type="text" {...register('brand')}/>
                    {errors.brand && <div>{errors.brand?.message}</div>}
                </div>

                <div className='border-2'>
                    <input type="number" {...register('price')}/>
                    {errors.price && <div>{errors.price?.message}</div>}
                </div>

                <div className='border-2'>
                    <input type="number" {...register('year')}/>
                    {errors.year && <div>{errors.year?.message}</div>}
                </div>
                <button className='border-2' disabled={!isValid}>save-car</button>
            </form>
        </div>
    );
};

export default FormComponent;