import {Link} from "react-router-dom";

const MenuComponent = () => {
    return (
        <div>
            <ul>
                <li><Link to={'/cars'}>CARS-PAGE</Link></li>
                <li><Link to={'/cars/create'}>CREATE-CAR-PAGE</Link></li>
            </ul>
        </div>
    );
};

export default MenuComponent;