import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFistRaised, faVirus } from "@fortawesome/free-solid-svg-icons";

const Homepage = () => {
  const [animationStyle, setAnimationStyle] = useState({ fist: {}, virus: {} });
  const playAnimation = () => {
    setAnimationStyle({
      fist: { top: "50%" },
      virus: { top: "25%", left: "65%" },
    });
  };
  const reverseAnimation = () => {
    setAnimationStyle({ fist: {}, virus: {} });
  };

  return (
    <div className="home-container" id="home">
      <div className="home">
        <div className="col-1">
          <div
            className="first-svg"
            onMouseEnter={playAnimation}
            onMouseLeave={reverseAnimation}
          >
            <FontAwesomeIcon
              icon={faFistRaised}
              id="fist_svg"
              style={animationStyle.fist}
            />
            <FontAwesomeIcon
              icon={faVirus}
              id="virus_svg"
              style={animationStyle.virus}
            />
          </div>
          <div className="about">
            <h3>
              Dont <span style={{ color: "rgb(190, 80, 52)" }}>Panic!</span>{" "}
            </h3>
            <p>
            Few things in the world are more powerful than a positive push. A smile. A world of optimism and hope. A ‘you can do it when things are tough
-Richard M.DeVos
            </p>
            <p>
            The symptoms data was gathered from various private, government sources, journals like journal of infection, National Center for Biotechnology Information etc. The dataset set was randomly split as test and training set and the model was trained using the training set while the test set was kept aside. The test set was used to calculate the accuracy and our model showed 96% accuracy.

            </p>
          </div>
        </div>
        <div className="col-2">
          <div className="findBeds">
            <h3>We help you find beds</h3>
            <p>
            All you need to do is enter the symptoms you are having that closely relate to the symptoms that are prevalent in many victims of the pandemic. Using the test results, we will suggest you to go to the hospital for a referral or not. The information about availability of beds and oxygen supply in your locality has been retrieved from the official website of Delhi Heath Department to give you accurate real-time updates. We are using an elegant approach to scrap this data!!
            </p>
          </div>
          <div className="second-svg">
            <svg
              width="336"
              height="256"
              viewBox="0 0 336 256"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="336" height="256" fill="#E5E5E5" />
              <g id="Frame 1">
                <rect width="336" height="256" fill="white" />
                <g id="hospital-svgrepo-com 1" clip-path="url(#clip0)">
                  <g id="Group">
                    <g id="Group_2">
                      <g id="Group_3">
                        <path
                          id="target_cross"
                          d="M157.706 149.12H181.948V132.958H198.11V108.715H181.948V92.554H157.706V108.716H141.544V132.958H157.706V149.12V149.12ZM149.625 124.877V116.796H165.787V100.635H173.868V116.797H190.029V124.877H173.867V141.039H165.786V124.877H149.625V124.877Z"
                        />
                        <path
                          id="Vector"
                          d="M105.18 157.2H76.897V165.281H105.18V157.2Z"
                          fill="black"
                        />
                        <path
                          id="Vector_2"
                          d="M105.18 173.362H76.897V181.443H105.18V173.362Z"
                          fill="black"
                        />
                        <path
                          id="Vector_3"
                          d="M105.18 189.523H76.897V197.604H105.18V189.523Z"
                          fill="black"
                        />
                        <path
                          id="Vector_4"
                          d="M258.716 157.2H230.433V165.281H258.716V157.2Z"
                          fill="black"
                        />
                        <path
                          id="Vector_5"
                          d="M258.716 173.362H230.433V181.443H258.716V173.362Z"
                          fill="black"
                        />
                        <path
                          id="Vector_6"
                          d="M258.716 189.523H230.433V197.604H258.716V189.523Z"
                          fill="black"
                        />
                        <path
                          id="Vector_7"
                          d="M274.877 217.807V141.039H222.352V52.15H242.554V44.069H222.352H113.261H93.059V52.15H113.261V141.039H60.736V217.807H53V225.888H60.736H113.261H121.342H145.584H190.028H214.27H222.351H274.876H282.957V217.807H274.877ZM113.261 217.806H68.817V149.119H113.261V217.806ZM181.948 217.806H153.665V185.483H181.948V217.806ZM214.271 141.039V217.807H190.029V217.806V177.402H145.584V217.806H121.342V141.039V52.15H214.271V141.039V141.039ZM266.796 217.806H222.352V149.119H266.796V217.806Z"
                          fill="black"
                        />
                      </g>
                    </g>
                  </g>
                </g>
              </g>
              <defs>
                <clipPath id="clip0">
                  <rect
                    width="229.957"
                    height="229.957"
                    fill="white"
                    transform="translate(53 20)"
                  />
                </clipPath>
              </defs>
            </svg>
          </div>
          <div className="findBedExtra">
            <p>
            Using this, we dynamically scrap the content from their site and help you by showing the details and also help you to locate the hospitals near you using Google Maps. We hope that this reduces the burden on healthcare workers 
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
