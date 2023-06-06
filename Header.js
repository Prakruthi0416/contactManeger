import React from "react";
import'./Navbar.css'
import { Link } from "react-router-dom";
import AddContact from "./AddContact";

const Header = () => {
  return (
    <div className="ui fixed menu">
      {/* <div className="ui container center"> */}
      <div className='container-fluid'>
        <h2 >Contact Manager</h2>
      </div>
      <div className="row" >
<div className="col-sm-3" id="sidenav">           
        <ul class="nav flex-column">
  <li class="nav-item">
  <Link to='/create'>  <h3>Contacts</h3></Link>
  </li>
  
  <br/>
  <li class="nav-item">
   <Link to='/charts'> <h5>Charts<br/>and
        <br/>Maps</h5></Link>
  </li>
  

</ul>
</div>
<div className="col-sm-9">
  <AddContact/>
</div>
</div>
    </div>
  );
};

export default Header;
