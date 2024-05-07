import React from "react";
import propTypes from "prop-types";
import { Link } from "react-router-dom";
//import About from "./About";



// props are properties of a components that are passed to it so it can render it. In our case, the propsa are
//passed from App.js to this Navbar

export default function Navbar(props) {
  return (
    <div>
      <nav
        className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
      >
        {/* <nav class="navbar bg-dark border-bottom border-body" data-bs-theme="dark"> */}

        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            {props.title}
          </Link>
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
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link " aria-current="page" to="/about">
                  {props.tab1}
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">
                  Contact
                </Link>
              </li>
              {/* <li className="nav-item">
              <Link to="/About">About me</Link>
              </li> */}
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="/"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Dropdown
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item" to="/">
                      Action
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/">
                      Another action
                    </Link>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/">
                      Something else here
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
            <div className='d-flex'>
              <div className='bg-primary rounded mx-2' onClick={()=>{props.toggleColor('primary')}}style={{height: '20px',width: '20px',cursor:'pointer'}}>  </div>
              <div className='bg-warning rounded mx-2' onClick={()=>{props.toggleColor('warning')}} style={{height: '20px',width: '20px',cursor:'pointer'}}>  </div>
              <div className='bg-success rounded mx-2' onClick={()=>{props.toggleColor('success')}} style={{height: '20px',width: '20px',cursor:'pointer'}}>  </div>
              <div className='bg-dark rounded mx-2' onClick={()=>{props.toggleColor('dark')}} style={{height: '20px',width: '20px',cursor:'pointer'}}>  </div>
              <div className='bg-danger rounded mx-2' onClick={()=>{props.toggleColor('danger')}} style={{height: '20px',width: '20px',cursor:'pointer'}}>  </div>

            </div>
            
            {/* below, in line 85 we have given "text-light" which is used to whiten any text in bootstrap. */}
            <div
              className={`form-check form-switch  mx-5 text-${
                props.mode === "light" ? "dark" : "light"
              }`}
            >
              <input
                className="form-check-input"
                type="checkbox"
                onClick={props.toggleStyle}
                role="switch"
                id="flexSwitchCheckDefault"
              />
              <label
                className="form-check-label"
                htmlFor="flexSwitchCheckDefault"
              >
                
                {props.modeText}
              </label>
              
            </div>
            <div
              className="form-check form-switch text-dark"
              
             >
              <input
                className="form-check-input"
                
                type="checkbox"
                onClick={props.pinkStyle}
                style={{backgroundColor:'#eaa0a2', color:'#eaa0a2'}}
                role="switch"
                id="flexSwitchCheckDefault"
              />
              <label
                className="form-check-label"
                htmlFor="flexSwitchCheckDefault"
              >
               {/* writes "pink" */}
                {props.pinkText}
              </label>
              
            </div>
          </div>
        </div>
      </nav>
      
    </div>
  );
}

//proptypes make sure you donot mess up with the proptypes. you can by mistake send a number or object instead of string here
//so it will show error. we can also write propTypes.string.isRequired to make dead sure you pass something.

Navbar.propTypes = {
  title: propTypes.string,
  tab1: propTypes.string,
};

// default props make sure if you do not pass anything in the props, it gives them a defaut value.
Navbar.defaultProps = {
  title: "title here",
  tab1: "tab1 here",
};
