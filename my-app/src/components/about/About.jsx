import React from 'react';
import "./about.css"

const About = () => {
  return (
    <div className="grid-container">
      <div className="item left-1">Left 1</div>
      <div className="item left-2">Left 2</div>
      <div className="item right-1">
        <div className='icon'>
          <i></i>
        </div>
        <h3>Information Technology</h3>
      </div>
      <div className="item right-2">Right 2</div>
      <div className="item right-3">Right 3</div>
    </div>
  );
};

export default About