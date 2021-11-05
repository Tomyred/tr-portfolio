import React, { Component } from "react";
import "./Contact.css";
import contact from "./../../assets/images/contact.png";
// import picture from './../../assets/images/tomi.jpg'

export default class Contact extends Component {
  render() {
    return (
      <div className="socialmediacontainer">
        <div className="contactHeader">
          <img id="contactLogo" src={contact} alt="aliencontact" />
          <h1>Contact</h1>
        </div>
        <div className="mediaLinks">
          <a
            href="https://www.linkedin.com/in/tomás-rojo-38743a214"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="https://img.icons8.com/fluency/48/000000/linkedin.png"
              alt="linkedin"
            />
          </a>
          <a href="https://github.com/Tomyred" target="_blank" rel="noreferrer">
            <img
              src="https://img.icons8.com/color/48/000000/github.png"
              alt="github"
            />
          </a>
          <a
            href="https://www.instagram.com/tomas.rojo.1/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="https://img.icons8.com/fluency/48/000000/instagram-new.png"
              alt="instagram"
            />
          </a>
        </div>
      </div>
    );
  }
}
