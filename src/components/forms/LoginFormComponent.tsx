import {useForm} from "react-hook-form";
import {userLoginValidator} from "../../validators/userLoginValidator.ts";
import {joiResolver} from "@hookform/resolvers/joi";
import {loginService} from "../../services/api.service.ts";

interface ILoginFormProps {
    username: string;
    password: string;
    expiresInMins: number;
}

const LoginFormComponent = () => {

    const {handleSubmit, register, formState: { errors, isValid },}
        = useForm<ILoginFormProps>({mode: 'all', resolver:joiResolver(userLoginValidator)});

    const customHandler = (formLoginDataProps:ILoginFormProps) => {
        loginService.login(formLoginDataProps); // LOGIN AFTER FORM WAS VALIDATED AND SUBMITTED
    }

    return (
        <div>
            <form onSubmit={handleSubmit(customHandler)}>
                <div className='border-2'>
                    <input type="text" value={'michaelw'} {...register('username')}/>
                    {errors.username && <div>{errors.username?.message}</div>}
                </div>

                <div className='border-2'>
                    <input type="text" value={'michaelwpass'} {...register('password')}/>
                    {errors.password && <div>{errors.password?.message}</div>}
                </div>

                <div className='border-2'>
                    <input type="number" value={'1'} {...register('expiresInMins')}/>
                    {errors.expiresInMins && <div>{errors.expiresInMins?.message}</div>}
                </div>
                <button className='border-2' disabled={!isValid}>LOGIN(check console for login status)</button>
                {/* <Link to={'/auth/resources'}>LOGIN+AUTH-RESOURCES</Link> // WE CAN ADD THIS LINK TO REDIRECT AFTER SUBMIT */}
            </form>
        </div>
    );
};

export default LoginFormComponent;