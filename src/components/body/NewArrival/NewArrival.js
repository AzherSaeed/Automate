import React from 'react'
import './NewArrival.css'
const NewArrival = () => {
    return (
       <section className=" container NewArrival" >
           <div className="ArrivalHeading" >
               <h3>New Arrival</h3>
               <span className="layerImg" ><img src="../assets/img/SVG/Layer 1.svg" alt="layer.png" /></span>
               <h1 data-aos="zoom-in-down">our new & fresh Stock</h1>
               <p   data-aos="zoom-in-down"
                    data-aos-easing="linear"
                    data-aos-duration="1500"
                > It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
           </div>
       </section>
    )
}

export default NewArrival
