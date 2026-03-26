import fittrack_mock from '../assets/images/fittrack_mock.png';
import telenor_mock from '../assets/images/telenor_mock.png';   // ← New import

import '../assets/styles/Project.scss';
import { Link } from "react-router-dom";

function Project() {
    return (
        <div className="projects-container" id="projects">
            <h1>Personal Projects</h1>
            <div className="projects-grid">

                {/* FitTrack+ Card */}
                <div className="project">
                    <Link to="/project/fittrack">
                        <img src={fittrack_mock} className="project-card-img zoom" alt="FitTrack+" />
                    </Link>
                    <Link to="/project/fittrack"><h2>FitTrack+</h2></Link>
                    <p>🚀 FitTrack+ – Your Ultimate Health Companion! 🏋️‍♂️🥗💧</p>
                </div>

                {/* MyTelenor Clone Card - NEW */}
                <div className="project">
                    <Link to="/project/mytelenor">
                        <img src={telenor_mock} className="project-card-img zoom" alt="MyTelenor Clone" />
                    </Link>
                    <Link to="/project/mytelenor"><h2>MyTelenor Clone</h2></Link>
                    <p>My Telenor app clone built with Flutter! 🔥 Featuring Stripe payments, Firebase auth, a locally hosted server, and push notifications with FCM! 💙</p>
                </div>

            </div>
        </div>
    );
}

export default Project;