import './menu.css'
import {Link} from "react-router-dom";

const MenuComponent = () => {
    return (
        <div>
            <ul>
                <li><Link to={'/'}>     HOME</Link></li>
                <li><Link to={'/users'}>USERS</Link></li>
            </ul>
        </div>
    );
};

export default MenuComponent;