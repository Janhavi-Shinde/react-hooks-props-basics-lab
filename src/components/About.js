import React from "react";
import Links from "./Links";
import user from "../data/user";

function About(props) {

  return (
    <div id="about">
      <h2>About Me</h2>
      {(!props.bio) ? null : <p id="bioProp">{props.bio}</p>}
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      <Links github={user.links.github} linkedin={user.links.linkedin}>   </Links>
      
    </div>
  );

  }



export default About;
