import {Link} from 'react-router-dom';

const Nav = () => {
    return (
   <>
    <Link to="/">Home</Link>
    <Link to="/about">About Us</Link>
    <Link to="/shop">Shop Now</Link>
    <Link to="/Users">Users</Link>
    <Link to="/Contact">Contact</Link>
    
    </>
    );
}
export default Nav;