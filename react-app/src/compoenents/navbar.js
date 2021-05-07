import React,{useState} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHospitalUser } from '@fortawesome/free-solid-svg-icons'

const Navbar = ()=>{


    return(
        <nav className="navbar">
            <FontAwesomeIcon icon={faHospitalUser} size="2x" color="#cfb44a"/>
            <a href="#home">HOME</a>
            <a href="#locationStatus">SEARCH BEDS</a>
            <a href="#covid_symptom_test">SYMPTOM TEST</a>
            <div className="translator">
                <div id="google_translate_element"></div>
            </div>
        </nav>
    )
}

export default Navbar;