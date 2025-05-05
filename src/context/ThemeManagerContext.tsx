import {createContext} from "react";

type ThemeContextType = {
    theme: string;
    changeTheme: (isDark: boolean) => void;
}

const defaultValue = {
    theme: 'light',
    changeTheme: (isDark: boolean) => {
        console.log('isDark?', isDark);
    }
}

export const ThemeManagerContext = createContext<ThemeContextType>(defaultValue);