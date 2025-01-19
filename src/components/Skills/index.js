
import './index.css'
import React from "react";
import ProgressBar from "@ramonak/react-progress-bar";

const Skills = () => (
    <div id="skills" className='skill-main-container'>
        <h3 align="center"> My Current Skills</h3>
        <div className='inner-container'>
            <div>
                <h5>Related to Development</h5>
        <ul type="none">
            <li>HTML</li>
            <li>CSS</li>
            <li>Bootstrap</li>
            <li>JavaScript</li>
            <li>React JS</li>
            <li>Node JS</li>
            <li>MYSQL/SQLite</li>
            <li>MongoDB</li>
        </ul>
           </div>

        <div>
            <h5>Related to Programming</h5>
        <ul type="none">
            <li>Python</li>
            <li>C++ (DSA)</li>
            <li>Java Programming</li>
            <li>C</li>
        </ul>
        </div>

        </div>

        <div className='progressbar-maincontainer'>

            <div>

            <div className='progressbar-container'>
            <span className='skill-text'>HTML</span>
            <ProgressBar className="progressbar" completed={95} />
            </div>
            
            <div className='progressbar-container'>
            <span className='skill-text'>CSS</span>
            <ProgressBar className="progressbar" completed={90} />
            </div>

            <div className='progressbar-container'>
            <span className='skill-text'>JavaScript</span>
            <ProgressBar className="progressbar" completed={92} />
            </div>

            <div className='progressbar-container'>
            <span className='skill-text'>Reactjs</span>
            <ProgressBar className="progressbar" completed={90} />
            </div>

            <div className='progressbar-container'>
            <span className='skill-text'>Nodejs</span>
            <ProgressBar className="progressbar" completed={88} />
            </div>


            </div>


            <div>

            <div className='progressbar-container'>
            <span className='skill-text'>MYSQL/SQLite</span>
            <ProgressBar className="progressbar" completed={93} />
            </div>
            
            <div className='progressbar-container'>
            <span className='skill-text'>MongoDB</span>
            <ProgressBar className="progressbar" completed={85} />
            </div>

            <div className='progressbar-container'>
            <span className='skill-text'>Python</span>
            <ProgressBar className="progressbar" completed={91} />
            </div>

            <div className='progressbar-container'>
            <span className='skill-text'>C++(DSA)</span>
            <ProgressBar className="progressbar" completed={80} />
            </div>

            </div>


        </div>


    </div>
)

export default Skills