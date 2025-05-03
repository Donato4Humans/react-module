import {useEffect} from "react";
import {authResourcesService, loginService} from "../services/api.service.ts";

const AuthResourcesPage = () => {

    // AFTER LOGIN ON PREVIOUS(LOGIN PAGE) WE CAN USE OUR TOKEN SAVED IN LOCAL-STORAGE TO GET SECURED DATA FROM API
    useEffect(() => {
        authResourcesService.getAuthProducts().then(authProducts => {
           console.log(authProducts);
        }).catch(reason => { // HERE WE CATCH ERROR IF OUR TOKEN EXPIRED AND CALLING API VIA SERVICES TO REFRESH TOKEN
           console.log(reason);
           loginService.refresh().then(() => authResourcesService.getAuthProducts()) // AFTER TOKEN REFRESHED
               // WE CALL API AGAIN WITH REFRESHED TOKEN AND GRAB DATA TO DISPLAY
               .then(value => console.log(value));
        });
    }, []);

    return (
        <div>
            AUTH-RESOURCES-PAGE
            {/*  IMPLEMENT AUTH-RESOURCES COMPONENT(--> AUTH-RESOURCE COMP.) TO DISPLAY authProducts grabbed FROM API */}
        </div>
    );
};

export default AuthResourcesPage;