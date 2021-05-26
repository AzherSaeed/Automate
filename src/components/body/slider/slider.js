import React from 'react';
import Coverflow from 'react-coverflow';
import './slider.css'
const Slider = () => {
  return (
    <div data-aos="fade-up" > 
      <Coverflow width="960" height="500"
    displayQuantityOfSide={2}
    navigation={false}
    enableScroll={false}
    clickable={true}
    active={0}
    
  >
    <div
    
      role="menuitem"
      tabIndex="0"
    >
      <img src='../assets/img/png/slider1.jpeg' alt="slider"
        style={{
          display: 'block',
          width: '100%',
         
        }}
      />
    </div>
    <img src='../assets/img/png/slider2.jpg' alt="slider" />
    <img src='../assets/img/png/slider2.jpg' alt="slider" />
    <img src='../assets/img/png/slider2.jpg' alt="slider" />
    <img src='../assets/img/png/slider2.jpg' alt="slider" />
    <img src='../assets/img/png/slider2.jpg' alt="slider" />
    <img src='../assets/img/png/slider2.jpg' alt="slider" />
    <img src='../assets/img/png/slider2.jpg' alt="slider" />
    <img src='../assets/img/png/slider2.jpg' alt="slider" />
    <img src='../assets/img/png/slider2.jpg' alt="slider" />
    <img src='../assets/img/png/slider2.jpg' alt="slider" />
    <img src='../assets/img/png/slider2.jpg' alt="slider" />
    <img src='../assets/img/png/slider2.jpg' alt="slider" />
    <img src='../assets/img/png/slider2.jpg' alt="slider" />
    
  </Coverflow>
    </div>
  )
}

export default Slider;