import React, { useState, useEffect } from "react";
// Import BrowserRouter and Routes
import { BrowserRouter as Routes, Route } from 'react-router-dom';
import {
    Main,
    Expertise,
    Project,
    Contact,
    Navigation,
    Footer,
} from "./components";
import ProjectDetail from './components/ProjectDetail'; // Path to your new detail page
import FadeIn from './components/FadeIn';
import './index.scss';

function App() {
    const [mode, setMode] = useState<string>('dark');

    const handleModeChange = () => {
        setMode(prevMode => (prevMode === 'dark' ? 'light' : 'dark'));
    }

    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }, []);

    return (

        // REMOVED <Router> FROM HERE
        <div className={`main-container ${mode === 'dark' ? 'dark-mode' : 'light-mode'}`}>
            <Navigation parentToChild={{ mode }} modeChange={handleModeChange} />

            <Routes>
                <Route path="/" element={
                    <FadeIn transitionDuration={700}>
                        <Main />
                        <Expertise />
                        <Project />
                        <Contact />
                    </FadeIn>
                } />

                {/* Dynamic ID path */}
                <Route path="/project/:projectId" element={<ProjectDetail />} />
            </Routes>

            <Footer />
        </div>
        // REMOVED </Router> FROM HERE
    );

}

export default App;
