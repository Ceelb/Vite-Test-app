import { React, useState, useEffect } from 'react'
import { Link } from "react-router-dom";

import Footer from '/src/assets/Footer.jsx'
import Nav from '/src/assets/Nav.jsx'
import CountBtn from '/src/assets/CountBtn.jsx'

import { auth, provider } from '../config/firebase';
import { createUserWithEmailAndPassword  } from 'firebase/auth'

import { collection, addDoc } from 'firebase/firestore';

function SignUp() {
    const [value, setValue] = useState('');

    const signUp = () => {
        /*signInWithPopup(auth, provider).then((data) => {
            setValue(data.user.email);
            localStorage.setItem('email', data.user.email);
        });*/

        const email = document.getElementById('email').value;
        const name = document.getElementById('name').value;
        const password = document.getElementById('password').value;

        createUserWithEmailAndPassword(auth, email, password).then((userCredential) => {
            const user = userCredential.user;
            setValue(user.email);
            localStorage.setItem('email', user.email);
        }).catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
        });

        document.getElementById('email').value = '';
        document.getElementById('name').value = '';
        document.getElementById('password').value = '';
    }

   /* const logOut = () => {
        signOut(auth).then(() => {
            // Sign-out successful.
            console.log("Siggnedout successful!")
          }).catch((error) => {
            // An error happened.
            console.log("An error happened...!")
        });
    }*/

    const addUser = async () => {
        const docRef = await addDoc(collection(db, "TestUsers"), {

        });
        
        console.log("Document written with ID: ", docRef.id);
    }

    useEffect(() => {
        setValue(localStorage.getItem('email'))
    })

    return (
        <>

        <Nav />

        <div className="divSpace">
            <h1>Sign Up</h1>

            <div className='flexCenter'>
                <div className='signin'>
                    {value ? <h2>Welcome {value}</h2> : <h2>Welcome</h2>}

                    <input type="text" id='email' placeholder='Email' />
                    <input type="text" id='name' placeholder='Name' />
                    <input type="password" id='password' placeholder='Password' />

                    <button onClick={signUp}>Sign Up</button>
                </div>
            </div>
        </div>

        <Footer/>

        </>
    )
}

export default SignUp