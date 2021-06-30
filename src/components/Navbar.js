import React, { useState } from 'react';
import './Navbar.css';

function Navbar() {
    const [click, setClick] = useState(false);

    const handleClick = () => {
        setClick(!click);
    };

    return (
        <div className="Nav">
            <div className="Nav-logo">
                <i class="fas fa-laptop-code fa-2x"></i>
            </div>

            <div className="Nav-menu-icon" onClick={handleClick}>
                <i class={click? "fas fa-times" : "fas fa-bars"}></i>
            </div>
            <div className={click? "Nav-menu active" : "Nav-menu"}>
                <a href="#about"><div className="Nav-item"><span id="number">01.</span> About Me</div></a>
                <a href="#projects"><div className="Nav-item"><span id="number">02.</span> Projects</div></a>
                <a href="mailto:anikachoudhury010@gmail.com"><div className="Nav-item"><span id="number">03.</span> Contact</div></a>
            </div>
        </div>
    )
};

export default Navbar;
