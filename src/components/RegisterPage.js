import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function RegisterPage(){
    const [email,setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [message, setMessage] = useState('');
    
    const navigate = useNavigate();

    const createAccount = () => {
        const messageP = document.querySelector('.register-container p');

        if(email === '' || password === '' || confirmPassword === ''){
            setMessage('Please fill all the fields above to create your account!');
            messageP.classList.add('errorMsg');
        }else if(password!==confirmPassword){
            setMessage('The password and the confirm password field must match!');
            messageP.classList.add('errorMsg');
        }else if(email !== '' && password !== '' && password === confirmPassword){
            navigate('/login');
        }
    }

    return(
         <div className='register-page'>
            <div className="register-container">
                <h1>Create Account</h1>
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
                <input 
                    type="password"
                    placeholder="Re-enter your Password"
                    value={confirmPassword}
                    onChange={e => setConfirmPassword(e.target.value)} />
                <br />
                <button className='btn' onClick={createAccount}>Create Account</button>
                <br /><br />
                <Link to="/login" className='account-link'>Already have an account? Log in here</Link>
                <p>{message}</p>   
            </div> 
        </div>
    );
}