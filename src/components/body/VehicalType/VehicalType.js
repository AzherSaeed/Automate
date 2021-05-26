import React from 'react'
import './VehicalType.css'
const Vehicaltype = () => {
    return (
        <div>
             <section className="VehicalTypeSection" >
           
           <div className="row" style={{margin : 0}} >
               <div className=" col-lg-6 col-md-6 col-sm-12 main-row" >
                   <div className="vehical-cars" >
                       <div data-aos="fade-up"  className="cars" >
                           <img className="img-fluid"  src="/assets/img/cars/Group 10955.png" alt="car1"/>
                           <img className="img-fluid"  src="/assets/img/cars/Group 10955.png" alt="car1"/>
                           <img className="img-fluid"  src="/assets/img/cars/Group 10955.png" alt="car1"/>
                           <img className="img-fluid"  src="/assets/img/cars/Group 10955.png" alt="car1"/>
                           <img className="img-fluid"  src="/assets/img/cars/Group 10955.png" alt="car1"/>
                           <img className="img-fluid"  src="/assets/img/cars/Group 10955.png" alt="car1"/>
                           <img className="img-fluid"  src="/assets/img/cars/Group 10955.png" alt="car1"/>
                           <img className="img-fluid"  src="/assets/img/cars/Group 10955.png" alt="car1"/>
                           <img className="img-fluid"  src="/assets/img/cars/Group 10955.png" alt="car1"/>
                       </div>
                   </div>
               </div>
               <div className="col-lg-6 col-md-6 col-sm-12 centerdiv"  align="center">
                  <div data-aos="fade-down"  className="carstext">
                  <h3>Automate your thought</h3>
                   <h1>Types of Vehicles</h1>
                   <p>That we are currently dealing and are available for dealing </p>
                   <div className="logo-part" >
                       <img className="img-fluid"  src="../assets/img/png/icons.png" alt="icons"  />
                  </div>
                        </div>
                        
                    </div>
                </div>
            </section>
            <div data-aos="fade-up"  className="main-combineCars" >
                <div   className="sub-combineCars" style={{marginTop : '5%' , width : '60%'}} >
                    <img className="img-fluid" src="../assets/img/SVG/Kia-Car-PNG-HD.svg" alt="combineCar.png" />
                </div>
            </div>
        </div>
           
           
    )
}

export default Vehicaltype
