import {useEffect, useState} from "react";

// PART-2
// if function starts with "use" it becomes hook and can encapsulate other hooks

export const useFetch = () => {
    const [users, setUsers] = useState([]);
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
    return users;
    // return [users, setUsers]; IF WE NEED TO CHANGE SOMETHING INSIDE COMPONENT THAT CALLED THIS HOOK WE NEED RETURN SET-STATE TOO
}