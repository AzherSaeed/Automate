import React  from 'react';
import './authPopUp.css';
import { Link } from 'react-router-dom';


const AuthPopUp = (props) => {
    return (
        <div  className="container-fluid" >
          <div className="authPopUp text-center" >
               <div >
               <div className="row" >
                   <Link to="/" > 
                       <img onClick={props.showPopUpsHandler}  src="../../../assets/img/png/Signin.svg" alt="Signin." />
                   </Link>
               </div>
               <div className="row" >
                   <Link to="/" > <img onClick={props.showSignUpPopUp} src="../../../assets/img/png/Signup.svg" alt="Signin." /> </Link>
               </div>
               </div>
             
               
                </div>
        </div>
    )
}

export default AuthPopUp
