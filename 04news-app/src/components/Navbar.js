//by writing rcep, we can write react componenet with proptypes:

import React, { Component } from "react";
import { Link } from "react-router-dom";

export class Navbar extends Component {
    
  render() {
    let {toggleStyle,mode}=this.props;
    return (
      
        <nav  className="navbar sticky-top navbar-expand-lg bg-body-tertiary " data-bs-theme={mode}>
        {/* <nav className="navbar navbar-expand-lg bg-body-tertiary"> navbar bg-dark border-bottom border-body  */}
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">
              News Monkey
            </Link>
            <div>
            <img src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExcTFiMWNmdjd4dm5zNWQyaWE5NDltNXhmYXJxeWt1a21mdmtieG10MyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/Z9c492wR2G52lJWPMG/giphy.gif"alt="" style={{height : "40px",width:"40px"
        }}/>
        
        </div>
            <div className="ms-auto">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            </div>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link" aria-current="page" to="/">
                    Home
                  </Link>
                </li>
                

                <li className="nav-item">
                  <Link className="nav-link" to="/business">
                  Business
                  </Link>

                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/entertainment">
                  Entertainment
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/">
                  General
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/health">
                  Health
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/science">
                  Science
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/sports">
                  Sports
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/technology">
                  Technology
                  </Link>
                </li>
                                
                
              </ul>
              
                
            </div>
            
          </div>
          <div
              className={`form-check form-switch  mx-5 text-${
                mode === "light" ? "dark" : "light"
              }`}
            >
              <input
                className="form-check-input"
                type="checkbox"
                onClick={toggleStyle}
                role="switch"
                id="flexSwitchCheckDefault"
              />
              </div>
        </nav>
     
    );
  }
}

export default Navbar;
