import React from 'react';
import './Projects.css';
import covid from '../images/covid-tracker.png';

function Projects() {
    return (
        <div className="Projects" id="projects">
            <div className="numbered-heading-two"><span id="numbered-heading-number">02.</span> My Projects</div>

            {/* <a href="https://covid-tracker-three-umber.vercel.app/" target="_blank" rel="noreferrer">
                <div className="Projects-cards">
                    <img src={covid} alt="a covid-19 tracker"></img>
                    <div className="Projects-cards-text">
                        Here is a COVID-19 tracking app built using <span>React</span> and the disease.sh <span>API</span>
                    </div>
                </div>
            </a> */}
            <h4>Some exciting projects are coming up soon! Watch this space...</h4>
        </div>
    );
};

export default Projects;
