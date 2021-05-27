import React from 'react';
import './Home.css';

function Home() {
    return (
        <div className="Home">
            {/* icons that will stay stuck to the left hand side of the website  */}
            <div className="Contact-icons">
                <ul className="Contact-icons-list">
                    <a href="https://github.com/anikachoudhury" target="_blank" rel="noreferrer"><i class="fab fa-github icon fa-lg"></i></a>
                    <a href="https://www.linkedin.com/in/anika-choudhury-469b17212" target="_blank" rel="noreferrer"><i class="fab fa-linkedin-in icon fa-lg"></i></a>
                    <a href="mailto:anikachoudhury010@gmail.com"><i class="fas fa-at icon fa-lg"></i></a>
                </ul>
            </div>

            <div className="Home-intro">
                <p id="line-one">Hi, my name is</p>
                <h1>Anika Choudhury.</h1>
                <h2>I build things that live on the web.</h2>
                <p id="line-four">I am a London-based front-end web developer who specialises in building extraordinary virtual experiences.</p>
                <button><a href="mailto:anikachoudhury010@gmail.com">Say Hello</a></button>
            </div>
        </div>
    );
};

export default Home;
