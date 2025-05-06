import {Link} from "react-router-dom";

const MenuComponent = () => {
    return (
        <div>
            <ul>
                <li><Link to={'users'}>USERS</Link></li>
                <li><Link to={'users/1'}>USER</Link></li>
                <li><Link to={'posts'}></Link>POSTS</li>
            </ul>
        </div>
    );
};

export default MenuComponent;