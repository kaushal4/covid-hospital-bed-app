import React,{useState,useRef,useEffect} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHospitalUser,faBars } from '@fortawesome/free-solid-svg-icons'
import WindowResize from "./windowResize"

const Navbar = ()=>{
    const toggleNavRef = useRef(null);
    const [isNavToggled,setIsNavToggled] = useState(true);
    const [shouldNavAnimationPlay,setShouldNavAnimation] = useState(false);
    useEffect(()=>{
        setShouldNavAnimation(true);
    },[])
    const onClickNavHandler = ()=>{
        setShouldNavAnimation(true);
        setIsNavToggled(!isNavToggled);
    }
    const getClipPath = ()=>{
        const {width} = WindowResize();
        if(width<700 && isNavToggled && toggleNavRef.current){
            if(shouldNavAnimationPlay){
                setTimeout(()=>{setShouldNavAnimation(false)},500);       
                return {"clip-path":`circle(23px at ${toggleNavRef.current.offsetLeft - toggleNavRef.current.offsetWidth/2}px ${toggleNavRef.current.offsetTop + toggleNavRef.current.offsetHeight/2}px)`, "transition": `clip-path 0.5s ease`}
            }
            return {"clip-path":`circle(23px at ${toggleNavRef.current.offsetLeft - toggleNavRef.current.offsetWidth/2}px ${toggleNavRef.current.offsetTop + toggleNavRef.current.offsetHeight/2}px)`}

        }else if (toggleNavRef.current){
            return {"clip-path":`circle(300% at ${toggleNavRef.current.offsetLeft - toggleNavRef.current.offsetWidth/2}px ${toggleNavRef.current.offsetTop + toggleNavRef.current.offsetHeight/2}px)`, "transition": `clip-path 0.5s ease`};
        }else{
            return {"clip-path":`circle(4% at 90% 10%%)`}
        }
    }

    return(
        <nav className="navbar" style={{...getClipPath()}}>
            <div ref={toggleNavRef} className={`nav-toggler`} onClick={onClickNavHandler}>
                <FontAwesomeIcon  icon={faBars} size="2x" color="#cfb44a"/>
            </div>
            
            <FontAwesomeIcon icon={faHospitalUser} size="2x" color="#cfb44a" className="page-symbol"/>
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