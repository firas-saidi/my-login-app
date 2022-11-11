import React,{useState} from 'react'
import "./style.css"


function SignIn() {
	
const [email,Setemail]=useState("") ;
const [password,Setpassword]=useState("") ;

const handleSubmit=(e) =>{
    e.preventDefault();
    
    console.log(email, password);
    fetch("http://localhost:5000/login-user", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "userRegister");
        if (data.status === "ok") {
          alert("login successful");
          window.localStorage.setItem("token", data.data);
          window.location.href = "./userDetails";
        }
      });
  }
  return (
    <div className="box">
		<form onSubmit={handleSubmit} autoomplete="off">
			<h2>Sign in</h2>
			<div className="inputBox">
				<input type="email" required="required"
				onChange={(e)=>Setemail( e.target.value)}/>
				<span>Email</span>
				<i></i>
			</div>
			<div className="inputBox">
				<input type="password" required="required"
				onChange={(e)=>Setpassword( e.target.value)}/>
				<span>Password</span>
				<i></i>
			</div>
			<div className="links">
				<Link to={"#/"}>Forgot Password ?!</Link>
				<Link to={"/signup"}>Signup</Link>
			</div>
			<input type="submit" value="Login"/>
		</form>
	</div>
  )
}

export default SignIn