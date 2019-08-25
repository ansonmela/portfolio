import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import ReactFullpage from '@fullpage/react-fullpage';
import Bio from "./Bio";
import Stack from "./Stack"
import Pic from "./Images/profile-pic.jpeg";

const Fullpage = () => (
    <ReactFullpage
      render={({ fullpageApi }) => {
        return (
          <ReactFullpage.Wrapper>

            <div className="section" id="section1">
              <div className="title">
                <img src={Pic} alt="Pic" />
                <h3>ANSON MELAKAYIL</h3>
                <h4>Software Engineer</h4>
              </div>
            </div>

            <div className="section" id="section2">
              <div id="bioSection">
                  <Bio />
              </div>
            </div>

            <div className="section" id="section3">
              <div id="stackSection">
                <Stack />
              </div>            
            </div>

          </ReactFullpage.Wrapper>
        );
      }}
    />
  );

ReactDOM.render(
    <Fullpage />,
    document.getElementById("root")
);

