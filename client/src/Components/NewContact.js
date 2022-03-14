import React, { Component } from "react";
import {
  FaPhoneAlt,
  FaRegEnvelope,
  FaWhatsapp,
  FaLinkedin,
  FaGithub,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { BsFacebook, BsGithub } from "react-icons/bs";
import "../css/contact.css";
import Contact from "./Contact";
import { Sidebar } from ".";

class NewContact extends Component {
  render() {
    return (
      <div>
        <div className="bg-image"></div>
        <div className="bg-opacity"></div>
        <div>
          <Sidebar />
          <div className="new-main">
            <Contact/>
          </div>
        </div>
      </div>
    );
  }
}

export default NewContact;
