import React,{useState} from 'react'
import "./style.css"


const Signup =()=> {
	const [fname,Setfname]=useState("") ;
	const [email,Setemail]=useState("") ;
	const [lname,Setlname]=useState("") ;
	const [password,Setpassword]=useState("") ;

	const  handlesubmit=(e)=>{
		e.preventDefault();
	  
		 
		  console.log(fname, lname, email, password);
		  fetch("http://localhost:5000/register", {
			method: "POST",
			crossDomain: true,
			headers: {
			  "Content-Type": "application/json",
			  Accept: "application/json",
			  "Access-Control-Allow-Origin": "*",
			},
			body: JSON.stringify({
			  fname,
			  email,
			  lname,
			  password,
			  }),
				 })
				  .then((res) => res.json())
				  .then((data) => {
				  console.log(data, "userRegister");
				  if (data.status === "ok") {
					alert("logined");}
			});
		}
  return (
    <div className="box2">
		<form onSubmit={ handlesubmit} autoomplete="off">
			<h2>Signup</h2>
			<div className="inputBox2">
				<input type="text" required="required"
				onChange={(e)=>Setfname( e.target.value)}/>
				<span>Userame</span>
				<i></i>
			</div>
            <div className="inputBox2">
				<input type="text" required="required"
				onChange={(e)=>Setlname( e.target.value)}/>
				<span>Last name </span>
				<i></i>
			</div>
            <div className="inputBox2">
				<input type="email" required="required"
				onChange={(e)=>Setemail( e.target.value)}/>
				<span>Email </span>
				<i></i>
			</div>
			<div className="inputBox2">
				<input type="password" required="required"
				onChange={(e)=>Setpassword( e.target.value)}/>
				<span>Password</span>
				<i></i>
			</div>
			<div className="links">
				
				<Link to={"/signin"}>SignIn</Link>
			</div>
			<input type="submit" value="Login"/>
		</form>
	</div>
  )
}

export default Signup