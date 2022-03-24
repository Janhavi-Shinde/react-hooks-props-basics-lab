import React from "react";


function About(props) {
  return (
    <div id="about">
      <h2>About Me</h2>
      <p>{props.bio}</p>
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      <a href={props.github}> </a>
      <a href={props.linkedin}> </a>
    </div>
  );
}

export default About;
