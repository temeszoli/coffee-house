import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthState } from 'react-firebase-hooks/auth';
import {signOut} from 'firebase/auth';
import {auth} from '../firebase';

export default function AccountLogo(){
    const [user] = useAuthState(auth);
    const [isLoading, setIsLoading] = useState(false);

    const navigate = useNavigate();

    const handleLogout = async () => {
        setIsLoading(true);
        alert('You have successfully logged out');
      
        try {
            await signOut(auth);
          } catch (error) {
            console.error(error);
          } finally {
            setIsLoading(false);
          }
        };

    const handleLogin = () => {
        navigate('/login');
    }

        return(
            <>
            {user 
                ?(
                    <div className="nav-right">
                    <button className='btn' onClick={handleLogout} disabled={isLoading}>
                    Logout
                    </button>
                </div>
                ) : (
                    <div className="nav-right">
                    <button className='btn' onClick={handleLogin} disabled={isLoading}>Login</button>
                    </div> 
                )
            }
            </>  
        );
    }