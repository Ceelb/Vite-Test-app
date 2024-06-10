import { React, useState, useEffect } from 'react'
import { Link } from "react-router-dom";
//import Logo from '/logo-w.svg'

import Footer from '/src/assets/Footer.jsx'
import Nav from '/src/assets/Nav.jsx'
import CountBtn from '/src/assets/CountBtn.jsx'
import './HomePage.css'

import { collection, getDocs, getDoc, doc } from "firebase/firestore";
import { db } from '../config/firebase';

function HomePage() {
  /*const [employees, setEmployees] = useState();

  const docRef = doc("db", "TestUsers", "users");

  const readData = async () => {
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      console.log("Document data:", docSnap.data());
    } else {
      // doc.data() will be undefined in this case
      console.log("No such document!");
    }
  }

  useEffect(() => {
    readData();
  }, []);*/

  const [users, setUsers] = useState([]);
  const userCollectionRef = collection(db, "TestUsers");
  const user1Ref = doc(db, "TestUsers", "user1");

  let dataArray = new Array();
  let dataArrayA = new Array();

  let lagreEkstern;

  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(userCollectionRef);
      setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));

      //let dataDB = dataSnap.data();

      data.forEach((doc) => {
        lagreEkstern = JSON.stringify(doc.id);
        dataArrayA = JSON.parse(lagreEkstern);
      });

      console.log("Data alt: ", dataArrayA);

      /*lagreEkstern = JSON.stringify(dataDB);
      dataArrayA = JSON.parse(lagreEkstern);

      console.log("Data alt: ", dataArrayA);*/

      /*data.forEach((doc) => {
        console.log(doc.id, "=>", doc.data());
      });*/
    }

    const getData = async () => {
      const dataSnap = await getDoc(user1Ref);

      if(dataSnap.exists()){
        let dataInfor = dataSnap.data();

        lagreEkstern = JSON.stringify(dataInfor);
        dataArray = JSON.parse(lagreEkstern);

        console.log("Document user1 dataarray: ", dataArray);
      }
    }

    getUsers();
    getData();

  }, []);

  return (
    <>
    <Nav />

    <main>

      <div className='divSpace'>

        <h1>Welcome to the Test - app</h1>
        <p className="read">Vite + react</p>

      </div>

      <Link to="/profiles">Go To Profiles</Link>

    </main>

    <div>

      {users.map((user) => (
        <div key={user.id}>
          <h2>Name : {user.name}</h2>
          <h2>Age : {user.age}</h2>
          <h2>Email : {user.email}</h2>
          <p>Number : {user.number}</p>
        </div>
      ))}
    </div>

    <Footer />
    </>
  )
}

export default HomePage
