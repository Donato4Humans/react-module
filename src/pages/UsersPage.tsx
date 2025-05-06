import {useAppSelector, userSliceActions} from "../main.tsx";
import {useDispatch} from "react-redux";
import {useEffect} from "react";

const UsersPage = () => {

    // THIS PART IS LIKE state from useState hook
    const usersSlice = useAppSelector(storeStateRef => storeStateRef.userSlice);
    console.log(usersSlice);
    const { users } = usersSlice;

    const dispatch = useDispatch(); // and THIS PART IS LIKE setState from useState hook

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(users => {
                // DISPATCH IS LIKE "ANALOG" OF SET-STATE TO SET VALUE INTO USER-SLICE FROM ANY COMPONENT
                //dispatch(userSlice.actions.loadUsers(users)); // this part will be replaced with exported sliceActions constant obj
                dispatch(userSliceActions.loadUsers(users));
                // THIS loadUsers(users) is like WRAPPER FOR OUR REAL loadUsers(state, action) from userSlice(context)
            }); // and WE SEND INTO ARGUMENTS VALUE THAT WILL BE SAVED INTO ACTION-ARGUMENT of userSlice.loadUsers and CHANGE OUR
    }, []);                 // INITIAL STATE OF "CONTEXT(SLICE)"

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