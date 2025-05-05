import './App.css';
import LeftBranch from "./components/LeftBranch.tsx";
import RightBranch from "./components/RightBranch.tsx";
import {init, MyContext} from "./context/MyContext.tsx";
import {useState} from "react";

const App = () => {

    // ALL DATA-STORAGE FOR EXCHANGE WILL BE ESTABLISHED INSIDE 0-LEVEL COMPONENT(IN OUR CASE - APP.TSX)

    const [counter, setCounter] = useState<number>(init.counterValue); // WE MUST USE (USE-STATE HOOK TO TIE ALL COMPONENTS BETWEEN EACH OTHER)

  return (
    <>
        {/*WE WRAP OUR SHARED-DATA COMPONENTS WITH CONTEXT-OBJ TO ALLOW BETTER STATE-LIFTING */}
        <MyContext.Provider value={{

            counterValue: counter, // HERE WE TIE IT WITH USE-STATE VALUE AND NOW OUR COMP-S ARE TIED AND CAN MANIPULATE THIS VALUE

            increment:(obj) => {
                setCounter(++obj);
            }
        }}>
            <LeftBranch/>
            <RightBranch/>
        </MyContext.Provider>
    </>
  );
};

export default App;