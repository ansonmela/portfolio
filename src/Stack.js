import React, { Component } from 'react';
import jsPic from "./Images/javascript.png"

class Stack extends Component {
 render() {
     return (
         <div>
             <h1 className="skillsTitle">Skills</h1>
             <div className="skillsList">
                <div className="jsSkillPic">
                    <img src={jsPic} alt="jsPic" />
                </div>
                <p>JavaScript</p>
                <p></p>
            </div>
         </div>
     );
 }; 
};

export default Stack;