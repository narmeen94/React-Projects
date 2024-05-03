import React from "react";
import propTypes from "prop-types";

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
          <a className="navbar-brand" href="/">
            {props.title}
          </a>
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
                <a className="nav-link active" aria-current="page" href="/">
                  {props.tab1}
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Link
                </a>
              </li>
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
                    <a className="dropdown-item" href="/">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/">
                      Another action
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="/">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
            
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
