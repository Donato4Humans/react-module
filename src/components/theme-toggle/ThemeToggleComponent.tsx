import {useContext} from "react";
import {ThemeManagerContext} from "../../context/ThemeManagerContext.tsx";

const ThemeToggleComponent = () => {

    const {theme, changeTheme} = useContext(ThemeManagerContext);

    const themeHandler = () => {
            if(theme === 'light') {changeTheme(true);}
            else if(theme === 'dark') {changeTheme(false);}
    };

    return (
        <div>
                <button className='border-2 border-emerald-500 p-2 rounded-2xl' onClick={themeHandler}>DARK-THEME-TOGGLE</button>
        </div>
    );
};

export default ThemeToggleComponent;