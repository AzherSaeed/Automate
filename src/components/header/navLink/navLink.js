import React  from 'react';

import './navLink.css';


  const NavAnchor = () => {
        return (
            <div className="toolbar" >
                 <nav className="navbar navbar-expand-sm navbar-dark bg-transparent " >
                    <div>
                    <ul className="navbar-nav ">
                     <li className="nav-item">
                        <a href="home" className="nav-link active ">Home</a>
                     </li>
                     <li className="nav-item">
                        <a href="home" className="nav-link">Vehicles</a>
                     </li>
                     <li className="nav-item">
                     <a href="home" className="nav-link">Blogs</a>
                 
                     </li>
                     <li className="nav-item">
                     <a href="home" className="nav-link">Pages</a>
                     </li>
                   </ul>
                    </div>
                 </nav>
            </div>
            
          )
        }
        
  export default NavAnchor;