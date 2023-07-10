import React from "react";
import "./skills.css";
import SkillLevel from "../../components/SkillLevel";
function Skills() {
  return (
    <>
      <div className="skills" id="skill">
        <div className="skills-container">
          <div className="skill-content">
            <div className="skill-title">
              <h4>Development is Life</h4>
              <h1>I Develop Skills Regularly to Keep Me Update</h1>
              <br />
              <p>
                Most common methods for designing websites that work well on
                desktop is responsive and adaptive design
              </p>
              <div className="skill-level">
                
                
                <div className="sk">
                <h5>C++</h5>
                <SkillLevel width={"97%"} value={92}  />
                </div>

                <div className="sk">
                <h5>Java</h5>
                <SkillLevel width={"85%"} value={92}  />
                </div>

                <div className="sk">
                <h5>Data Structures and Algorithms</h5>
                <SkillLevel width={"90%"} value={92}  />
                </div>

                <div className="sk">
                <h5>HTML</h5>
                <SkillLevel width={"96%"} value={92}  />
                </div>

                <div className="sk">
                <h5>CSS</h5>
                <SkillLevel width={"90%"} value={92} />
                </div>

                <div className="sk">
                <h5>JavaScript</h5>
                <SkillLevel width={"90%"} value={92}  />
                </div>

                <div className="sk">
                <h5>React</h5>
                <SkillLevel width={"95%"} value={92}  />
                </div>

                <div className="sk">
                <h5>Nodejs</h5>
                <SkillLevel width={"85%"} value={92}  />
                </div>

                <div className="sk">
                <h5>MongoDB</h5>
                <SkillLevel width={"93%"} value={92}  />
                </div>

                <div className="sk">
                <h5>MySQL</h5>
                <SkillLevel width={"90%"} value={92}  />
                </div>
                
              </div>
            </div>
          </div>
          <div className="skill-img">
            <img src="https://marketifythemes.net/html/dizme/img/skills/1.jpg"></img>
          </div>
          
        </div>
      </div>
    </>
  );
}

export default Skills;
