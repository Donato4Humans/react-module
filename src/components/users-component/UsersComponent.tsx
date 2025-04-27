import {IUser} from "../../models/IUser.ts";
import {useEffect, useState} from "react";
import UserComponent from "../user-component/UserComponent.tsx";
import {getUsers} from "../../services/api.service.ts";

const UsersComponent = () => {
    const [users, setUsers] = useState<IUser[]>([]); // we save state of empty IUser[] to fill it after fetch will get data

    // we use useEffect hook to prevent useState hook from infinite rerender page loop after fetch response will be done
    useEffect(() => { // BECAUSE COMPONENTS ARE UI-BIASED, WE NEED TO ENCAPSULATE FETCH IN service layer file(api.service)
        getUsers()
            .then(response => {
                setUsers(response);
            });

            // const fetchData = async () => {  OTHER APPROACH WITHOUT .THEN CALL AND WITH ASYNC-AWAIT
            //     const users = await getUsers();
            //     setUsers(users);
            // }
            // fetchData();

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