import { useState } from "react";
import { Link,  } from "react-router-dom";

export default function LoginPage(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    const logIn = () => {
        const messageP = document.querySelector('.login-container p');

        if(email !== '' && password !== ''){
            setMessage('You have succesfully logged in!');
            messageP.classList.add('successMsg');
        }else{
            setMessage('Please fill the email and the password field to log in!');
            messageP.classList.add('errorMsg');
        }  
    }

    return(
        <div className="login-page">
            <div className='login-container'>
                <h1>Login</h1>
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
                <p>{message}</p>
            </div>
        </div>
    );
}