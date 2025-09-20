import React from 'react'
import './Login.css'
import { Link } from 'react-router-dom';

const Login = () => {
   return (
        <div className='container'>
            <form action="#">
                <h1 className='header'>Login</h1>
                 <div className="email">
                    <label htmlFor="email">E-mail </label>
                    <input type="email" name="email" id="email" placeholder='Enter your email' />
                </div>
                 <div className="password">
                    <label htmlFor="password">Password </label>
                    <input type="password" name="password" id="password" placeholder='Enter your password' />
                </div>
                <div className="login">
                   <p>Don't have an account? <Link to="/signin">Sign In</Link></p>
                </div>
                <div className="btn">
                    <button className='button'>Login</button>
                </div>
            </form>
        </div>
    )
}

export default Login
