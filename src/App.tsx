import './App.css';
import {getAllUsers, saveUser} from "./services/user.service.ts";
import {useEffect} from "react";

const App = () => {

    useEffect(() => {
        getAllUsers().then(value => console.log(value));
        saveUser({id:1, name: 'vasya', email: "vasya@gmail.com"}).then(value => console.log(value));
    }, []);

    return (
    <>

    </>
  );
};

export default App;