import {useEffect} from "react";
import {useAppSelector} from "../redux/hooks/useAppSelector.tsx";
import {userSliceActions} from "../redux/slices/userSlice/userSlice.ts";
import {useAppDispatch} from "../redux/hooks/useAppDispatch.tsx";

const UsersPage = () => {

    // THIS PART IS LIKE state from useState hook
    const usersSlice = useAppSelector(storeStateRef => storeStateRef.userSlice);
    console.log(usersSlice);
    const { users } = usersSlice;

    const dispatch = useAppDispatch(); // and THIS PART IS LIKE setState from useState hook

    // useEffect(() => { // THIS APPROACH WITH ASYNC CODE DONT USE LIKE THIS(DOWN WILL BE PROPER APPROACH
    //     fetch('https://jsonplaceholder.typicode.com/users')
    //         .then(res => res.json())
    //         .then(users => {
    //             // DISPATCH IS LIKE "ANALOG" OF SET-STATE TO SET VALUE INTO USER-SLICE.INITIAL-STATE FROM ANY COMPONENT
    //             dispatch(userSliceActions.loadUsers(users));
    //             // THIS loadUsers(users) is like WRAPPER FOR OUR REAL loadUsers(state, action) from userSlice(context)
    //         }); // and WE SEND INTO ARGUMENTS VALUE THAT WILL BE SAVED INTO ACTION-ARGUMENT of userSlice.loadUsers and CHANGE OUR
    // }, []);                 // INITIAL STATE OF "CONTEXT(SLICE)"

    useEffect(() => {
        dispatch(userSliceActions.loadUsers());
    }, []);

    return (
        <div>
            USERS-PAGE
            <hr/>
            { // USER-COMPONENT FILLER
                users.map((user) => {
                    return <div key={user.id}>{user.name}</div>
                })
            }
        </div>
    );
};

export default UsersPage;