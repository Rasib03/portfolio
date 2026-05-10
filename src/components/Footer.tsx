import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Footer.scss';

function Footer() {
  return (
    <footer>
      <div className="footer-icons">
        <a href="https://github.com/Rasib03" target="_blank" rel="noreferrer" aria-label="GitHub">
          <GitHubIcon />
        </a>
        <a href="https://www.linkedin.com/in/rasib03/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
          <LinkedInIcon />
        </a>
      </div>
      <p className="footer-credit">
        Designed & built by{' '}
        <a href="https://github.com/Rasib03" target="_blank" rel="noreferrer">
          Muhammad Rasib
        </a>{' '}
        with 💜
      </p>
    </footer>
  );
}

export default Footer;
