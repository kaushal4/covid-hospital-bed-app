import React,{ useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFistRaised,faVirus } from '@fortawesome/free-solid-svg-icons'


const Homepage = ()=>{
    const [animationStyle,setAnimationStyle] = useState({"fist":{},"virus":{}});
    const playAnimation = ()=>{
        console.log("here");
        setAnimationStyle({"fist":{"top":"50%"},"virus":{"top":"25%","left":"65%"}});
    }
    const reverseAnimation = ()=>{
        setAnimationStyle({"fist":{},"virus":{}});
    }

    return(
        <div className="home">
            <div className="col-1">
                <div className="first-svg" onMouseEnter={playAnimation} onMouseLeave={reverseAnimation} >
                    <FontAwesomeIcon icon={faFistRaised} id="fist_svg" style={animationStyle.fist}/>
                    <FontAwesomeIcon icon={faVirus} id="virus_svg" style={animationStyle.virus}/>
                </div>
                <div className="about">
                    <h3>Dont <span style={{"color":"rgb(190, 80, 52)"}}>Panic!</span> </h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum modi distinctio nisi porro earum, eaque saepe eum ad iure quam enim illum neque. Sit iure, consectetur qui veniam magnam illum.</p>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur obcaecati ea architecto dolor iure molestiae fugit laboriosam rem enim sapiente repellat hic quisquam minus deleniti, voluptates asperiores autem illum possimus?</p>
                </div>  
            </div>
            <div className="col-2">
                <div className="findBeds">
                    <h3>We help you find beds</h3>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit deserunt, harum quam aliquid ullam, nisi eaque, in quisquam qui assumenda eos? Laborum exercitationem assumenda quo sint sed officia possimus laudantium.</p>
                </div>
                <div className="second-svg">
                    <svg width="336" height="256" viewBox="0 0 336 256" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="336" height="256" fill="#E5E5E5"/>
<g id="Frame 1">
<rect width="336" height="256" fill="white"/>
<g id="hospital-svgrepo-com 1" clip-path="url(#clip0)">
<g id="Group">
<g id="Group_2">
<g id="Group_3">
<path id="target_cross" d="M157.706 149.12H181.948V132.958H198.11V108.715H181.948V92.554H157.706V108.716H141.544V132.958H157.706V149.12V149.12ZM149.625 124.877V116.796H165.787V100.635H173.868V116.797H190.029V124.877H173.867V141.039H165.786V124.877H149.625V124.877Z"/>
<path id="Vector" d="M105.18 157.2H76.897V165.281H105.18V157.2Z" fill="black"/>
<path id="Vector_2" d="M105.18 173.362H76.897V181.443H105.18V173.362Z" fill="black"/>
<path id="Vector_3" d="M105.18 189.523H76.897V197.604H105.18V189.523Z" fill="black"/>
<path id="Vector_4" d="M258.716 157.2H230.433V165.281H258.716V157.2Z" fill="black"/>
<path id="Vector_5" d="M258.716 173.362H230.433V181.443H258.716V173.362Z" fill="black"/>
<path id="Vector_6" d="M258.716 189.523H230.433V197.604H258.716V189.523Z" fill="black"/>
<path id="Vector_7" d="M274.877 217.807V141.039H222.352V52.15H242.554V44.069H222.352H113.261H93.059V52.15H113.261V141.039H60.736V217.807H53V225.888H60.736H113.261H121.342H145.584H190.028H214.27H222.351H274.876H282.957V217.807H274.877ZM113.261 217.806H68.817V149.119H113.261V217.806ZM181.948 217.806H153.665V185.483H181.948V217.806ZM214.271 141.039V217.807H190.029V217.806V177.402H145.584V217.806H121.342V141.039V52.15H214.271V141.039V141.039ZM266.796 217.806H222.352V149.119H266.796V217.806Z" fill="black"/>
</g>
</g>
</g>
</g>
</g>
<defs>
<clipPath id="clip0">
<rect width="229.957" height="229.957" fill="white" transform="translate(53 20)"/>
</clipPath>
</defs>
</svg>
                </div>
                <div className="findBedExtra">
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. At fuga accusamus quam delectus veritatis, alias, necessitatibus eaque provident earum laudantium non quos libero fugiat consequuntur ab, eveniet consectetur maxime dolorem.</p>
                </div>
            </div>
            
        </div>
    )
}

export default Homepage;