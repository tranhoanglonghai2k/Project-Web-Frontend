import React from "react";
import "./Header.css";

function Header() {
  return (
    <div id="header">
      <ul id="nav" className="mgl-115  mgt-5">
        <li>
          <a href="#">
            <img
              src="https://jdictblog.s3.ap-southeast-1.amazonaws.com/wp-content/uploads/2020/05/18223843/cropped-logo-3.png"
              alt="logo"
              className="logo-dict"
            ></img>
          </a>
        </li>
        <li className="active">
          <a href="#">Dịch</a>
        </li>
      </ul>
      <div className="nav2 mgr-115 mgtb-20">
        <button className="btn login mgr-5 active">Login</button>
        <button className="btn sign-up active">Sign up</button>
      </div>
    </div>
  );
}

export default Header;
