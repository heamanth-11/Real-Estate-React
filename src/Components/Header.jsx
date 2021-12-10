import React from "react";
import "../Css/header.css";
function Header()
{ return(
<div className="header">
<nav className="navbar navbar-expand-lg navbar-light" id="navbar">
  <div className="container-fluid col-md-10">
<a className="navbar-brand " id="logo" href="/">The <span id="id2">More</span></a>


<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="" role="button" ><i className="fas fa-bars burger" aria-hidden="true" ></i></span>
      </button>





<div className="collapse navbar-collapse " id="navbarNav">
  <ul className="navbar-nav ml-auto dark ">
    <li className="nav-item ">
      <a className="nav-link" href="/">Home</a>
    </li>
    <li className="nav-item">
      <a className="nav-link" href="/">Listing</a>
    </li>
    <li className="nav-item">
      <a className="nav-link" href="/">Features</a>
    </li>
    <li className="nav-item">
        <a className="nav-link" href="/">Pages</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/">Signup</a>
        
      </li> 
  </ul>
</div>
</div>
</nav>
</div>
);
}
export default Header;














