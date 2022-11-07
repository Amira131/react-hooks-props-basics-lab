import React from "react";

import Links from "./Links";


function About({pAbout}) {
  console.log(pAbout)
  
  // const isBioPassed = p.isBioPassed;
  // if (isBioPassed) {
  //   return (
  //     <>
  //     {isBioPassed? <p/> : ""}
      
  //     </>
  //   )
  // }
  
  return (
    <div id="about">
      <h2>About Me</h2>
      {/* <p>{pAbout.bio}</p> */}
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />

      {<Links pLinks={pAbout.links} />}
    </div>
  );
  }

export default About;
