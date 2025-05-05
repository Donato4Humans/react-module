import UserComponent from "./UserComponent.tsx";
import {useCallback, useEffect, useMemo, useState} from "react";

const UsersComponent = () => {

    // ------------------ ALL THIS OPTIMISATION TECHNICS LIKE USE-CALLBACK & USE-MEMO HOOKS MUST BE USED ONLY WITH
    //--------------PERFORMANCE HEAVY COMPONENTS WITH MANY ITERATIONS-LOOPS, HEAVY FETCH REQUESTS AND ONLY AFTER
    //---------------- PERFORMANCE-TESTS SHOWS BETTER RESULTS WITH SUCH OPTIMISATIONS

    console.log('users');
    const [users, setUsers] = useState([]);

    const arr:number[] = useMemo(() => { // similar to useCallback hook, we WRAP OUR ARRAY-CREATION WITH
        return [11, 22, 33];   // useMemo HOOK THAT WORKS LIKE "FACTORY-GENERATING" FUNC BUT NOT EXACTLY LIKE GEN-FUNC IN JS
    }, []);

    const foo = useCallback(() => { // WE WRAPPED FOO FUNC WITH useCallback hook TO ALLOW MEMO WORK PROPERLY
        console.log('test');
    }, []);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(value => {
                setUsers(value);
            });

            return(() => {
               console.log('unsubscribe'); // this will be called after we delete component
            });
    }, []);

    return (
        <div>
            USERS
            <UserComponent foo={foo} arr={arr}/>
        </div>
    );
};

export default UsersComponent;