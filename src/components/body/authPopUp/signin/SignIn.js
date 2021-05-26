import React from 'react'
import './SignIn.css';
import {Link} from 'react-router-dom';
import AnimatedButton from '../../../animatedButton/AnimatedButton';
import UseForm from '../../../UseForm';
import Validate from '../.././../Validate';
// import SignInAction from '../../../../store/actions/AuthActions';
// import {connect} from 'react-redux';
import fire from '../../../../config/firebaseConfig';

//import auth from 'firebase'


const SignIn = (props) => {
const {handleSubmit , handleInputs , value , error} = UseForm(submit ,Validate )

function submit(){
    // props.SignInAction(value)
    fire.auth().signInWithEmailAndPassword(value.email , value.password)
    
    .then(() => {
        alert(`Welcome ${value.email}`)
    })
    .catch((err) => {
        console.log('Err' , err)
        alert('plaese try again')
    })
}
    return (
     <div data-aos="zoom-in" className="signinpopup" >
        <div className="signInpopUpcontent" >
            <div className="row">
                <div className="col-lg-4 col-md-4" >
                    <div className="signinpopUp-left" >
                        <div className="signinpopUp-left-img" >
                            <h1>AutoMate</h1>
                        </div>
                        <div className="signIn-text" >
                                <h5>Log In</h5>
                        </div>
                    </div>
                </div>
                <div className="col-lg-8 col-md-8" >
                    <div className="signInPopUp-right" >
                        <Link to="/" onClick={props.closePopUpHandler} className="signIn-popup-close" >&times;</Link>
                        <div className="signIpPopUp-right-heading" >
                            <h1>Welcome Again!</h1>
                            <p>Use the form below to sign into your account.</p>
                        </div>
                        <div className="signInPopUp-right-form" >
                                <form className="form" >
                                    <div className="row" >
                                        <div className="col-lg-12 col-md-12" >
                                            <div className="signIn-email" >
                                                    <input  autocomplete="off" type="text" value={value.email} name="email" onChange={handleInputs} className="email-input" id="password" required />
                                                    <label className="signIn-label-email" for="password" >E-MAIL</label>
                                                    <p  className="email-validate"> {error.email} </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row" >
                                        <div className="col-lg-12 col-md-12" >
                                            <div className="signIn-password" >
                                                <input  autocomplete="off" type="password" value={value.password} name="password" onChange={handleInputs} className="password-input" id="password" required />
                                                <label className="SignIn-label-password" for="password" >PASSWORD</label>
                                                <p className="password-validate"> {error.password} </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row" >
                                        <div className="col-lg-12 col-md-12" >
                                             <div className="form-button" >
                                                <AnimatedButton title="Log In" onClick={handleSubmit} />
                                            </div>
                                        </div>
                                    </div>
                                    <p className="forgot-line" >Forgotton Password? <Link className="forgotLink" > Click here</Link></p>
                                </form>
                            </div>
                                <div className="signIn-social-icons">
                                    <p>or log in with</p>
                                    <Link><img src="../.././assets/img/SVG/GoogleIcon.svg" alt="GoogleIcon.svg" /></Link>
                                    <Link><img src="../.././assets/img/SVG/FaceBookIcon.svg" alt="FaceBookIcon.svg" /></Link>
                                </div>
                            <div className="signin-logo" >
                                <img src="../.././assets/img/SVG/CBotHi_01.svg" alt="logo" />
                            </div>
                        </div>
                </div>
            </div>
        </div>
    </div>
    )
}

// const mapDispatchToprops = (dispatch) => {
//     return {
//         SignInAction : (creds) => dispatch(SignInAction(creds))
//     }
// } 
//export default connect(null , mapDispatchToprops)(SignIn);
export default SignIn;