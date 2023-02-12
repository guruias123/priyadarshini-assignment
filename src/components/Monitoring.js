import React from "react";
import "./Monitoring.scss";
import mask from "./images/mask.png";
import laptopscreen from './images/laptopscreen.png'

const Monitoring = () => {
  return (
    <div className="monitor-container">
      <img className="back-img" src={mask} />
      <div className="m-c-left">
        <h3>
          Condition based Monitoring that <span>works</span>
        </h3>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="90.011"
          height="22.831"
          viewBox="0 0 90.011 22.831"
        >
          <g
            id="Group_245"
            data-name="Group 245"
            transform="translate(-526.739 -1293.625)"
          >
            <path
              id="Path_323"
              data-name="Path 323"
              d="M-.087,7.031s10.773-16.021,20.774-.4,21.8-.421,21.8-.421"
              transform="matrix(0.999, -0.035, 0.035, 0.999, 528.998, 1300.315)"
              fill="none"
              stroke="#e64054"
              stroke-width="5"
            />
            <path
              id="Path_324"
              data-name="Path 324"
              d="M-.087,7.031s10.773-16.021,20.774-.4,22.006-.425,22.006-.425"
              transform="matrix(0.999, -0.035, 0.035, 0.999, 571.521, 1298.009)"
              fill="none"
              stroke="#e64054"
              stroke-width="5"
            />
          </g>
        </svg>

        <p>Intellithink combines the potential of vibration and current signature analysis with AI to detect fault conditions and the extent of these faults in rotating equipment.</p>
        <p>Our robust Machine Learning algorithms aid in mitigating potential motor failure anywhere from weeks to months ahead of more standard vibration-based solutions. Our techniques are capable of predicting the most commonly occurring fault conditions in 3-phase induction motors and rotating equipment.</p>
        <button>Request a demo</button>
      </div>

      <div className="m-c-right">
        <img src={laptopscreen} />
        {/* <div></div> */}
      </div>
    </div>
  );
};

export default Monitoring;
