import React from 'react'
import {NavLink} from 'react-router-dom'

function Menu() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light ">
        <div className="container">
          <NavLink className="navbar-brand" to={"/"}>
            CURD-Ope-MYSQL
          </NavLink>
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
          <div className="collapse navbar-collapse " id="navbarSupportedContent">
         
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
              
              <li className="nav-item">
                <NavLink className="nav-link" to={"Home"}>
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link active"
                  aria-current="page"
                  to={"/Create"}
                >
                  Create
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to={"DetailUser"}>
                  DetailUser
                </NavLink>
              </li>
              {/* <li className="nav-item">
                <NavLink className="nav-link" to={"Profile"}>
                  Profile
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to={"Service"}>Service</NavLink>
              </li> */}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}
//Bootstrap NavBar 
export default Menu