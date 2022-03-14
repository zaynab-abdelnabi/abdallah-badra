import React, { Component } from "react";
import {
  FaPhoneAlt,
  FaRegEnvelope,
  FaWhatsapp,
  FaLinkedin,
  FaGithub,
  FaMapMarkerAlt,
} from "react-icons/fa";
import emailjs from "@emailjs/browser";
import { BsFacebook, BsGithub } from "react-icons/bs";
import "../css/contact.css";

class Contact extends Component {
  sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_a7e8q4j",
        "template_c00t97d",
        e.target,
        "user_mt5KiN05YOtBGhemev0Gj"
      )
      .then(
        (result) => {
          alert('Message Sent');
          console.log(result.text);
        },
        (error) => {
          alert('Error sending your message!');
          console.log(error.text);
        }
      );
  };

  render() {
    return (
      <div className="section contact-main ">
        <div className="title">
          <h1>Contact Me!</h1>
          <h2>
            Want a website for your brand and business? <br /> I design what you
            desire....
          </h2>
        </div>
        <div className="contact">
          <div className="contact-section">
            <form className="form-section" onSubmit={this.sendEmail}>
              <input
                className="input-name"
                type="text"
                name="from_name"
                required
                placeholder="ENTER YOUR NAME*"
              />

              <input
                className="input-email"
                type="email"
                name="email"
                required
                placeholder="ENTER YOUR EMAIL*"
              />

              <input
                className="input-number"
                type="tel"
                name="phone"
                required
                placeholder="PHONE NUMBER*"
              />
              <textarea
                id="text-are"
                name="message"
                placeholder="YOUR MESSAGE*"
                rows="5"
                cols="50"
              ></textarea>
              <button className="submit-btn">Submit</button>
            </form>
          </div>
          <div className="links">
            <div className="contact-links">
              <div className="contact-form">
                <div className="contact-item">
                  <a href="#">
                    <FaPhoneAlt className="contact-phone" fontSize={40} />
                  </a>
                  <a href="#">
                    <h3>+961 80 000 000</h3>
                  </a>
                </div>
                <div class="contact-item">
                  <a href="#">
                    <FaRegEnvelope className="contact-message" fontSize={40} />
                  </a>
                  <a href="#">
                    <h3>abdallah.badra@gmail.com</h3>
                  </a>
                </div>
                <div class="contact-item">
                  <a href="#">
                    <FaMapMarkerAlt
                      className="contact-location"
                      fontSize={40}
                    />
                  </a>
                  <a href="#">
                    <h3>Tripoli, Lebanon</h3>
                  </a>
                </div>
              </div>
              <hr />
              <div class="contact-icon-logo">
                <a href="#">
                  <FaWhatsapp className="whatsapp-icon" />
                </a>

                <a href="#">
                  <BsFacebook className="facebook-icon" />
                </a>

                <a href="#">
                  <BsGithub className="github-icon" />
                </a>

                <a href="#">
                  <FaLinkedin className="linkedin-icon" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
