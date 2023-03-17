import { useState } from "react";
import { NavLink } from "react-router-dom";
import userPic from '../assets/account.png';
import {getAuth, signOut} from 'firebase/auth';

export default function AccountLogo(){
    const [isLoggedIn, setIsLoggedIn] = useState(true);
    const [isLoading, setIsLoading] = useState(false);
      
    const handleLogout = async () => {
        setIsLoading(true);
        setIsLoggedIn(false);
        alert('You have successfully logged out');
      
        try {
            const auth = getAuth();
            await signOut(auth);
          } catch (error) {
            console.error(error);
          } finally {
            setIsLoading(false);
          }
        };

        if(isLoggedIn){
            return(
                <div className="nav-right">
                    <button className='btn' onClick={handleLogout} disabled={isLoading}>
                    Logout
                    </button>
                </div>
            );
        }else{
            return(
                <div className="nav-right">
                    <NavLink to='/login'><img className='user-img' src={userPic} alt="Account managing" /></NavLink>
                </div> 
            );
        }
}