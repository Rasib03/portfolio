import React, { useEffect, useState } from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import '../assets/styles/Main.scss';
import profilePic from '../assets/images/prof.webp';

const roles = [
  'Flutter Developer',
  'Mobile App Engineer',
  'ML Enthusiast',
  'Clean Architecture Advocate',
];

function Main() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const current = roles[roleIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting && charIndex <= current.length) {
      timeout = setTimeout(() => {
        setDisplayed(current.slice(0, charIndex));
        setCharIndex(c => c + 1);
      }, 80);
    } else if (!isDeleting && charIndex > current.length) {
      timeout = setTimeout(() => setIsDeleting(true), 1800);
    } else if (isDeleting && charIndex >= 0) {
      timeout = setTimeout(() => {
        setDisplayed(current.slice(0, charIndex));
        setCharIndex(c => c - 1);
      }, 45);
    } else {
      setIsDeleting(false);
      setRoleIndex(i => (i + 1) % roles.length);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, roleIndex]);

  return (
    <div className="container">
      <div className="about-section">
        <div className="orb-bottom" aria-hidden="true"></div>
        <div className="image-wrapper">
          <div className="avatar-ring">
            <img src={profilePic} alt="Muhammad Rasib" />
          </div>
        </div>

        <div className="content">
          <div className="greeting">
            <span className="dot"></span>
            Available for work
          </div>

          <h1>Muhammad Rasib</h1>

          <p className="role-badge">
            <span className="role-icon">📱</span>
            <span className="typewriter-text">{displayed}<span className="cursor">|</span></span>
          </p>

          <p>
            Building high-performance cross-platform mobile apps with Flutter & Dart.
            Passionate about clean architecture, smooth UX, and scalable backends.
          </p>

          <div className="hero-cta">
            <a href="#projects" className="cta-primary" onClick={(e) => {
              e.preventDefault();
              document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
            }}>
              View Projects <ArrowForwardIcon fontSize="small" />
            </a>
            <a href="/resume.pdf" download className="cta-secondary">
              <FileDownloadIcon fontSize="small" /> Resume
            </a>
          </div>

          <div className="social_icons">
            <a href="https://github.com/Rasib03" target="_blank" rel="noreferrer" aria-label="GitHub">
              <GitHubIcon />
            </a>
            <a href="https://www.linkedin.com/in/rasib03/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <LinkedInIcon />
            </a>
          </div>

          <div className="mobile_social_icons">
            <a href="https://github.com/Rasib03" target="_blank" rel="noreferrer" aria-label="GitHub">
              <GitHubIcon />
            </a>
            <a href="https://www.linkedin.com/in/rasib03/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <LinkedInIcon />
            </a>
          </div>
        </div>

        <div className="scroll-indicator" aria-hidden="true">
          <span>Scroll</span>
          <div className="arrow"></div>
        </div>
      </div>
    </div>
  );
}

export default Main;
