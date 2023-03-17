import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { getAuth, createUserWithEmailAndPassword} from 'firebase/auth';

export default function RegisterPage(){
    const [email,setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error,setError] = useState('');
    
    const navigate = useNavigate();

    const createAccount = async () => {

        try {
            if(email === '' || password === '' || confirmPassword === ''){
                setError('Please fill all the fields above to create your account!');
                return;
            }else if(password!==confirmPassword){
                setError('Password and confirm password do not match');
                return;
            }else if(email !== '' && password !== '' && password === confirmPassword){
                await createUserWithEmailAndPassword(getAuth(), email, password);
                navigate('/login');
            }
        } catch (error) {
            setError(error.message)
        }
    }

    return(
         <div className='register-page'>
            <div className="register-container">
                <h1>Create Account</h1>
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
                <input 
                    type="password"
                    placeholder="Re-enter your Password"
                    value={confirmPassword}
                    onChange={e => setConfirmPassword(e.target.value)} />
                <br />
                <button className='btn' onClick={createAccount}>Create Account</button>
                <br /><br />
                <Link to="/login" className='account-link'>Already have an account? Log in here</Link>
            </div> 
        </div>
    );
}