import React from 'react'
import Header from './Header'
import { NETFLIX_HOMEPAGE_BGIMG } from '../utils/constants'

const Login = () => {
    return (
        <div className=''>
            <Header />
            <div className='absolute'>
                <img src={NETFLIX_HOMEPAGE_BGIMG} alt="bg-image1" />

            </div>
            <form className='absolute my-28 mx-auto right-0 left-0 bg-black text-white w-4/12 p-10 rounded-lg '>
                <h1 className=' text-3xl my-4'>Sign In</h1>
                <input type="text" name="" placeholder='Email or phone number'
                    className='p-2 m-2 bg-gray-800 w-full' id="" />
                <input type="password" name="" placeholder='Password'
                    className='p-2 m-2  bg-gray-800  w-full' id="" />
                <button className='px-6 py-3 m-2 bg-red-600  w-full' >Sign In</button>
                <p className='my-5'>New to Netflix?<span>Sign up now.</span> </p>
            </form>
        </div>
    )
}

export default Login