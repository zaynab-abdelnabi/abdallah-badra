import React, { Component, useEffect, useState } from "react";
import axios from "axios";
import "../css/skills.css";

const CircularProgress = ({ skill, size, strokewidth, percentage, color }) => {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    setProgress(percentage);
  }, [percentage]);
  const viewBox = `0 0 ${size} ${size}`;
  const radius = (size - strokewidth) / 2;
  const circumference = radius * Math.PI * 2;
  const dash = (progress * circumference) / 100;

  return (
    <div className="skill-item">
      <svg width={size} height={size} viewBox={viewBox}>
        <circle
          fill="none"
          stroke="transparent"
          cx={size / 2}
          cy={size / 2}
          r={radius}
          strokeWidth={`${strokewidth}px`}
        />
        <circle
          fill="none"
          stroke={color}
          cx={size / 2}
          cy={size / 2}
          r={radius}
          strokeWidth={`${strokewidth}px`}
          transform={`rotate(-90 ${size / 2} ${size / 2})`}
          strokeDasharray={[dash, circumference - dash]}
          strokeLinecap="round"
          style={{ transition: "all 2s" }}
        />
        <text
          fill="#ccc"
          fontSize="32px"
          x="50%"
          y="50%"
          dy="10px"
          textAnchor="middle"
        >
          {`${skill}`}
        </text>
      </svg>
      <p className="skill-percentage">{percentage} %</p>
    </div>
  );
};

class Skills extends Component {
  constructor(props) {
    super(props);
    this.state = {
      skills: [],
    };
  }

  componentDidMount() {
    this.getSkills();
  }

  getSkills = () => {
    axios
      .get("/skills")
      .then((res) => {
        this.setState({
          skills: res.data.response,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    return (
      <div className="section" id="skills">
        <div className="skills">
          <h1>Skills</h1>
          <div className="skills-circles">
            {this.state.skills.map((skill) => {
              return (
                <CircularProgress
                  skill={skill.skillname}
                  size={150}
                  strokewidth={8}
                  percentage={skill.rating}
                  color="#ccc"
                />
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default Skills;
