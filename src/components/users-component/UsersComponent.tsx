import {IUser} from "../../models/IUser.ts";
import {useEffect, useState} from "react";
import UserComponent from "../user-component/UserComponent.tsx";

const UsersComponent = () => {
    const [users, setUsers] = useState<IUser[]>([]); // we save state of empty IUser[] to fill it after fetch will get data

    // we use useEffect hook to prevent useState hook from infinite rerender page loop after fetch response will be done
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(value => value.json())
            .then(response => {
                setUsers(response);
            });
        return () => { // callback func that will be called after useEffect finished work(so called "unsubscribe func"
            console.log('done fetch');
        }
    }, []); // here we have empty dependencies array that can be used to repeat call of fetch or other code scoped inside
            // useEffect hook, if one of variables(or reference to obj) within this array will be changed

    return (
        <div>
            {
                users.map((user) => <UserComponent key={user.id} item={user}  />)
            }
        </div>
    );
};

export default UsersComponent;