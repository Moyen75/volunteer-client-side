import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import useFirebase from '../../hooks/useFirebase';
import '../Header/Header.css'

const Login = () => {
    const { signInUsingPopup } = useFirebase()
    return (
        <div className='login'>
            <div>
                <button onClick={signInUsingPopup}><i class="fab fa-google"></i>
                    <small>Sign in with Google</small></button>
            </div>
        </div>
    );
};

export default Login;