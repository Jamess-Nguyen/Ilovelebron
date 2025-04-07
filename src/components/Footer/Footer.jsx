import React from 'react';
import './Footer.css';
import github from '../../assets/github.png'
import linkedin from '../../assets/linkedin.png'

const Footer = () => {
    return (
        <div className="footer-wrapper">
            <footer className="footer">
                <div className="footer_left">
                    <p><b>[Built by James @ 2025]</b></p>
                </div>
                <div className="footer_right">
                    <a href="https://www.linkedin.com/in/james-nguyen-85574b187/" target="_blank" rel="noopener noreferrer">
                        <img src={linkedin} alt="LinkedIn" className="footer_logo" />
                    </a>
                    <a href="https://github.com/Jamess-Nguyen" target="_blank" rel="noopener noreferrer">
                        <img src={github} alt="GitHub" className="footer_logo" />
                    </a>
                </div>
            </footer>
        </div>
    );
}

export { Footer };