import React, { useContext } from "react";
import NavBar from "./NavBar";
import FooterSection from "./FooterSection";
import { UserContext } from "../UserContext";
import "../styles/ProfileScreen.css";
function ProfileScreen() {
  const { name } = useContext(UserContext);
  return (
    <div>
      <NavBar />
      <div className="profile_section">
        <div className="image_section">
          <div className="person_image"></div>
          <div className="welcome_msg">
            <p>Welcome, {name} to Grab!</p>
          </div>
          <div className="content">
            <button className="edit_btn">Edit Profile</button>
            <span className="wallet">
              Wallet: <span className="price">PKR 0</span>
            </span>
          </div>
        </div>
        <div className="stats">
          <div className="stats_content">
            <span className="stats_heading">Total Rides: </span>
            <span className="stats_value">0</span>
          </div>
        </div>
      </div>
      <FooterSection />
    </div>
  );
}

export default ProfileScreen;
