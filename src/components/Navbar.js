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
                <div className="Nav-item"><span id="number">01.</span> About Me</div>
                <div className="Nav-item"><span id="number">02.</span> Projects</div>
                <div className="Nav-item"><span id="number">03.</span> Contact</div>
            </div>
        </div>
    )
};

export default Navbar;
