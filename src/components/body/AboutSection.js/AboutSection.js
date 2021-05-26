import React from 'react'
import './AboutSection.css';
const AboutSection = () => {
    return (
        <section className="about-section" >
        <div 
            data-aos="fade-up"
            data-aos-offset="200"
            data-aos-delay="100"
            className="about-heading" >
            <h4>About Automate</h4>
            <h1>Welcome to Automate Car Dealer</h1>
            <p> It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        </div>
       <div className="carlist" >
       <div className="row" >
            <div className="col-lg-4 col-md-4 col-sm-12" >
                <div className="row grid-divider" >
                    <div className="col-md-6 col-sm-6 " >
                        <img  className="img-fluid rounded mx-auto d-block"  src="/assets/img/cars/icon-02.jpg" alt="car1" />
                    </div>
                    <div className="col-md-6 col-sm-6 car-heading" >
                        <h2 className="text-center"  >1200</h2>
                        <p className="text-center" >New car in stock</p>
                    </div>
                </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12" >
                <div className="row" >
                    <div className="col-md-6 col-sm-6" >
                        <img className="img-fluid rounded mx-auto d-block"  src="/assets/img/cars/icon-05.jpg" alt="car1" />
                    </div>
                    <div className="col-md-6 col-sm-6 car-heading" >
                        <h2 className="text-center">1458</h2>
                        <p className="text-center" >New car in stock</p>
                    </div>
                </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12" >
                <div className="row" >
                    <div className="col-md-6 col-sm-6" >
                        <img className="img-fluid rounded mx-auto d-block" src="/assets/img/cars/icon-04.jpg" alt="car1" />
                    </div>
                    <div className="col-md-6 col-sm-6 car-heading" >
                        <h2 className="text-center" >60+</h2>
                        <p className="text-center" >New car in stock</p>
                    </div>
                </div>
            </div>
        </div>
       </div>


        <div className="main-badge" >
            <div className="aboutBadge" >
                <div className="badgeimg" ><img src="/assets/img/call.png" alt="logo" /></div>
            </div> 
        </div>
        
    </section>
    )
}

export default AboutSection;