import React from 'react'
import './Footer.css';
import { FaFacebookSquare  , FaSkype , FaTwitter , FaInstagram} from 'react-icons/fa';

const Footer = () => {
    return (
        <section className="FooterSection" >
            <div className="container-fluid">
                <div className="row" >
                    <div className="col-lg-6 col-md-6 col-sm-12" >
                    
                       <div className="footerText" >
                        <h2>AutoMate</h2>
                       <h6>@ 2020 AutoPro. All Rights Reserved. Developed by JWSTheme</h6>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12" >
                        <div className="icon" >
                            <a href="_" ><FaFacebookSquare /></a>
                            <a href="_"><FaSkype /></a>
                            <a href="_"><FaTwitter /></a>
                            <a href="_"><FaInstagram /></a>
                        </div>
                </div>
                </div>
            </div>
        </section>
    )
}

export default Footer
