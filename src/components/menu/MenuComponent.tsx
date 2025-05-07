import {Link} from "react-router-dom";
import './menu.css'

const MenuComponent = () => {
    return (
        <div>
            <ul>
                <li><Link to={'/users'}>USERS</Link></li>
                <li><Link to={'/posts'}>POSTS</Link></li>
                <li><Link to={'/comments'}>COMMENTS</Link></li>
                <li><Link to={'/complex'}>COMPLEX</Link></li>
            </ul>
        </div>
    );
};

export default MenuComponent;