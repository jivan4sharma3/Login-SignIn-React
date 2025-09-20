import React from 'react'
import './SignIn.css';
import { Link } from 'react-router-dom';


const SignIn = () => {
    return (
        <div className='container'>
            <form action="#">
                <h1 className='header'>Sign In</h1>
                <div className="username">
                    <label htmlFor="username">User Name </label>
                    <input type="text" name="username" id="username" placeholder='Enter your user name' />
                </div>
                 <div className="email">
                    <label htmlFor="email">E-mail</label>
                    <input type="email" name="email" id="email" placeholder='Enter your email' />
                </div>
                 <div className="password">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="password" placeholder='Enter your password' />
                </div>
                <div className="login">
                 <p>Already have an account? <Link to="/">Login</Link></p>
                </div>
                <div className="btn">
                    <button className='button'>Sign In</button>
                </div>
            </form>
        </div>
    )
}

export default SignIn
