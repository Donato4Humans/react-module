import {useSearchParams} from "react-router-dom";
import {useEffect} from "react";

const Test = () => {

    const [query, setQuery] = useSearchParams()

    useEffect(() => {
        const pg = query.get('pg');
        console.log(pg);
        // NOW WE CAN CREATE API CALL WITH THIS SEARCH-PARAM AND IMPLEMENT PAGINATION
        fetch('https://reqres.in/api/users?page=' + pg, {headers:{"x-api-key": "reqres-free-v1"}}).then(res => res.json())
            .then(users => console.log(users)); // just to test we create fetch here instead of proper way
    }, [query]);

    return (
        <div>
            TEST
        </div>
    );
};

export default Test;