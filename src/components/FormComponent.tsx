import {useForm} from "react-hook-form";

interface IFormProps {
    username: string;
    password: string;
    age: number;
}

const FormComponent = () => {

    const {
        handleSubmit,
        register,
        formState: { errors, isValid },
    } = useForm<IFormProps>({
        mode: 'all'
    });

    const customHandler = (formDataProps:IFormProps) => {
        console.log(formDataProps);
    }

    // ABOVE IS BASE-VALIDATION APPROACH WITHOUT EXTERNAL LIBS THAT MAKE VALIDATION MORE CONVENIENT AND BETTER

    return (
        <div>
            <form onSubmit={handleSubmit(customHandler)}>
                <label>
                    <input className='border-2' type="text" {...register('username', {
                        required: {value: true, message: 'name is required'},
                        // pattern: {
                        //     value:/w+/,
                        //     message: "wrong name"
                        // },
                        minLength: {value: 4, message: 'wrong name'},
                    })}/>
                    {errors.username && <div>{errors.username.message}</div>}
                </label>

                <label>
                    <input className='border-2' type="text" {...register('password', {
                        required: true,
                        minLength: {value: 3, message: 'pass too short'},
                        maxLength: {value: 6, message: 'pass too long'},
                    })}/>
                    {errors.password && <div>{errors.password.message}</div>}
                </label>

                <label>
                    <input className='border-2' type={"number"} {...register('age', {
                        required: true,
                        valueAsNumber: true,
                        min: {value: 1, message: 'age too small'},
                        max: {value: 120, message: 'age too big'}
                    })}/>
                    {errors.age && <div>{errors.age.message}</div>}
                </label>

                <button className='border-2' disabled={!isValid}>send</button>
            {/*    set disabled if form inputs do not match required rules*/}
            </form>
        </div>
    );
};

export default FormComponent;