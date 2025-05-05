import {useEffect, useState} from "react";

export const useFetch = <T,>(url:string, defaultValue: T)  => {
    const [resources, setResources] = useState<T>(defaultValue);

    useEffect(() => {
        fetch(url).then(res => res.json()).then(res => setResources(res));
    }, [url]);
    return resources;
}