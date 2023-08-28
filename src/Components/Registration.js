import React, { useRef } from 'react';
import './Home.css'; // Import your CSS file for styling
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { mycontext } from './Context';
const Registration = () => {

  const { signup,setSignup} = useContext(mycontext)
 
  const nameref=useRef()
 const emailref=useRef()
 const passwordref=useRef()

const handleSubmit=(e)=>{
  e.preventDefault()
  const nameValue=nameref.current.value;
  const emailValue=emailref.current.value
  const passwordValue=passwordref.current.value
 


  setSignup([...signup,{name:nameValue, email:emailValue, password:passwordValue,id:Date.now()}])
  console.log(signup);
  nav("/Login")
}



  const nav=useNavigate()
  return (
    <div>
      <div className="formlogin2">
        <form className="formlogin1">
          <label htmlFor="name">Name</label>
          <br />    
          <input type="text" id="name"placeholder='enter your name' ref={nameref}  required/>
          
          <br />
          <br />
          <label htmlFor="name">email</label>
          <input type="email" id="email" placeholder="Enter your email" ref={emailref}  required/>
          <br />
          <br />
          <label htmlFor="password">Password</label>
          <br />
          <input type="password" id="password" ref={passwordref} />
          <br />
          <br />
          <label htmlFor="confirmPassword">Confirm Password</label>
          <br />
          <input type="password" id="confirmPassword" />
          <br />
          <br />
          
          <button onClick={handleSubmit} className="btnform" type="submit">
            Submit
          </button>
          <button onClick={()=>nav('/')}>Home</button>


          <br /> <br />
        </form>
      </div>
    </div>
  );
};

export default Registration;
