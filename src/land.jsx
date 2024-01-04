import React from "react";
import PropTypes from "prop-types";
//import { LightCardButton } from "./LightCardButton"; // Make sure this path is correct
//import { PolygonIcons } from "./PolygonIcons"; // Make sure this path is correct
import "./Land.css";

function Land({
    darkMode,
    className,
    frame = "frame-3679.svg",
    frameClassName,
    lightCardButtonButton = "button-5.svg",
    polygonIconsOverlapGroupClassName,
  }) {
  return (
    <div className="landing-page-light">
      <div className="desktop-wrapper">
        <img className="desktop" alt="Desktop" src="desktop.png" />
      </div>
      <div className="box">
        <div className="rectangle" />
      </div>
      <div className={`card dark-mode-${darkMode} ${className}`}>
        <div className="overlap">
          <img className="frame" alt="Frame" src={darkMode ? "image.svg" : frame} />
          {darkMode && (
            <>
              {/* ... (your dark mode content) */}
              <PolygonIcons
                className="polygon-icons-instance"
                divClassName="polygon-icons-2"
                overlapGroupClassName="instance-node"
                type="sparkers"
              />
            </>
          )}

          {!darkMode && (
            <>
              {/* ... (your light mode content) */}
              <div className="fav-tab">
                <PolygonIcons
                  className="polygon-icons-3"
                  divClassName="polygon-icons-4"
                  overlapGroupClassName={polygonIconsOverlapGroupClassName}
                  type="sparkers"
                />
              </div>
              <div className="overlap-wrapper">
                <div className="overlap-2">
                  <div className="line-4" />
                  <div className="line-5" />
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

Land.propTypes = {
    darkMode: PropTypes.bool,
    className: PropTypes.string,
    frame: PropTypes.string,
    frameClassName: PropTypes.string,
    lightCardButtonButton: PropTypes.string,
    polygonIconsOverlapGroupClassName: PropTypes.string,
  };
  
  export default Land;
