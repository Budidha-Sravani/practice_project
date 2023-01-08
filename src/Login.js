import {Link,useNavigate } from 'react-router-dom'
import { useState } from "react";
function Login(){
const [email,setuname]=useState('');
const[pwd,setpassword]=useState('');
const url=new URL('http://localhost:8080/users/fetch');
const params={
    email:email,
    password:pwd
}
url.search=new URLSearchParams(params).toString();
const navigate=useNavigate();
const validate=()=>{
    fetch(url,{
        method:"GET",
        mode:"cors",
        headers:{
            "content-Type":"application/json",
            "Access-Control-Allow-Origin":"*",
        }
    }).then(response=>response.text())
    .then((text)=>{
        if(text==="Valid User"){
            alert("Login Successful");
            navigate("/home")
        }
        else{
            alert("Login Failed");
        }
    });
}




    return(
        
        <div id="login-div">
            <h2>Login</h2>
            Username:<input type="text" onChange={(e)=>setuname(e.target.value)} /><br/><br/>
            Password:<input type="password" onChange={(e)=>setpassword(e.target.value)}/><br/><br/>
            <button onClick={validate}>Login</button><br/><br/>
                {/*<Link to="/home">Login</Link>*/}
                <Link to="/signup">New User!! SignUp</Link>
                </div>
    )
}
export default Login