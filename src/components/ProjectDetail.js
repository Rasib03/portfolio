import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { projectsData } from '../data';
import '../assets/styles/ProjectDetail.scss';
import { resolveAssetUrl } from '../utils/resolveAssetUrl';

function ProjectDetail() {
    const { projectId } = useParams();

    const project = projectsData.find(p => p.id === projectId);

    if (!project) {
        return (
            <div className="detail-container">
                <h1>Project Not Found</h1>
                <Link to="/" className="btn">← Back to Home</Link>
            </div>
        );
    }

    const galleryImages = project.galleryImages || (Array.isArray(project.image) ? project.image : [project.image]);

    return (
        <div className="detail-container">
            <Link to="/" className="back-link">← Back to Portfolio</Link>

            <h1>{project.title}</h1>
            {project.tagline && <p className="project-tagline">{project.tagline}</p>}

            {project.heroImage && (
                <img
                    className="detail-hero-img"
                    src={resolveAssetUrl(project.heroImage)}
                    alt={`${project.title} hero banner`}
                    loading="lazy"
                />
            )}

            <div className="detail-content">
                <p>{project.description}</p>

                {project.tags && project.tags.length > 0 && (
                    <div className="project-tags">
                        {project.tags.map((tag, index) => (
                            <span key={index} className="project-tag-pill">{tag}</span>
                        ))}
                    </div>
                )}

                <h3>Key Features:</h3>
                <ul>
                    {project.features.map((feature, index) => (
                        <li key={index}>{feature}</li>
                    ))}
                </ul>

                {project.stack && project.stack.length > 0 && (
                    <>
                        <h3>Tech Stack</h3>
                        <div className="stack-bubbles">
                            {project.stack.map((tech, index) => (
                                <span key={index} className="stack-badge">
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </>
                )}

                {project.featureImage && (
                    <div className="feature-banner-wrap">
                        <img
                            className="feature-banner"
                            src={resolveAssetUrl(project.featureImage)}
                            alt={`${project.title} feature showcase banner`}
                            loading="lazy"
                        />
                    </div>
                )}

                <h3>Project Screenshots</h3>
                <div className="image-gallery grid-gallery">
                    {galleryImages.map((img, index) => (
                        <img
                            key={index}
                            src={resolveAssetUrl(img)}
                            alt={`${project.title} screenshot ${index + 1}`}
                            className="gallery-img"
                            loading="lazy"
                        />
                    ))}
                </div>

                <div className="action-buttons">
                    {project.github && (
                        <a href={project.github} target="_blank" rel="noreferrer" className="btn">
                            View GitHub
                        </a>
                    )}
                    {project.apk && (
                        <a href={project.apk} download className="btn">
                            Download APK
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
}

export default ProjectDetail;