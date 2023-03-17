import { Link, NavLink } from "react-router-dom";
import logo from '../assets/logo.jpg';

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
        </header>
    );
}