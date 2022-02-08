import React from 'react';
import './About.css';

function About() {
    return (
        <div className="About" id="about">
            <div className="numbered-heading"><span id="numbered-heading-number">01.</span> About Me</div>
                
            <div className="About-paragraph">
                <p id="paragraph-one">Hi! My name is Ani and I'm a pharmacy graduate from UCL. 
                My interest in web development started in 2020 when I decided to take a python course during the national lockdown. I moved onto coding in JavaScript a month later and I've been building websites ever since.  </p>
                <div id="paragraph-two">
                    The technologies I currently work with:
                    <ul className="tech-list">
                        <li>JavaScript (ES6+)</li>
                        <li>React</li>
                        <li>Python</li>
                        <li>HTML</li>
                        <li>CSS</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default About;
