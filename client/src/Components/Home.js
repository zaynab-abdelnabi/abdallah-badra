import React, { Component } from "react";
import email from "../img/email.svg";
import github from "../img/github.svg";
import linkedin from "../img/linkedIn.svg";
import whatsapp from "../img/whatsapp.svg";
import facebook from "../img/facebook.svg";
import { FaEnvelope } from "react-icons/fa";
import "../css/Home.css";
import axios from "axios";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      info: {},
    };
  }

  componentDidMount() {
    this.getInfo();
  }

  getInfo = () => {
    axios
      .get("/info")
      .then((res) => {
        this.setState({
          info: res.data.response[0],
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  render() {
    return (
      <div className="section" id="home">
        <div className="main-text">
          <div className="main-text-name">
            <span>
              <h1>
                Hi, <span>I am {this.state.info.name}</span> {this.state.info.headline} based in Tripoli.
              </h1>
            </span>
          </div>
          <div className="main-text-description">
           I help businesses and companies reach their goals by designing user-centric digital products & interactive experiences.          
          </div>
          <a
            className="main-text-email"
            href="mailto:abdallah_badra@hotmail.com"
            style={{ textDecoration: "none" }}
          >
            <FaEnvelope />
            abdallah_badra@hotmail.com
          </a>
          <div className="main-text-icons">
            <span className="main-text-icons-email">
              <a href="mailto:abdallah_badra@hotmail.com">
                <img src={email} alt="email" />
              </a>
            </span>
            <span className="main-text-icons-github">
              <img src={github} alt="github" />
            </span>
            <span className="main-text-icons-linkedin">
              <a
                href="https://www.linkedin.com/in/abdallah-badra/?originalSubdomain=lb"
                target={"_blank"}
              >
                <img src={linkedin} alt="linkedin" />
              </a>
            </span>
            <span className="main-text-icons-whatsapp">
              <a href="https://wa.me/96176569525" target={"_blank"}>
                <img src={whatsapp} alt="whatsapp" />
              </a>
            </span>
            <span className="main-text-icons-facebook">
              <a
                href="https://www.facebook.com/abdallah.badra.1/"
                target={"_blank"}
              >
                <img src={facebook} alt="facebook" />
              </a>
            </span>
          </div>
        </div>
        <div className="main-image">
          <img src={"/uploads/"+this.state.info.image} alt="profile image" />
        </div>
      </div>
    );
  }
}

export default Home;
