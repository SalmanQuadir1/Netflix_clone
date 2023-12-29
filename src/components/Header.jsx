import React from 'react'
import { NETFLIX_LOGO_URL, NETFLIX_USER_IMG } from '../utils/constants'
import { signOut } from 'firebase/auth';
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Header = () => {
    const navigate = useNavigate();
    const user = useSelector(state => state.user);
    console.log(user + "ssssssssssss")



    const handleSignOut = () => {
        signOut(auth).then(() => {
            // Sign-out successful.
            navigate("/")
        }).catch((error) => {
            // An error happened.
        });
    }
    return (
        <div className='absolute bg-gradient-to-b w-full px-4 from-black  py-3 z-10 flex justify-between'>
            <img className='h-20 px-3' src={NETFLIX_LOGO_URL} alt="Logo" />

            <div className='flex gap-2 align-middle text-white' >
                <img className='h-10 my-4 rounded-full' src={NETFLIX_USER_IMG} alt="UserIcon" />
                <button onClick={handleSignOut} className='bg-red-600 h-10 my-4 px-4 rounded-sm hover:bg-white hover:text-red-600'>Sign Out</button>

            </div>
        </div>
    )
}

export default Header