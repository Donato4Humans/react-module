import './App.css';
import LeftSideComponent from "./components/LeftSideComponent.tsx";
import RightSideComponent from "./components/RightSideComponent.tsx";
import {ThemeManagerContext} from "./context/ThemeManagerContext.tsx";
import {useState} from "react";

const App = () => {

    const [themeColor, setThemeColor] = useState<string>('light');

  return ( // GLOBAL THEME CLASS-TOGGLE IN PARENT COMPONENT || SAME WORKS IN CHILD COMP-S
    <div className={themeColor}>
        <ThemeManagerContext.Provider value={{
            theme: themeColor,
            changeTheme: (isDark: boolean) => {
                if(isDark){setThemeColor('dark');}
                else{setThemeColor('light');}
            }
        }}>
            <LeftSideComponent/>
            <RightSideComponent/>
        </ThemeManagerContext.Provider>
    </div>
  );
};

export default App;