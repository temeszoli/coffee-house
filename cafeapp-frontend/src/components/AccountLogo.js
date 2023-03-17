import { NavLink } from "react-router-dom";
import user from '../assets/account.png';

export default function AccountLogo(){
    return(
        <div className="nav-right">
            <NavLink to='/login'><img className='user-img' src={user} alt="Account managing" /></NavLink>
        </div>
    );
}