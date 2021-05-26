import React from 'react'
import './AppSection.css'
const AppSection = () => {
    return (
        <div className="appsection" >
           <div className="logo" >
               <img src="/assets/img/SVG/CBotHi_01.svg" alt="logo" />
           </div>
           <div className="text" >
               <h1>Get our app</h1>
               <p>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, </p>
           </div>
           <div className="appdesign" >
               <img src="/assets/img/png/playstore-btn.svg" alt="playstore" />
               <img src="/assets/img/png/apple-btn.svg" alt="playstore" />
           </div>
        </div>
    )
}

export default AppSection
