import React from "react";
import { Link } from "react-router-dom";
function Navbar(){

    
    return(
        
        <nav className="navbar navbar-expand-lg  navbar-light bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand text-light" to="/textform">Textform</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active text-light" aria-current="page" to="/">About</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active text-light" aria-current="page" to="/Alert">Calendar</Link>
              </li>
            
            </ul>
            <form className="d-flex">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
              <button className="btn btn-outline-success text-light" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>
    )
}

export default Navbar;