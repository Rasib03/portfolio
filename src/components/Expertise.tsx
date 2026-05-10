import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';
import flutter from '../assets/images/flutter.webp';
import ML from '../assets/images/ML.webp';
import softwareEngineering from "../assets/images/softwareEngineering.webp";

const labelsFirst = [
    "Flutter",
    "React Native",
    "Kotlin",
    "Dart",
    "BLoC",
    "Provider",
    "Supabase",
    "Firebase",
    "REST APIs",
    "Hive",
];

const labelsSecond = [
    "Python",
    "TensorFlow",
    "Keras",
    "TFLite",
    "NumPy",
    "Pandas",
    "Matplotlib",
    "Seaborn",
];

const labelsThird = [
    "SQL",
    "PostgreSQL",
    "Git",
    "GitHub",
    "SSDLC",
    "System Architecture",
    "ER Diagrams",
    "UML",
];


function Expertise() {
    return (
        <div className="container" id="expertise">
            <div className="skills-container">
                <span className="section-label">01 — Expertise</span>
                <h1>What I Do</h1>
                <p className="section-subtitle">
                    Technologies and disciplines I work with day-to-day.
                </p>
                <div className="skills-grid">
                    <div className="skill">
                        <img
                            src={flutter}
                            alt="Flutter"
                            className="skill-icon"     // ← yeh class banao CSS mein
                        />
                        <h3>Mobile App Development (Flutter, React Native & Kotlin)</h3>
                        <p>I specialize in building high-performance, cross-platform mobile applications using Flutter and React Native, with native Android experience in Kotlin. Expertise in BLoC state management, Supabase & Firebase backend integration, and REST API connectivity.</p>
                        <div className="flex-chips">
                            <span className="chip-title">Tech stack:</span>
                            {labelsFirst.map((label, index) => (
                                <Chip key={index} className='chip' label={label} />
                            ))}
                        </div>
                    </div>

                    <div className="skill">
                        <img
                            src={ML}
                            alt="ML"
                            className="skill-icon2"     // ← yeh class banao CSS mein
                        />
                        <h3>Machine Learning & Computer Vision</h3>
                        <p>I design and deploy end-to-end machine learning solutions with a strong focus on Image Classification and Neural Networks, using TensorFlow, Keras, and TFLite for mobile optimization.</p>
                        <div className="flex-chips">
                            <span className="chip-title">Tech stack:</span>
                            {labelsSecond.map((label, index) => (
                                <Chip key={index} className='chip' label={label} />
                            ))}
                        </div>
                    </div>

                    <div className="skill">
                        <img
                            src={softwareEngineering}
                            alt="softwareEngineering"
                            className="skill-icon3"     // ← yeh class banao CSS mein
                        />
                        <h3>Software Engineering & Theoretical Foundations</h3>
                        <p>Beyond coding, I have a strong command of the Software Development Life Cycle (SDLC) and technical documentation, including SRS and ER Diagrams.
                            My academic background in Graph Theory, Distributed Systems, and Database Management enables me to solve complex algorithmic problems with high efficiency.</p>
                        <div className="flex-chips">
                            <span className="chip-title">Tech stack:</span>
                            {labelsThird.map((label, index) => (
                                <Chip key={index} className='chip' label={label} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Expertise;
