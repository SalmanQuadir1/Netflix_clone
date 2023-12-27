import React from 'react'
import { NETFLIX_LOGO_URL } from '../utils/constants'

const Header = () => {
    return (
        <div className='absolute bg-gradient-to-b from-black  py-3 z-10'>
            <img className='h-20 px-32' src={NETFLIX_LOGO_URL} alt="Logo" />
        </div>
    )
}

export default Header