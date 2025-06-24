import React from "react";
import "./Abouts.css";
import about_img from "../../assets/about.png";
import play_icon from "../../assets/play-icon.png";

const About = ({setPlayState}) => {
  return (
    <div className="about">
      <div className="about-left">
        <img src={about_img} alt="" className="about-img" />
        <img src={play_icon} alt="" className="play-icon" onClick={() => {setPlayState(true)}}/>
      </div>
      <div className="about-right">
        <h3>ABOUT UNIVERSITY</h3>
        <h2>Nurturing Tomorrow's Leaders Today</h2>
        <p>
          Embark on a transformative journey with us as we shape the leaders of
          tomorrow through innovative education and holistic development. Our
          commitment to excellence is unmatched.
        </p>
        <p>
          Our university is dedicated to providing a comprehensive education
          that not only focuses on academic excellence but also emphasizes
          personal growth, leadership skills, and social responsibility.
        </p>
        <p>
          With a diverse range of programs, state-of-the-art facilities, and a
          vibrant campus life, we offer an enriching environment where students
          can explore their passions, engage in meaningful experiences, and
          build lifelong connections. Together, let's create a brighter future
          for all.
        </p>
      </div>
    </div>
  );
};

export default About;
