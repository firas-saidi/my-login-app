import React from 'react'
import { Link } from 'react-router-dom'
import "./style.css"
const Home =()=> {
  return (

  
   <div className="container text-center ">
   <div className="row">
    <div className="col">
    <Link className='h1' to={"/signin"}>Signin </Link>

    </div>
    <div className="col">
    <Link className='h1' to={"/signup"}>Signup </Link>
    </div>
  
  </div>
</div>
            
       
    
  )
}

export default Home