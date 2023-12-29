import React, { useRef, useState } from 'react'
import Header from './Header'
import { NETFLIX_HOMEPAGE_BGIMG } from '../utils/constants'
import { checkValidateData } from '../utils/validate';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth } from "../utils/firebase";
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [isSignInForm, setIsSignInForm] = useState(true);
    const [errorMessage, setErrorMessage] = useState(null);

    const navigate = useNavigate();

    const name = useRef(null);
    const email = useRef(null);
    const password = useRef(null);

    const toggleSignInForm = () => {
        setIsSignInForm(!isSignInForm);
    }
    const handleButtonClick = async () => {
        const message = checkValidateData(email.current.value, password.current.value);
        setErrorMessage(message);
        if (message) return;

        if (!isSignInForm) {
            // sign up logic

            await createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    // Signed up 
                    const user = userCredential.user;
                    updateProfile(user, {
                        displayName: "Salman Quadir", photoURL: "https://example.com/jane-q-user/profile.jpg"
                    }).then(() => {
                        setErrorMessage("Profile Updated Successfully")
                    }).catch((error) => {
                        // An error occurred
                        // ...
                    });
                    navigate("/browse");
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMessage(errorMessage);
                    navigate("/");

                });

        } else {
            //Sign in logic

            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    // Signed in 
                    const user = userCredential.user;
                    updateProfile(user, {
                        displayName: "Salman Quadir", photoURL: "https://example.com/jane-q-user/profile.jpg"
                    }).then(() => {
                        setErrorMessage("Profile Updated Successfully")
                    }).catch((error) => {
                        // An error occurred
                        // ...
                    });
                    navigate("/browse");

                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMessage(errorMessage);
                    navigate("/");

                });
        }

    }
    return (
        <div className=''>
            <Header />
            <div className='absolute backdrop-brightness-90'>
                <img className=' bg-cover bg-center' src={NETFLIX_HOMEPAGE_BGIMG} alt="bg-image1" />

            </div>
            <form onSubmit={(e) => e.preventDefault()} className='absolute my-28 mx-auto right-0 left-0 bg-black bg-opacity-80 text-white  w-4/12 p-10 rounded-lg  '>
                <h1 className=' text-3xl my-4'>{isSignInForm ? "Sign In" : "Sign Up"}</h1>
                {!isSignInForm && <input type="text" ref={name} name="" placeholder='Full Name'
                    className='p-2 m-2 bg-gray-800 w-full' id="" />}
                <input type="text" name="" ref={email} placeholder='Email or phone number'
                    className='p-2 m-2 bg-gray-800 w-full' id="" />
                <input type="password" ref={password} name="" placeholder='Password'
                    className='p-2 m-2  bg-gray-800  w-full' id="" />

                {errorMessage &&
                    <div id="alert-1" className="flex items-center p-4 w-full m-2 text-blue-800 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-400" role="alert">
                        <svg className="flex-shrink-0 w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
                        </svg>
                        <span className="sr-only">Info</span>
                        <div className="ms-3 text-sm font-medium">
                            {errorMessage}
                        </div>
                        <button type="button" className="ms-auto -mx-1.5 -my-1.5 bg-blue-50 text-blue-500 rounded-lg focus:ring-2 focus:ring-blue-400 p-1.5 hover:bg-blue-200 inline-flex items-center justify-center h-8 w-8 dark:bg-gray-800 dark:text-blue-400 dark:hover:bg-gray-700" data-dismiss-target="#alert-1" aria-label="Close">
                            <span className="sr-only">Close</span>
                            <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                            </svg>
                        </button>
                    </div>}

                <button className='px-6 py-3 m-2 bg-red-600  w-full' onClick={handleButtonClick}>{isSignInForm ? "Sign In" : "Sign Up"}</button>
                <p className='my-10 mx-2 cursor-pointer ' onClick={toggleSignInForm}>{isSignInForm ? "New to Netflix?Sign Up Now" : "Already registered?Sign In Now "} </p>
            </form>
        </div>
    )
}

export default Login