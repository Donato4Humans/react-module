import {Link} from "react-router-dom";

const MenuComponent = () => {
    return (
        <div>
            <ul>
                <li><Link to={'/'}>home page</Link></li>
                <hr/>
                <li><Link to={'/a'}>A page</Link></li>
                <hr/>
                <li><Link to={'/b'}>B page</Link></li>
            </ul>
        </div>
    );
};

export default MenuComponent;