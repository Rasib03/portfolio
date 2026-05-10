import React, { useState, useEffect } from "react";
import { Routes, Route } from 'react-router-dom';
import {
    Main,
    Expertise,
    Project,
    Contact,
    Navigation,
    Footer,
    Timeline,
} from "./components";
import ProjectDetail from './components/ProjectDetail';
import FadeIn from './components/FadeIn';
import ScrollToTop from './components/ScrollToTop';
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
        <div className={`main-container ${mode === 'dark' ? 'dark-mode' : 'light-mode'}`}>
            <Navigation parentToChild={{ mode }} modeChange={handleModeChange} />

            <Routes>
                <Route path="/" element={
                    <FadeIn transitionDuration={700}>
                        <Main />
                        <Expertise />
                        <Project />
                        <Timeline />
                        <Contact />
                    </FadeIn>
                } />

                {/* Dynamic ID path */}
                <Route path="/project/:projectId" element={<ProjectDetail />} />
            </Routes>

            <Footer />
            <ScrollToTop />
        </div>
    );

}

export default App;