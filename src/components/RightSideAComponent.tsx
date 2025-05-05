import ThemeToggleComponent from "./theme-toggle/ThemeToggleComponent.tsx";
import {useContext} from "react";
import {ThemeManagerContext} from "../context/ThemeManagerContext.tsx";

const RightSideAComponent = () => {

    const {theme} = useContext(ThemeManagerContext); //TO USE IT PROPERLY WE NEED CSS WITH CLASSES, BUT I MANAGED THEM IN PARENT COMPONENT

    return (
        <div className={theme}>
            RIGHT-Side-A Component
            <hr/>
            <ThemeToggleComponent/>
        </div>
    );
};

export default RightSideAComponent;