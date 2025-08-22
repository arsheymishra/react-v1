import { LOGO_URL } from "../utils/constants";
import { useState } from 'react';
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

export default function Header() {

  const [isLoggedIn, setIsLoggedIn] = useState("Login");
  const onlineStatus = useOnlineStatus();


  return (
    <div className='header'>
      <div className='logo'>
        <img src={LOGO_URL} alt="" />
      </div>
      <div className='links'>
        <ul className='nav-links'>
          <li>{onlineStatus ? "Online" : "Offline"}</li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact Us</Link></li>
          <li>Cart</li>
          <button className="login-btn" onClick={()=>{
            isLoggedIn === "Login" ? setIsLoggedIn("Logout") : setIsLoggedIn("Login");
          }}>{isLoggedIn}</button>
        </ul>
      </div>
    </div>
  )
}