import UserComponent from "./UserComponent.tsx";
import {useCallback, useMemo} from "react";
import {useFetch} from "../hooks/useFetch.tsx";

const UsersComponent = () => {

    console.log('users');
    // PART-2 --------------!!!!!!!- CUSTOM HOOK FOR FETCH
    const users = useFetch(); // ENCAPSULATES TWO OTHER HOOKS(USE-STATE+USE-EFFECT)

    // PART-1 ------------------ ALL THIS OPTIMISATION TECHNICS LIKE USE-CALLBACK & USE-MEMO HOOKS MUST BE USED ONLY WITH
    //--------------PERFORMANCE HEAVY COMPONENTS WITH MANY ITERATIONS-LOOPS, HEAVY FETCH REQUESTS AND ONLY AFTER
    //---------------- PERFORMANCE-TESTS SHOWS BETTER RESULTS WITH SUCH OPTIMISATIONS

    const arr:number[] = useMemo(() => { // similar to useCallback hook, we WRAP OUR ARRAY-CREATION WITH
        return [11, 22, 33];   // useMemo HOOK THAT WORKS LIKE "FACTORY-GENERATING" FUNC BUT NOT EXACTLY LIKE GEN-FUNC IN JS
    }, []);

    const foo = useCallback(() => { // WE WRAPPED FOO FUNC WITH useCallback hook TO ALLOW MEMO WORK PROPERLY
        console.log('test');
    }, []);

    return (
        <div>
            USERS
            <hr/>
            {users.map((user) => <UserComponent item={user} foo={foo} arr={arr}/>)}
        </div>
    );
};

export default UsersComponent;