import {useEffect, useState} from "react";
import {userService} from "../../../services/api.service.ts";
import UserDComponent from "./UserDComponent.tsx";
import {IUserD} from "../../../models/IUserD.ts";

const UsersDComponent = () => {

    const [users, setUsers] = useState<IUserD[]>([]);

    useEffect(() => {
        userService.getUsersFromD().then(allUsers => {
            setUsers(allUsers);
        })
    }, []);

    return (
        <div>
            {users.map((user) => <UserDComponent key={user.id} item={user} />)}
        </div>
    );
};

export default UsersDComponent;