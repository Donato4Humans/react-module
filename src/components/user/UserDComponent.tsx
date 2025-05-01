import {FC} from "react";
import {IUserD} from "../../models/IUserD.ts";
import {useNavigate} from "react-router-dom";

type UserPropsType = {
    item: IUserD
}

const UserDComponent: FC<UserPropsType> = ({item:{id, firstName, lastName, age, email}}) => {

    const navigate = useNavigate()
    const handleOnClickNavigate = () => {
        navigate( id + '/carts');
    }

    return (
        <div className='border-2 border-violet-600'>
            <h3 className='bg-red-400'>{firstName}{lastName}, ID: {id}</h3>
            <p>age: {age}, email: {email}</p>
            <button className='border-2 border-amber-200' onClick={handleOnClickNavigate}>USER-CART</button>
        </div>
    );
};

export default UserDComponent;