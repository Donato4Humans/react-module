import {useEffect, useState} from "react";
import {IUserPH} from "../../../models/IUserPH.ts";
import {userService} from "../../../services/api.service.ts";
import UserPHComponent from "./UserPHComponent.tsx";

const UsersPHComponent = () => {

    const [users, setUsers] = useState<IUserPH[]>([]);

    useEffect(() => {
        userService.getUsersFromPH().then(allUsers => {
            setUsers(allUsers);
        })
    }, []);

    return (
        <div>
            {users.map((user) => <UserPHComponent key={user.id} item={user} />)}
        </div>
    );
};

export default UsersPHComponent;