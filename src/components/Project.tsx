import React from 'react';
import fittrack_mock from '../assets/images/fittrack_mock.webp';
import telenor_mock from '../assets/images/telenor_mock.webp';
import grapho_mock from '../assets/images/home_fyp.webp';
import '../assets/styles/Project.scss';
import { Link } from "react-router-dom";

const projects = [
    {
        id: 'fittrack',
        title: 'FitTrack+',
        description: '🚀 Your Ultimate Health Companion — BMI tracking, meal planning, sleep monitoring, and workout progress all in one Flutter app.',
        image: fittrack_mock,
        stack: ['Flutter', 'Firebase', 'Dart'],
    },
    {
        id: 'mytelenor',
        title: 'MyTelenor Clone',
        description: '🔥 Full-featured telecom app clone with Stripe payments, Firebase auth, FCM push notifications, and a locally hosted backend server.',
        image: telenor_mock,
        stack: ['Flutter', 'Firebase', 'Stripe', 'FCM'],
    },
    {
        id: 'graphoinsights',
        title: 'GraphoInsights',
        description: '🖋️ Professional Flutter app for graphologists — manage clients and analyze psychological traits through handwriting with Clean Architecture.',
        image: grapho_mock,
        stack: ['Flutter', 'Firebase', 'BLoC', 'Supabase'],
    },
];

function Project() {
    return (
        <div className="projects-container" id="projects">
            <span className="section-label">02 — Projects</span>
            <h1>Personal Projects</h1>
            <p className="section-subtitle">
                A selection of things I've built — from health trackers to telecom clones.
            </p>

            <div className="projects-grid">
                {projects.map((project) => (
                    <div className="project" key={project.id}>
                        <Link to={`/project/${project.id}`} aria-label={`View ${project.title} project`}>
                            <img src={project.image} className="project-card-img" alt={project.title} />
                        </Link>
                        <div className="project-card-body">
                            <Link to={`/project/${project.id}`}>
                                <h2>{project.title}</h2>
                            </Link>
                            <p>{project.description}</p>
                            <div className="project-stack">
                                {project.stack.map((tech, i) => (
                                    <span key={i} className="project-tag">{tech}</span>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Project;
