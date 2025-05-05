import UserComponent from "../user/UserComponent.tsx";
import {useFetch} from "../../hooks/useFetch.ts";
import {IUser} from "../../models/IUser.ts";

const UsersComponent = () => {

    const resources = useFetch<IUser[]>('https://jsonplaceholder.typicode.com/users', []);

    return (
        <div>
            {resources.map((user) => <UserComponent key={user.id} item={user}/>)}
        </div>
    );
};

export default UsersComponent;