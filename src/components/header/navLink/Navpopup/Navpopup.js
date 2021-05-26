import React from 'react'
import './Navpopup.css'
const Navpopup = () => {
    return (
        <div className="NavPopUP" >
            <nav className="popupnavi" >
                <ul className="nav flex-column  ">
                    <li className="nav-item">
                    <a className="nav-link" href="#a">Home</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#a">Vehicles</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#a">Pages</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#a">Blogs</a>
                    </li>
                    <div class="container h-100">
                    <div class="d-flex justify-content-center h-100">
                        <div class="searchbar">
                        <input class="search_input" type="text" name="" placeholder="Search..."/>
                        <a href="#a" class="search_icon"><i class="fas fa-search"></i></a>
                        </div>
                    </div>
                    </div>
                </ul>
            </nav>
        </div>
    )
}

export default Navpopup;
