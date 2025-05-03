import {useEffect} from "react";
import {loginService} from "../services/api.service.ts";

const LoginPage = () => {

    useEffect(() => {
        loginService.login({username: 'michaelw', password: 'michaelwpass', expiresInMins: 1}); // GET THIS DATA FROM FORM-COMP.
    }, []);

    return (
        <div>
            LOGIN-PAGE
            {/*  IMPLEMENT FORM-COMPONENT WITH VALIDATION FOR LOGIN AND SEND DATA BACK TO LOGIN PAGE FOR LOGIN REQUEST  */}
        </div>
    );
};

export default LoginPage;