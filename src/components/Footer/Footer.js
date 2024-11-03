import React from "react";
import {
  MailOutlined,
  PhoneOutlined,
  FacebookOutlined,
  TwitterOutlined,
  InstagramOutlined,
  LinkedinOutlined,
} from "@ant-design/icons";

export default function Footer() {
  return (
    <footer className="footer mt-5">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-3 d-flex align-items-center">
            
            <img
            src="https://e7.pngegg.com/pngimages/544/284/png-clipart-men-fixing-red-light-bulb-puzzle-illustration-implementation-problem-solving-business-collaboration-organization-innovation-company-people-thumbnail.png"
            alt="Logo" className="footer-logo"
          />
          </div>
          <div className="col-md-9">
            <div className="row">
              <div className="col-md-4 mb-4">
                <h5>About Us</h5>
                <p>
                <b>MAK Learning</b> is a collaborative study platform built to connect students and simplify learning. We offer tools for shared notes, live study sessions, and easy resource sharing to make group study productive and accessible. Join us to learn, share, and succeed together. <br />  <b>Happy Studying!</b>
                </p>
              </div>
              <div className="col-md-4 mb-4">
                <h5>Quick Links</h5>
                <ul className="list-unstyled">
                  <li><a href="/">Home</a></li>
                  <li><a href="/">Subjects</a></li>
                  <li><a href="/">About Us</a></li>
                  <li><a href="/">Contact Us</a></li>
                </ul>
              </div>
              <div className="col-md-4 mb-4">
                <h5>Contact Information</h5>
                <p><PhoneOutlined /> +92 304 6667911</p>
                <p><MailOutlined /> abdulkhaliq00918@gmail.com</p>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12 text-center">
                <a href="/" className="social-icon"><FacebookOutlined /></a>
                <a href="/" className="social-icon"><TwitterOutlined /></a>
                <a href="/" className="social-icon"><InstagramOutlined /></a>
                <a href="/" className="social-icon"><LinkedinOutlined /></a>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12 text-center mt-3">
                <p>
                  &copy; {new Date().getFullYear()} Made by{" "}
                   <b><a className="text-success" href="#">Mak Dev. </a></b> 
                   All rights reserved.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
