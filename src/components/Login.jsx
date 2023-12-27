import React, { useState } from 'react'
import Header from './Header'
import { NETFLIX_HOMEPAGE_BGIMG } from '../utils/constants'

const Login = () => {
    const [isSignInForm, setIsSignInForm] = useState(true);

    const toggleSignInForm = () => {
        setIsSignInForm(!isSignInForm);
    }
    return (
        <div className=''>
            <Header />
            <div className='absolute'>
                <img src={NETFLIX_HOMEPAGE_BGIMG} alt="bg-image1" />

            </div>
            <form className='absolute my-28 mx-auto right-0 left-0 bg-black bg-opacity-80 text-white w-4/12 p-10 rounded-lg '>
                <h1 className=' text-3xl my-4'>{isSignInForm ? "Sign In" : "Sign Up"}</h1>
                {!isSignInForm && <input type="text" name="" placeholder='Email Full Name'
                    className='p-2 m-2 bg-gray-800 w-full' id="" />}
                <input type="text" name="" placeholder='Email or phone number'
                    className='p-2 m-2 bg-gray-800 w-full' id="" />
                <input type="password" name="" placeholder='Password'
                    className='p-2 m-2  bg-gray-800  w-full' id="" />
                {!isSignInForm && <input type="password" name="" placeholder='Confirm Password'
                    className='p-2 m-2  bg-gray-800  w-full' id="" />}
                <button className='px-6 py-3 m-2 bg-red-600  w-full' >{isSignInForm ? "Sign In" : "Sign Up"}</button>
                <p className='my-10 mx-2 cursor-pointer ' onClick={toggleSignInForm}>{isSignInForm ? "New to Netflix?Sign Up Now" : "Already registered?Sign In Now "} </p>
            </form>
        </div>
    )
}

export default Login