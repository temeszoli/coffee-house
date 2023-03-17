import { useState } from "react";
import { getAuth, signInWithEmailAndPassword} from 'firebase/auth';
import { Link, useNavigate } from "react-router-dom";

export default function LoginPage(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error,setError] = useState('');

    const navigate = useNavigate();

    const logIn = async (event) => {
        event.preventDefault();

        try {
            if(email !== '' && password !== ''){
                await signInWithEmailAndPassword(getAuth(), email, password);
                alert(`${email} successfully logged in!`);
                navigate('/webshop');
            }else{
                setError('Please fill the email and the password field to log in!');
            }
        } catch (error) {
            setError(error.message);
            console.log(error.message);
        }
    }

    return(
        <div className="login-page">
            <div className='login-container'>
                <h1>Login</h1>
                {error && <p className="error">{error}</p>}
                <br />
                <input 
                    placeholder="Your email address"
                    value={email}
                    onChange={e => setEmail(e.target.value)}/>
                <br />
                <input 
                    type="password"
                    placeholder="Your Password"
                    value={password}
                    onChange={e => setPassword(e.target.value)} />
                <br />
                <button className='btn' onClick={logIn}>Login</button>
                <br /><br />
                <Link to="/register" className='account-link'>Don't have and account? Create one here</Link>
            </div>
        </div>
    );
}