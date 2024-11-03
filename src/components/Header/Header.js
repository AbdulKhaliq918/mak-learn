import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { useAuthContext } from "contexts/AuthContext";
import { Menu, Dropdown, Input, Button } from "antd";
import { DownOutlined, SearchOutlined, UserOutlined } from "@ant-design/icons"; // Add UserOutlined here

export default function Header() {
  const { isAuthenticated } = useAuthContext();
  const nav = useRef(null);

  const toggleMenu = () => {
    nav.current.classList.toggle("active");
  };

 
  

  return (
    <header className="header">
      <div className="logo">
        <img
          src="https://e7.pngegg.com/pngimages/544/284/png-clipart-men-fixing-red-light-bulb-puzzle-illustration-implementation-problem-solving-business-collaboration-organization-innovation-company-people-thumbnail.png"
          alt="Logo"
        />
        <span>Mak Learning</span>
      </div>
      
      <div className="menu-toggle" onClick={toggleMenu}>
        <div></div>
        <div></div>
        <div></div>
      </div>
      
      <nav className="nav" ref={nav}>
        
        
        <Input
          placeholder="Search..."
          prefix={<SearchOutlined />}
          className="search-bar"
          style={{ marginRight: "10px", width: "200px" }}
        />

        {isAuthenticated ? (
          <>
            <Link to="/products">Products</Link>
            <Link to="/dashboard"><UserOutlined /> Account</Link>
          </>
        ) : (
          <>
            <Link to="/">Home</Link>
            <Link to="/auth/login">
              Login
            </Link>
          </>
        )}
      </nav>
    </header>
  );
}
