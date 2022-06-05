import React from "react";
import Typical from 'react-typical'
import './Profile.css'

import Button from 'react-bootstrap/Button';
// import 'bootstrap/dist/css/bootstrap.min.css';
function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
              <div className="colz-icon">
            <a href="https://www.instagram.com/?hl=en">
              <i class="bi bi-instagram"></i>
            </a>
            <a href="https://www.linkedin.com/feed/">
              <i class="bi bi-linkedin"></i>
            </a>
            <a href="#">
              <i className="fa fa-instagram-square"></i>
            </a>
            <a href="#">
              <i className="fa fa-youtube-square"></i>
            </a>
            <a href="#">
              <i className="fa fa-twitter"></i>
            </a>
              </div>
          </div>
          <div className="profile-detailed-name">
              <span className="primary-text">
                  {" "}
                  Hello, I'M <span className="highlighted-text">Ithyaz</span>
              </span>
          </div>
        <div className="profile-details-role">
            <span className="primary-text">
                {""}
                <h1>
                 <Typical
                 loop={Infinity}
                 steps={[
                    "Accountant Executive"
                      ,
                      1000,
                      "Digital Marketer "
                      ,
                      1000,             
                 ]}
                 />
                </h1>
                <span className="profile-role-tagline">
                Improve our brand visibility with the power of social media.
                </span>
            </span>
        </div>
        <div className="Profile-options">
            <Button className="btn-primary-btn">
                {" "}
                Hire Me{""}
            </Button>
            <a href="Subbulakshmi.pdf" download='Subbulakshmi Subbulakshmi.pdf'>
            <Button className='btn highlighted-btn'>Get Resume</Button>
            </a>
        </div>
      </div>
      <div className="profile-picture">
          <div className="profile-picture-background">

          </div>
      </div>
      </div>
    </div>
  );
}

export default Profile;
