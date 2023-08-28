import React, { useContext } from "react";
import { useRef } from "react";

import {Link, useNavigate} from "react-router-dom";
import { mycontext } from "./Context";


const Login = () => {
  const{signup,login,setLogin,username,setUsername}=useContext(mycontext)
  const nav=useNavigate()
 
 
  const emailref=useRef()
  const passwordref=useRef()
 
 
  const handleSubmit=(e)=>{
  
    e.preventDefault()
    const emailValue=emailref.current.value
    const passwordValue=passwordref.current.value
   console.log(emailValue)
   console.log(passwordValue)
   const value=signup.filter((x)=>x.email==emailValue && x.password == passwordValue)
setLogin(true)
   const username=value.map((user)=>user.name)
   if(value.length > 0){
    setUsername(username)
    console.log(username)
    nav("/")
   }
  
  else
  {alert("plz register")}
  
  }
 
  return (

   
    <div className="formlogi">
      
      
<div className="formlogi2">
  PLEASE LOGIN FIRST
        <form className="formlogi1">
          Username or Email Address
          <br />
          <input 
          type="email" 
          placeholder="sample@gmail.com" 
          ref={emailref}
          />
          <br />
          <br />
          Password
          <br />
          <input type="password" placeholder="password" ref={passwordref}/>
          <br />
          <br />
          <input type="checkbox" /> &nbsp;{" "}
          <label for="vehicle2"> Remember me</label>
          <br />
          <br />
          <button className="btnform1" type="submit" onClick={handleSubmit}>
            Log In
          </button>
          <br /> <br />
        </form>
      </div>
      <br />
       <Link to="/Reset">
      <p className="forgotpasswd">forgot your password?</p></Link>
      <Link to="/Registration">
      <p className="forgotpasswd">New User? Log in please</p></Link> 

      <br />
     
    </div>
  );
};

export default Login; 




        