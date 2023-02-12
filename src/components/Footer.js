import React from "react";
import footer from "./images/footer.png";
import mask from "./images/mask.png";
import logo from "./images/logo-4@2x.png";
import "./Footer.scss";

const Footer = () => {
  return (
    <div>
      <div className="footer-container">
        <img src={footer} />

        <div className="card">
          <img src={mask} />
          <div className="card-details">
            <h3>
              Ready to see <span>Intellithink</span> in action?
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
            <p>Book a 30-minute demo at your convenience.</p>
            <button>Request a demo</button>
          </div>
        </div>
      </div>

      <div className="footer">
        <div className="footer-1">
          {/* <div className='footer-logo'> */}
          <img src={logo} />
          {/* </div> */}

          <div className="footer-subitems">
            <h3>Products</h3>
            <p>IntelliVibe</p>
            <p>IntelliAmp</p>
          </div>

          <div className="footer-subitems">
            <h3>Industries</h3>
            <p>Cement</p>
            <p>Steel</p>
            <p>Power Generation</p>
            <p>Oil & Gas</p>
            <p>Food</p>
          </div>

          <div className="footer-subitems">
            <h3>Resources</h3>
            <p>Blogs</p>
            <p>Case Studies</p>
          </div>

          <div className="footer-subitems">
            <h3>Company</h3>
            <p>About Us</p>
            <p>Careers</p>
          </div>

          <div className="footer-subitems">
            <h3>Connect</h3>
            <p>info@intellithink</p>

            <div className="social-media-links">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20.844"
                height="14.656"
                viewBox="0 0 20.844 14.656"
              >
                <path
                  id="Icon_awesome-youtube"
                  data-name="Icon awesome-youtube"
                  d="M21.458,6.793a2.619,2.619,0,0,0-1.843-1.855C17.99,4.5,11.472,4.5,11.472,4.5s-6.518,0-8.143.438A2.619,2.619,0,0,0,1.486,6.793a27.474,27.474,0,0,0-.436,5.05,27.474,27.474,0,0,0,.436,5.05,2.58,2.58,0,0,0,1.843,1.825c1.626.438,8.143.438,8.143.438s6.518,0,8.143-.438a2.58,2.58,0,0,0,1.843-1.825,27.474,27.474,0,0,0,.436-5.05,27.474,27.474,0,0,0-.436-5.05ZM9.34,14.942v-6.2l5.448,3.1-5.448,3.1Z"
                  transform="translate(-1.05 -4.5)"
                  fill="#da001a"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="10.516"
                height="19.634"
                viewBox="0 0 10.516 19.634"
              >
                <path
                  id="Icon_awesome-facebook-f"
                  data-name="Icon awesome-facebook-f"
                  d="M11.436,11.044l.545-3.553H8.572V5.185a1.777,1.777,0,0,1,2-1.92h1.55V.24A18.9,18.9,0,0,0,9.374,0C6.566,0,4.731,1.7,4.731,4.783V7.491H1.609v3.553H4.731v8.59H8.572v-8.59Z"
                  transform="translate(-1.609)"
                  fill="#277dff"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="19.207"
                height="18.379"
                viewBox="0 0 19.207 18.379"
              >
                <g
                  id="Group_239"
                  data-name="Group 239"
                  transform="translate(0.5 0.5)"
                >
                  <path
                    id="Path"
                    d="M0,0H3.9V11.726H0Z"
                    transform="translate(0.231 5.652)"
                    fill="#009ac2"
                    stroke="rgba(0,0,0,0)"
                    stroke-width="1"
                  />
                  <path
                    id="Path-2"
                    data-name="Path"
                    d="M4.39,2.025A2.027,2.027,0,0,0,2.208,0a2.032,2.032,0,1,0-.051,4.052h.025A2.035,2.035,0,0,0,4.39,2.025Z"
                    transform="translate(0 0)"
                    fill="#009ac2"
                    stroke="rgba(0,0,0,0)"
                    stroke-width="1"
                  />
                  <path
                    id="Path-3"
                    data-name="Path"
                    d="M7.42,0c2.568,0,4.493,1.676,4.493,5.278V12h-3.9V5.728c0-1.576-.565-2.651-1.978-2.651a2.136,2.136,0,0,0-2,1.425,2.663,2.663,0,0,0-.129.951V12H0S.051,1.376,0,.276H3.9V1.936A3.876,3.876,0,0,1,7.42,0Z"
                    transform="translate(6.294 5.378)"
                    fill="#009ac2"
                    stroke="rgba(0,0,0,0)"
                    stroke-width="1"
                  />
                </g>
              </svg>
            </div>
          </div>
        </div>

        <div className="footer-2">
        Copyright © 2022 Intellithink. All rights reserved.
        </div>
      </div>
    </div>
  );
};

export default Footer;
