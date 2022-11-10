import React, { Component } from "react";
import  styles from "./UserDetails.module.css"
export default class UserDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userData: " ",
    };
  }
  componentDidMount() {
    fetch("http://localhost:5000/userData", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        token: window.localStorage.getItem("token"),
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "userData");
        this.setState({ userData: data.data });
      });
  }
  render() {
    return (
      
       
        <body>
  <form >
      <div className={styles.divTable}>
             <div className={styles.headRow}>

             <div  className={styles.divCell}> id</div>
                
                <div  className={styles.divCell}> Name</div>
                <div  className={styles.divCell}>last name</div>
                <div  className={styles.divCell}>Email</div>
             </div>
            <div className={styles.divRow}>
                  <div className={styles.divCelle}>{this.state.userData._id}</div>
                  <div className={styles.divCell}>{this.state.userData.fname}</div>
                  <div className={styles.divCell}>{this.state.userData.lname}</div>
                  <div className={styles.divCell}>{this.state.userData.email}</div>
             
            </div>
            <div className={styles.divRow}>
              
              
           </div>
            <div className={styles.divRow}>
                
               
           </div>
           <div className={styles.divRow}>
                
               
           </div>

      </div>
  </form>
</body>
      
    );
  }
}