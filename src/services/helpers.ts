export const retrieveLocalStorage =<T, > (key:string) => { // WE STRICTLY TYPING OBJ FROM LOCAL-STORAGE AND
    const object = localStorage.getItem(key) || ''; // MAKING IT FOR ANY NEEDED TYPE VIA TEMPLATE TYPE FUNC
    if(!object) {
        return {} as T;
    }
    const parsed = JSON.parse(object);
    return parsed as T;
}