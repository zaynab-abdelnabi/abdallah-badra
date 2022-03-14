import React, { Component } from "react";
import "../css/Experiences.css";
import axios from "axios";

class Experiences extends Component {
  constructor(props){
     super(props);
     this.state = {
       experiences: [], 
     }
  }

  componentDidMount(){
    this.getExperiences();
  }

  getExperiences = () =>{
    axios.get('/experiences')
    .then(res=>{
      this.setState({
        experiences: res.data.response
      })
    })
    .catch(err=>{
      console.log(err);
    })
  }
   
  render() {
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

    return (
      <div className="section" id="experiences">
        <div className="experiences">
          <div class="experiences-text">
            <div class="experiences-text-title">
              <h1>Experience</h1>
            </div>
            <div class="horizontal-line"></div>
          </div>

          <div class="experiences-items">
            <ul>
              {this.state.experiences.map(experience=>{
                return(
                  <li className="experience-item" key={experience.id}>
                    <div className="experience-item-content">
                      <div className="experience-item-content-title">
                        {experience.jobTitle}
                      </div>
                      <div className="experience-item-content-date">
                        {months[Number(experience.startDate.split('-')[1])]} {experience.startDate.split('-')[0]} - {months[Number(experience.endDate.split('-')[1])]} {experience.endDate.split('-')[0]}
                      </div>
                      <div className="experience-item-content-company">
                        {experience.companyName}
                      </div>
                      <div className="experience-item-content-place">
                        {experience.location}
                      </div>
                      <div className="experience-item-content-tasks">
                        <ul>
                          {experience.description.trim(' ').split('\n').map(task=>{
                            return(
                              <li>{task}</li>
                            )
                          })}
                        </ul>
                      </div>
                    </div>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Experiences;
