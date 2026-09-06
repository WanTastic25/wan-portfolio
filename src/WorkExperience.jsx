import { motion as Motion, useInView } from 'motion/react';
import { useRef } from 'react';
//import game from './assets/images/game.png';
import cohu from './assets/images/workExperience/QC.jpg';
import ums from './assets/images/workExperience/UMSChess.jpeg';

function WorkExperience() {
    const titleRef = useRef(null);
    const cardRef = useRef(null);
    const titleInView = useInView(titleRef, { amount: 0.3 });
    const cardInView = useInView(cardRef, { amount: 0.6 });

    return (
        <div className="container-fluid p-5 min-vh-100 align-content-center" id="Work">
            <Motion.div
                className="div"
                ref={titleRef}
                initial={{ opacity: 0, y: -50 }}
                animate={titleInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8 }}>
                <h1 className="d-flex justify-content-center pb-5">Work Experience</h1>
            </Motion.div>
            <Motion.div
                className="col"
                ref={cardRef}
                initial="hidden"
                animate={cardInView ? "visible" : "hidden"}
                variants={{
                    visible: {
                        transition: {
                            staggerChildren: 0.4,
                        }
                    }
                }}>
                <Motion.div className="card card-hover"
                    variants={{
                        hidden: { opacity: 0 },
                        visible: { opacity: 1, transition: { duration: 0.8 } }
                    }}>
                    <div className="row">
                        <div className="col-md-4 image-box">
                            <img src={cohu} style={{ width: "100%", height: "100%", objectFit: "cover", borderTopLeftRadius: "6px", borderBottomLeftRadius: "6px" }} />
                        </div>
                        <div className="col g-0">
                            <div className="card-body">
                                <div className="d-flex justify-content-between align-items-center">
                                    <h4 className="card-title">Software Engineer Intern</h4>
                                    <h6 className="pe-3">March 2025 - August 2025</h6>
                                </div>
                                <h6 className="card-subtitle mb-2 text-muted">Cohu Sdn. Bhd.</h6>
                                <p className="card-text">
                                    • Developed and executed unit tests for test handler machine modules, improving reliability, maintainability, and codebase stability.
                                    <br />
                                    • Analyzed existing code and implemented test cases using MSTest.
                                    <br />
                                    • Prepared training documentation for future interns and junior developers, supporting knowledge transfer and onboarding.
                                    <br />
                                    • Collaborated with senior engineers to understand system architecture and ensure compatibility of test suites with ongoing development
                                    work.
                                </p>
                            </div>
                        </div>
                    </div>
                </Motion.div>

                <Motion.div className="card card-hover mt-3"
                    variants={{
                        hidden: { opacity: 0 },
                        visible: { opacity: 1, transition: { duration: 0.8 } }
                    }}>
                    <div className="row">
                        <div className="col-md-4 image-box">
                            <img src={ums} style={{ width: "100%", height: "100%", objectFit: "cover", borderTopLeftRadius: "5px", borderBottomLeftRadius: "5px" }} />
                        </div>
                        <div className="col g-0">
                            <div className="card-body">
                                <div className="d-flex justify-content-between align-items-center">
                                    <h4 className="card-title">Assistant Information Technology Officer</h4>
                                    <h6 className="pe-3">April 2026 - Present</h6>
                                </div>
                                <h6 className="card-subtitle mb-2 text-muted">Universiti Malaysia Sabah</h6>
                                <p className="card-text">
                                    • Develop, enhance, and maintain an internal staff competency evaluation system using Yii2 and MySQL.
                                    <br />
                                    • Maintain and enhance a legacy auditor management system through UI improvements, bug fixes, database changes, and data presentation
                                    updates.
                                    <br />
                                    • Prepare user documentation and conduct training sessions for system end-users.
                                    <br />
                                    • Use AI-assisted development tools such as Codex to accelerate prototyping and implementation of new modules.
                                </p>
                            </div>
                        </div>
                    </div>
                </Motion.div>
            </Motion.div>
        </div>
    )
}

export default WorkExperience
