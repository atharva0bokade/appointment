import React from 'react';
import { useState } from 'react';
import Axios from 'axios';
import Info1 from './info1';
import Info2 from './info2';
import Info3 from './info3';
import Info4 from './info4';
import Info5 from './info5';


import {Route, Link, Router} from 'react-router-dom';
import './homeStyle.css';

function Home(params) {
    const [userName,setUserName]=useState("");
const [reason,setReason]=useState("");
console.log("It is home page");
// const add = () =>{
//   console.log(userName)
//   Axios.post("http://localhost:3001/add", {
//     userName : userName,
//     reason : reason
//   });
// }
    return(
        <div className = "Menu">
      
      
      <h1 id = "text2">Book Slots</h1>
      <Link to = "/info1"><button type="button" className="btn btn-danger" id="button1">{">"}</button></Link>
      <Link to = "/info2"> <button type="button" className="btn btn-danger" id="button2">{">"}</button></Link>
      <Link to = "/info3"><button type="button" className="btn btn-danger" id="button3">{">"}</button></Link>
      <Link to = "/info4"><button type="button" className="btn btn-danger" id="button4">{">"}</button></Link>
      <Link to = "/info5"><button type="button" className="btn btn-danger" id="button5">{">"}</button></Link>
        <div className = "slot1">
          <h5 id ="text1">9am to 10am</h5>

        </div>
        <div className = "slot2">
          <h5 id ="text1">10am to 11am</h5>
        </div>
        <div className = "slot3">
          <h5 id ="text1">12pm to 1pm</h5>
        </div>
        <div className = "slot4">
          <h5 id ="text1">2pm to 3pm</h5>
        </div>
        <div className = "slot5">
          <h5 id ="text1">4pm to 5pm</h5>
        </div>
        <h4 id = "text3">Check Appointment' Status</h4>
        <Link to = "/status"><button type="button" className="btn btn-danger" id="button6">{">"}</button></Link>
       
      
      </div>
    );
}

export default Home;