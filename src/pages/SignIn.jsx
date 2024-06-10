import { React, useState, useEffect } from 'react'
import { Link } from "react-router-dom";

import Footer from '/src/assets/Footer.jsx'
import Nav from '/src/assets/Nav.jsx'
import CountBtn from '/src/assets/CountBtn.jsx'

import { auth, provider } from '../config/firebase';
import { signInWithEmailAndPassword } from 'firebase/auth'

import { collection, addDoc } from 'firebase/firestore';

function SignIn() {
    const [value, setValue] = useState('');

    const signInGoogle = () => {
        signInWithPopup(auth, provider).then((data) => {
            setValue(data.user.email);
            localStorage.setItem('email', data.user.email);
        });
    }

    const signIn = () => {
        /*signInWithEmailAndPassword(auth, document.getElementById('email').value, document.getElementById('password').value).then((data) => {
            setValue(data.user.email);
            localStorage.setItem('email', data.user.email);
        });*/

        let email = document.getElementById('email').value;
        let password = document.getElementById('password').value;

        signInWithEmailAndPassword(auth, email, password).then((data) => {
            const user = data.user;
            setValue(user.email);
            localStorage.setItem('email', user.email);
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
        });

        document.getElementById('email').value = '';
        document.getElementById('name').value = '';
        document.getElementById('password').value = '';
    }

    /*const addUser = async () => {
        const docRef = await addDoc(collection(db, "TestUsers"), {

        });
        
        console.log("Document written with ID: ", docRef.id);
    }*/

    useEffect(() => {
        setValue(localStorage.getItem('email'))
    })

    return (
        <>

        <Nav />

        <div className="divSpace">
            <h1>Login</h1>

            <div className='flexCenter'>
                <div className='signin'>
                    {value ? <h2>Welcome {value}</h2> : <h2>Welcome</h2>}

                    <input type="text" id='email' placeholder='Email' />
                    <input type="password" id='password' placeholder='Password' />

                    <button onClick={signIn}>Sign in</button>
                    <button onClick={signInGoogle}>Sign in with Google</button>
                </div>
            </div>
        </div>

        <Footer/>

        </>
    )
}

export default SignIn