import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';
import flutter from '../assets/images/flutter.png';
import ML from '../assets/images/ML.png';
import softwareEngineering from "../assets/images/softwareEngineering.png";

const labelsFirst = [
    "Flutter",
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
                <h1>Expertise</h1>
                <div className="skills-grid">
                    <div className="skill">
                        <img
                            src={flutter}
                            alt="Flutter"
                            className="skill-icon"     // ← yeh class banao CSS mein
                        />
                        <h3>Mobile App Development (Flutter & Dart)</h3>
                        <p>I specialize in building high-performance, multi-threaded cross-platform mobile applications using Flutter, with expertise in BLoC state management, Supabase & Firebase backend integration, and RestAPI's connectivity.</p>
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
