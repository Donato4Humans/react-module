import {useAppDispatch} from "../../redux/hooks/useAppDispatch.tsx";
import {useAppSelector} from "../../redux/hooks/useAppSelector.tsx";
import {useEffect} from "react";
import {userSliceActions} from "../../redux/slices/UserSlice.ts";
import UserComponent from "./UserComponent.tsx";

const UsersComponent = () => {

    const dispatch = useAppDispatch();
    const { users } = useAppSelector(storeStateRef => storeStateRef.userStoreSlice);

    useEffect(() => {
        dispatch(userSliceActions.loadUsers());
    }, []);

    return (
        <div>
            {users.map((user) => <UserComponent key={user.id} item={user}/>)}
        </div>
    );
};

export default UsersComponent;