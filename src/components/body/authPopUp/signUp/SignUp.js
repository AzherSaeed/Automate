import React,{useState} from 'react';
import './SignUp.css';
import {Link} from 'react-router-dom';
import AnimatedButton from '../../../animatedButton/AnimatedButton';
// import {SignUpAction} from '../../../../store/actions/AuthActions';
// import {connect} from 'react-redux';
import fire from '../../../../config/firebaseConfig'

const SignUp = (props) => {
    const [changeToggle,setChnageToogle] = useState(true);
    const [signUpData , setSignUpData] = useState({
        fullName : '',
        email : '',
        password : '',
        repassword : '',
        address : '',
        phone : '',
        delershipname :'',
        userType : 'Dealer Partner'
    });

const handleSignUpInputs = (event) => {
    setSignUpData({
        ...signUpData,
        [event.target.name] : event.target.value,
    })
  
}

const handleSubmit = () => {
    // props.SignUpAction(signUpData)
    console.log(signUpData.email)
    fire.auth().createUserWithEmailAndPassword(signUpData.email , signUpData.password)
    .then(() => {
        fire.firestore().collection('users').add({
            signUpData
        })
    })
    .then(() => {
        console.log('sign up successfully')
        
    })
    .catch((err) => {
        console.log('Err' , err)
    })  
 
}

const changeToggleHandler = (type) => {
    if(type === 'Private'){
        setChnageToogle(false)

        setSignUpData({
            ...signUpData,
            userType : type
        })
        
    }
    else{
        setChnageToogle(true)
        setSignUpData({
            ...signUpData,
            userType : 'Dealer Partner'
        })

    }
}  

    return (
        <div data-aos="zoom-in" className="signUpPopUp" >
            <div className="signUpPopUp-content" >
                <div className="row" >
                    <div className="col-ig-4 col-md-4" >
                        <div className="signUpPopUp-left" >
                            <div className="signUpPopUp-left-img" >
                                <h1>AutoMate</h1>
                            </div>
                            <div className="signup-text" >
                                <h5>Sign Up / Registration</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-ig-8 col-md-8" >
                    <div className="signUpPopUp-right" >
                        <div className="signUpPopUp-right-heading" >
                            <h1>New User?</h1>
                            <p>Use the form below to create your account.</p>
                        </div>
                        <div className="signUpPopUp-right-toogle" >
                            <div className="button-area" >
                                <div className="main-button" >
                                    <div className="row" >
                                        <div className="col-lg-6 col-md-6" >
                                            <Link to="/" onClick={ () => changeToggleHandler('Dealer')}  className={changeToggle?'dealer':'private'} >Dealer</Link>
                                        </div>
                                        <div className="col-lg-6 col-md-6" >
                                          <Link to="/" onClick={() => changeToggleHandler('Private')} className={changeToggle?'private':'dealer'}>Private</Link>
                                        </div>
                                    </div>
                                 
                                </div>
                            </div>
                        </div>
                        <div className="signUpPopUp-right-form" >
                           <div className="container" >
                                <Link to="/" onClick={props.closeSignUppopHandler} className="signUp-popup-close"  >&times;</Link>
                            <form className="signUpPopUp-right-form-inputs">
                                <div className="row" >
                                    <div className="col-lg-6 col-md-6" >
                                        
                                            <div className="form-group" >
                                                <input onChange={handleSignUpInputs} value={signUpData.fullName} name="fullName"  type="text"  className="form-input-1" id="fullname" required />
                                                <label className="form-label-1" htmlFor="fullname" >FULL NAME</label>
                                                {/* <p className="error-msg" >here is error masg </p> */}
                                            </div>
                                        
                                    </div>
                                        <div className="col-lg-6 col-md-6" >
                                            <div className="form-group" >
                                            <input onChange={handleSignUpInputs} value={signUpData.email} name="email"  type="text" className="form-input-2" id="email" required />
                                            <label className="form-label-2" htmlFor="email" >E-MAIL</label>
                                            {/* <p className="error-msg" >here is error masg </p> */}
                                            </div>
                                        </div>
                                </div>
                                <div className="row" >
                                    <div className="col-lg-6 col-md-6" >
                                        
                                            <div className="form-group" >
                                                <input onChange={handleSignUpInputs} value={signUpData.password} name="password"  type="password" className="form-input-1" id="password" required />
                                                <label className="form-label-1" htmlFor="password" >PASSWORD</label>
                                                {/* <p className="error-msg" >here is error masg </p> */}
                                            </div>
                                        
                                    </div>
                                        <div className="col-lg-6 col-md-6" >
                                            <div className="form-group" >
                                            <input onChange={handleSignUpInputs} value={signUpData.repassword} name="repassword"  type="password" className="form-input-2" id="retypepassword" required />
                                            <label className="form-label-2" htmlFor="retypepassword" >RE-TYPE PASSWORD</label>
                                            {/* <p className="error-msg" >here is error masg </p> */}
                                            </div>
                                        </div>
                                     </div>
                                <div className="row" >
                                    <div className="col-lg-6 col-md-6" >
                                        <div className="form-group" >
                                            <input onChange={handleSignUpInputs}  value={signUpData.address} name="address"  type="text" className="form-input-1" id="address" required />
                                            <label className="form-label-1" htmlFor="address" >ADDRESS</label>
                                            {/* <p className="error-msg" >here is error masg </p> */}
                                        </div>  
                                    </div>
                                        <div className="col-lg-6 col-md-6" >
                                            <div className="form-group" >
                                            <input onChange={handleSignUpInputs}  value={signUpData.phone} name="phone"  type="text" className="form-input-2" id="phone" required />
                                            <label className="form-label-2" htmlFor="phone" >PHONE NUMBER</label>
                                            {/* <p className="error-msg" >here is error masg </p> */}
                                        </div>
                                    </div>
                                    {changeToggle?(
                                        <div className="col-lg-12 col-md-12" >
                                            <div className="form-group" >
                                            <input onChange={handleSignUpInputs} value={signUpData.delershipname} name="delershipname"   type="text" className="form-input-2" id="phone" required />
                                            <label className="form-label-2" htmlFor="phone" >DEALERSHIP NAME</label>
                                                </div>
                                        </div>)
                                    :(null)}
                                </div>
                        
                                <div className="row animatedbutton" >
                                    <div className="col-lg-6 col-md-6 " >
                                        <AnimatedButton title="Create Account" onClick={handleSubmit} />
                                    </div>
                                    <div className="col-lg-6 col-md-6" >
                                    <div className="signUp-social-icons">
                                         <p>or log in with</p>
                                            <Link><img src="../.././assets/img/SVG/GoogleIcon.svg" alt="GoogleIcon.svg" /></Link>
                                            <Link><img src="../.././assets/img/SVG/FaceBookIcon.svg" alt="FaceBookIcon.svg" /></Link>
                                    </div>
                                    </div>
                                </div>
                                </form>
                                    <div className="signup-terms" >
                                        <input className="signup-checkbox" type="checkbox" />
                                        <p className="signup-condition" >by clicking this, you agree with the <Link  className="signup-condition-link" to=""> Terms & Condition </Link> of our website policy</p>
                                    </div>
                           </div>
                            <div className="signUp-right-logo" >
                                <img src="../.././assets/img/SVG/CBotHi_01.svg" alt="logo" />
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

// const mapDispatchToProps = (dispatch) => {
//     return {
//         SignUpAction : (creds) => dispatch(SignUpAction(creds))
//     }
// }

//export default connect(null , mapDispatchToProps)(SignUp);
export default SignUp;