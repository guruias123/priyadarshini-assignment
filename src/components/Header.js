import React from "react";
import backgroundVideo from "./images/1079171177-preview.mp4";
import logo from "./images/logo-4@2x.png";
import bitcoinlogo from "./images/bitcoin.png";
import infiyot from "./images/infiyot.png"
import amazon from './images/amazon.png'
import appolo from './images/appolo.png'
import tvs from './images/tvs.png'
import previous from "./svg/Path 338.svg";
import "./Header.scss";

const Header = () => {
  return (
    <div className="background">
      <div className="background-video">
        <video className="background__video" autoPlay muted loop>
          <source src={backgroundVideo} type="video/mp4" />
        </video>
      </div>
      <div className="header">
        <div className="header-nav">
          <div className="logo">
            <img src={logo} />
          </div>
          <div className="menu-options">
            <p>Home</p>
            <select>
              <option>Products</option>
            </select>
            <select>
              <option>Industries</option>
            </select>
            <select>
              <option>Resources</option>
            </select>
            <select>
              <option>Company</option>
            </select>
            <button>Contact Us</button>
          </div>
        </div>

        <div className="header-desc">
          <div className="header-bold-desc">
            Building the future of machine analytics
          </div>

          <div className="header-small-desc">
            8 out of 10 manufacturers say the elimination of unplanned downtime
            is a number one or high priority to them. Explore how Intellithink
            can bring the future of machine health analytics using sensors and
            Artificial Intelligence
          </div>

          <div className="header-button">
            <button>Request a demo</button>
          </div>
        </div>

        <div className="header-brands">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="12.662"
            height="21.083"
            viewBox="0 0 12.662 21.083"
          >
            <path
              id="Path_338"
              data-name="Path 338"
              d="M10068.387-13625.944l-8.42,8.421,8.42,8.42"
              transform="translate(-10057.846 13628.065)"
              fill="none"
              stroke="#cf0b23"
              stroke-linecap="round"
              stroke-width="3"
            />
          </svg>
          <img src={bitcoinlogo} />
          <img src={infiyot} />
          <img src={amazon} />
          <img src={appolo} />
          <img src={tvs} />
          <svg xmlns="http://www.w3.org/2000/svg" width="12.662" height="21.083" viewBox="0 0 12.662 21.083">
  <path id="Path_339" data-name="Path 339" d="M10059.967-13625.944l8.42,8.421-8.42,8.42" transform="translate(-10057.846 13628.065)" fill="none" stroke="#cf0b23" stroke-linecap="round" stroke-width="3"/>
</svg>
        </div>
      </div>
    </div>
  );
};

export default Header;
