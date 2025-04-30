import './menu.css'
import {Link} from "react-router-dom";

const MenuComponent = () => {
    return (
        <div>
            <ul>
                <li><Link to={'/'}>HOME</Link></li>
                <li><Link to={'/users/jsonplaceholder'}>PLACEHOLDER-USERS</Link>-|-<Link to={'/users/dummyjson'}>DUMMY-USERS</Link></li>
                <li><Link to={'/posts/jsonplaceholder'}>PLACEHOLDER-POSTS</Link>-|-<Link to={'/posts/dummyjson'}>DUMMY-POSTS</Link></li>
                <li><Link to={'/comments/jsonplaceholder'}>PLACEHOLDER-COMMENTS </Link></li>
            </ul>
        </div>
    );
};

export default MenuComponent;