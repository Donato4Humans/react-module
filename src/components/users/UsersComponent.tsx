import {useSearchParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {IUser} from "../../models/IUser.ts";
import {getUsersByPage} from "../../services/api.service.ts";
import UserComponent from "../user/UserComponent.tsx";

const UsersComponent = () => {

    const [users, setUsers] = useState<IUser[]>([]);
    const [query] = useSearchParams()

    useEffect(() => {
        const pg = query.get('pg');
        if(pg){
            getUsersByPage(pg).then(usersOnPage => {
                setUsers(usersOnPage);
            });
        }
    }, [query]);

    return (
        <div>
            {users.map((user) => <UserComponent key={user.id} item={user}/>)}
        </div>
    );
};

export default UsersComponent;