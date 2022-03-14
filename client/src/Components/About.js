import React, { Component } from "react";
import Sidebar from "./Sidebar";
import '../css/about.css';
import axios from 'axios';
class About extends Component {
  constructor(props){
    super(props);
    this.state = {
      info: {}
    }
  }
  componentDidMount(){
    this.getAllInfo();
  }
  getAllInfo(){
    axios.get("/info")
    .then((res)=>{
      this.setState({
        info : res.data.response[0]
      })
    })
    .catch((error)=>{
      console.log(error);
    });
  };
  render() {
    return (
      <div className="section section-about" id="about">
        <div class="about">
          <h1>To Know More About Me!</h1>
          <p>{this.state.info.about}</p>
        </div>
        <div class="about_images">
          <img
            id="js"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
            alt="js-logo"
          />
          <img
            id="java"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original-wordmark.svg"
            alt="java-logo"
          />
          <img
            id="git"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
            alt="git-logo"
          />
          <img
            id="php"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg"
            alt="php-logo"
          />
          <img
            id="react"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
            alt="react-logo"
          />
        </div>
      </div>
    );
  }
}

export default About;
