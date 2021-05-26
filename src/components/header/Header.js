import React , {useState} from 'react'
import './Header.css';
import AboutSection from '../body/AboutSection.js/AboutSection';
import VehicalType from '../body/VehicalType/VehicalType';
import NewArrival from '../body/NewArrival/NewArrival';
import Slider from '../body/slider/slider';
import FinanceSection from '../body/financeSection/FinanceSection';
import AppSection from '../body/appSection/AppSection';
import Footer from '../footer/Footer';
import NavLink from './navLink/navLink';
import NavToggler from './navLink/nabToggler/navToggler';
import NavPopUP from './navLink/Navpopup/Navpopup';
import AuthPopUp from './authUI/authPopUp';
import {Link} from 'react-router-dom';
import SignInPopUp from '../body/authPopUp/signin/SignIn';
import SignUpPopUp from '../body/authPopUp/signUp/SignUp';


const Header = () => {

  var [navPop , setPop] = useState(false);
  var [authPopUp , setAuthPopUp] = useState(false)
  var [popUp , setPopUp] = useState(false)
  var [signUpPopClose , setSignUpPopClose] = useState(false)


  const showPopUpsHandler = () => {
    setPopUp((prevState) => {
      return popUp = !prevState
    })
  }
  const closePopUpHandler = () => {
    setPopUp((prevState) => {
      popUp = prevState
    })
  }
  const showSignUpPopUp = () => {
    setSignUpPopClose((prevState) => {
      return signUpPopClose = !prevState
    })
  }
  const closeSignUppopHandler = () => {
    setSignUpPopClose ((prevState) => {
      signUpPopClose = prevState
    })
  }
  const showNavPopupHandler = () => {
    setPop((prevState) => {
      return navPop = !prevState
    })
  }

  const showAuthPopUpHandler  = () => {
    setAuthPopUp((prevState) => {
      return authPopUp = !prevState
    })
  }

if(signUpPopClose){
  var showSignUpPop = <SignUpPopUp  closeSignUppopHandler={closeSignUppopHandler} />
}
if(popUp){
  var showPopUps = <SignInPopUp closePopUpHandler={closePopUpHandler}/>
}

if(navPop){
  var shownav = <NavPopUP/>
}
if(authPopUp) {
  var showAuthPop =  <AuthPopUp showPopUpsHandler={showPopUpsHandler} showSignUpPopUp={showSignUpPopUp} />
}
    return (
        <div className="header-main" >
          
             <header className="header-bgImage" >
               <div>
                 {shownav}
               </div>
                <div className="header-navBar row " >
                 
                    <div className="col-md-4" >
                      <div className="logofirst" >
                          <div className="header-logo "> <img src="/assets/img/SVG/CBotHi_01.svg" alt="logo"/> </div>
                        <div className="logo-heading" ><h1>AutoMate</h1></div>
                      </div>
                    </div>
                    <div className="col-md-6" >
                          <NavLink/>
                    </div>
                    <div className="col-md-2 align-self-center nav-icon" >
                          <div className="row " >
                              <div className="col-lg-6 col-md-6 col-sm-6 personIcon" >
                                <Link to="/" onClick={showAuthPopUpHandler}  className=" personIcon mr-5" ><img src="/assets/img/Icon open-person.png" alt="personIcon" /></Link>
                              </div>
                             
                              <div className="col-lg-6 col-md-6 col-sm-6" >
                                <Link to="/"  ><img src="/assets/img/Search.png" alt="searchIcon" /></Link>
                              </div>
                          </div>
                        
                    </div>
                    <div className=" NavToggler  " >
                          <NavToggler showNavPopupHandler={showNavPopupHandler}/>
                      </div>
                    </div>
                 {/* <div className="productBar" >
                  <div className="productBar-inputs" >
                  <div className="row">
                       <div className="col-lg-2"  >
                          <input type="email" className="form-control" id="email" placeholder="Search Product" />
                        </div>
                       <div className="col-lg-2" >
                       <div class="form-group">
                        <select class="form-control" id="email">
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                        </select>
                        </div>
                        </div>
                       <div className="col-lg-2" >
                       <div class="form-group">
                        <select class="form-control" id="email">
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                        </select>
                        </div>
                        </div>
                       <div className="col-lg-2" >
                       <div class="slidecontainer" >
                        <input type="range"  class="slider" id="email"/>
                        </div>
                        </div>
                       <div className="col-lg-2" >
                       <div class="carimage" >
                        <img src="./assets/img/type-box.png" alt="carimage"   />
                        </div>
                        </div>
                        <div className="col-lg-2" >
                          <input type="email" className="form-control" id="email" placeholder="Search" />
                        </div>
                   </div>
                  </div>
                </div>  */}

                <div className="header-text" >
                  <span className="heading_text_first" >2018</span>
                  <span className="heading_text_center" >porsche</span>
                  <span className="heading_text_last" >118 cayman s</span>
                </div>
                  
     </header>
     <div className="circle" ><img src="/assets/img/circle-pin.png" alt="circle" /></div>
        <main>
          {showAuthPop }
          {showPopUps}
          {showSignUpPop}
           <AboutSection/> 
           <VehicalType/>
           <NewArrival/>
           <Slider/>
           <FinanceSection/>
            <AppSection/>
            <Footer/>
        </main>
        </div>
    
    )
}

export default Header
