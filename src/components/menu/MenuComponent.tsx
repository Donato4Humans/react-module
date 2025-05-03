import './menu.css'
import {Link} from "react-router-dom";

const MenuComponent = () => {
    return (
        <div>
            <ul>
                <li><Link to={'/login'}>LOGIN</Link></li>
                <li><Link to={'/auth/resources'}>AUTH-RESOURCES</Link></li>
            </ul>
        </div>
    );
};

export default MenuComponent;