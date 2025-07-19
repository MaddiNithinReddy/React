import React from "react";
import { Link } from "react-router-dom";

const Profile = () => {
  return (
    <div className="profile-container">
      <div className="container m-5">
        <h1 style={{height:"200px", fontSize:"50px", fontWeight:"bold", fontFamily:"sans-serif"}}><img style={{height:"90px", width:"90px", marginRight:"20px"}} src="./userlogo.png"/>WELCOME, USER</h1>
      </div>
      <div className="profile-grid ms-5">
        <Link to="/account" className="profile-box text-dark d-flex flex-column"><img style={{height:"80px", width:"80px", marginBottom:"5px"}} src="./user.png"/>Account</Link>
        <Link to="/myrides" className="profile-box text-dark d-flex flex-column"><img style={{height:"90px", width:"90px"}} src="./delivery-truck.png"/>My Rides</Link>
        <Link to="/help" className="profile-box text-dark d-flex flex-column"><img style={{height:"80px", width:"80px", marginBottom:"5px"}} src="./support.png"/>Help</Link>
        <Link to="/settings" className="profile-box text-dark d-flex flex-column"><img style={{height:"80px", width:"80px",marginBottom:"5px"}} src="./settings.png"/>Settings</Link>
        <Link to="/login" className="profile-box text-danger d-flex flex-column"><img style={{height:"80px", width:"80px",marginBottom:"5px"}} src="./logout.png"/>Log Out</Link>
      </div>
    </div>
  );
};

export default Profile;
