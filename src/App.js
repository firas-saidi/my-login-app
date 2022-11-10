import './App.css';
import SignIn from './componments/Signin/SignIn';
import Home from './componments/Home/Home';
import Signup from './componments/Signup/Signup';
import UserDetails from "./componments/UserDetails/UserDetails"
import {BrowserRouter as Router,Route,Routes} from "react-router-dom"

function App() {
  return (
    <Router basename={'/my-login-app'}>
    
      <Routes>
        <Route exact path ="/" element ={<Home/>} />      
        <Route path ="/signin" element ={<SignIn/>} />      
        <Route path ="/signup" element ={<Signup/>} />      
        <Route path="/userdetails" element={<UserDetails />}/>
      </Routes>
   

 </Router>
  );
}

export default App;
