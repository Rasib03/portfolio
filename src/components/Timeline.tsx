import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faGraduationCap, faCode } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss'

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <span className="section-label">03 — Journey</span>
        <h1>My Journey</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid white' }}
            date="2022 – 2026"
            iconStyle={{ background: '#7c3aed', color: '#fff' }}
            icon={<FontAwesomeIcon icon={faGraduationCap} />}
          >
            <h3 className="vertical-timeline-element-title">BS Software Engineering</h3>
            <h4 className="vertical-timeline-element-subtitle">University — Pakistan</h4>
            <p>
              Studying Software Engineering with focus on algorithms, distributed systems, database management, and software architecture.
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2023"
            iconStyle={{ background: '#7c3aed', color: '#fff' }}
            icon={<FontAwesomeIcon icon={faCode} />}
          >
            <h3 className="vertical-timeline-element-title">Started Flutter Development</h3>
            <h4 className="vertical-timeline-element-subtitle">Self-taught</h4>
            <p>
              Began learning Flutter and Dart. Built first cross-platform mobile apps, explored state management patterns (Provider, BLoC), and REST API integration.
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2023"
            iconStyle={{ background: '#7c3aed', color: '#fff' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">ML & Computer Vision Projects</h3>
            <h4 className="vertical-timeline-element-subtitle">Academic / Personal</h4>
            <p>
              Designed and deployed end-to-end ML pipelines using TensorFlow, Keras, and TFLite. Focused on image classification and mobile-optimized neural networks.
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2025"
            iconStyle={{ background: '#7c3aed', color: '#fff' }}
            icon={<FontAwesomeIcon icon={faCode} />}
          >
            <h3 className="vertical-timeline-element-title">Started React Native</h3>
            <h4 className="vertical-timeline-element-subtitle">Self-taught</h4>
            <p>
              Expanded into React Native to broaden cross-platform mobile development skills, leveraging existing JavaScript knowledge alongside Flutter expertise.
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Jun 2025 – Sep 2025"
            iconStyle={{ background: '#7c3aed', color: '#fff' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Software Engineer Intern</h3>
            <h4 className="vertical-timeline-element-subtitle">NASTP, Pakistan</h4>
            <p>
              Worked as a Software Engineer intern at the National Aerospace Science & Technology Park. Gained hands-on industry experience in software development and engineering practices.
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;