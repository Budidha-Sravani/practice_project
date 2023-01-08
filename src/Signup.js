import { useState } from "react";
import { Link } from "react-router-dom";
import './App.css'
function Signup()
{
    const[uname,setuname]=useState('');
    const[pwd,setpassword]=useState(' ');

   
    const register=()=>{
       // alert(uname + " " +pwd)
       let data={
        email:uname,
        password:pwd
       }
       //console.log(JSON.stringify(data));
       fetch('http://localhost:8080/user/create',{
       method:'POST',
       body: JSON.stringify(data),
       headers:{
        "Content-Type":"application/json",
        "Access-Control-Allow-Origin":"*"
       }
    }).then(response => response.json())
      .then(json => console.log(json));

    }
    return(
        
        <div id='signup-div'>
            <h2>Sign Up</h2>
            Username: <input type='text' onChange={(e)=> setuname(e.target.value)}/> <br/> <br/>
            Password: <input type='password' onChange={(e) => setpassword(e.target.value)}/> <br/> <br />
            <button onClick={register}>Register</button><br /> <br />
            <Link id='link'to='/login'>Already Registered!!!Login</Link>

        </div>
    )
}

export default Signup