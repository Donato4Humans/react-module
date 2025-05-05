import {createContext} from "react";

type MyContextType = {
    counterValue: number;
    increment: (obj:number) => void;
};

// WE CREATE THIS INIT-OBJ JUST TO DEAL WITH TYPESCRIPT STRICT-TYPE MODEL(IN JS WE CAN USE NULL INSIDE CREATE-CONTEXT FUNCTION AND USE IT
export const init = {
    counterValue: 0,
    increment: (obj: number) => {
        console.log(obj);
    }
};

// USEFULNESS OF CONTEXT FOR EXCHANGING DATA BETWEEN DIFFERENT LEVELS OF COMPONENTS IS MUCH HIGHER IN DEFAULT JS
// BUT IN TYPESCRIPT IT IS MUCH LONGER TO IMPLEMENT WITH ALL STRICT-TYPE
// SO IT MOSTLY USED WITHOUT TYPESCRIPT

export const MyContext = createContext<MyContextType>(init);