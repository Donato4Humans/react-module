import {IUser} from "../../models/IUser.ts";
import {useEffect, useState} from "react";
import UserComponent from "../user-component/UserComponent.tsx";
import {getUsers} from "../../services/api.service.ts";

const UsersComponent = () => {
    const [users, setUsers] = useState<IUser[]>([]);
    const [user, setUser] = useState<IUser | null>(null); // WE USE NULL AS INITIAL STATE SO WE CAN CHECK LATER
                                                                   // AND DECIDE TO RENDER NEW ELEMENT OR NO

    useEffect(() => {
        getUsers()
            .then(response => {
                setUsers(response);
            });

        return () => {
            console.log('done fetch');
        }
    }, []);

    const userDetails = (item: IUser) => { // func that will lift data from child component to parent
        setUser(item);
    }

    return (
        <div>
            {
                user && <div>{JSON.stringify(user)}</div> // simplified item details to show concept and check if user exist
            }
            {
                users.map((user) => <UserComponent details={userDetails} key={user.id} item={user}  />)
                                                                 // here we send func reference into component props
            }
        </div>
    );
};

export default UsersComponent;