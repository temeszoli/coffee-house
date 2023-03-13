import { Link, NavLink } from "react-router-dom";
import logo from '../assets/logo.jpg';
import user from '../assets/account.png';

export default function Header(){
    const getClass = ({ isActive }) => (isActive ? "nav-active" : null);

    return(
        <header className='header-container'>
            <Link to='/'>
                <img className='navbar-logo' src={logo} alt="" />
            </Link>
            
            <nav>
                <NavLink to='/' className={getClass}>Home</NavLink>
                <NavLink to='/about' className={getClass}>About</NavLink>
                <NavLink to='/drinks' className={getClass}>Drinks</NavLink>
                <NavLink to='/webshop' className={getClass}>Webshop</NavLink>               
            </nav>
            <div className="nav-right">
                <NavLink to='/login'><img className='user-img' src={user} alt="Account managing" /></NavLink>
            </div>
        </header>
    );
}