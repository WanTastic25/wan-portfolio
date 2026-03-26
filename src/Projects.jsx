import { motion, useAnimation, useInView } from 'motion/react';
import { useRef, useEffect } from 'react';
import game from './assets/images/game.png';

function Projects() {
    const titleRef = useRef(null);
    const cardRef = useRef(null);
    const titleInView = useInView(titleRef, { amount: 0.3 });
    const cardInView = useInView(cardRef, { amount: 0.6 });

    return (
        <div className="container-fluid p-5 min-vh-100 align-content-center" id="Projects">
            <motion.div
                className="div"
                ref={titleRef}
                initial={{ opacity: 0, y: -50 }}
                animate={titleInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8 }}>
                <h1 className="d-flex justify-content-center pb-5">Projects</h1>
            </motion.div>
            <motion.div className="row g-4"
                ref={cardRef}
                initial="hidden"
                animate={cardInView ? "visible" : "hidden"}
                variants={{
                    visible: {
                        transition: {
                            staggerChildren: 0.2,
                        }
                    }
                }}>
                <motion.div className="col-12 col-md-6 col-lg-4"
                    variants={{
                        hidden: { opacity: 0 },
                        visible: { opacity: 1, transition: { duration: 0.3 } }
                    }}>
                    <div className="card card-hover">
                        <img height={150} src={game} style={{ objectFit: "cover" }} />
                        <div className="card-body">
                            <div className="justify-content-end d-flex">
                                <span className="badge border text-dark rounded-pill">Test</span>
                            </div>
                            <h5 className="card-title">Lorem Ipsum</h5>
                            <p className="card-text">
                                Lorem Ipsum bleh bleh bleh
                            </p>
                        </div>
                    </div>
                </motion.div>

                <motion.div className="col-12 col-md-6 col-lg-4"
                    variants={{
                        hidden: { opacity: 0 },
                        visible: { opacity: 1, transition: { duration: 0.3 } }
                    }}>
                    <div className="card card-hover">
                        <svg></svg>
                        <div className="card-body">
                            <div className="justify-content-end d-flex">
                                <span className="badge border text-dark rounded-pill">Test</span>
                            </div>
                            <h5 className="card-title">Lorem Ipsum</h5>
                            <p className="card-text">
                                Lorem Ipsum bleh bleh bleh
                            </p>
                        </div>
                    </div>
                </motion.div>

                <motion.div className="col-12 col-md-6 col-lg-4"
                    variants={{
                        hidden: { opacity: 0 },
                        visible: { opacity: 1, transition: { duration: 0.3 } }
                    }}>
                    <div className="card card-hover">
                        <svg></svg>
                        <div className="card-body">
                            <div className="justify-content-end d-flex">
                                <span className="badge border text-dark rounded-pill">Test</span>
                            </div>
                            <h5 className="card-title">Lorem Ipsum</h5>
                            <p className="card-text">
                                Lorem Ipsum bleh bleh bleh
                            </p>
                        </div>
                    </div>
                </motion.div>

                <motion.div className="col-12 col-md-6 col-lg-4"
                    variants={{
                        hidden: { opacity: 0 },
                        visible: { opacity: 1, transition: { duration: 0.3 } }
                    }}>
                    <div className="card card-hover">
                        <svg></svg>
                        <div className="card-body">
                            <div className="justify-content-end d-flex">
                                <span className="badge border text-dark rounded-pill">Test</span>
                            </div>
                            <h5 className="card-title">Lorem Ipsum</h5>
                            <p className="card-text">
                                Lorem Ipsum bleh bleh bleh
                            </p>
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </div>
    )
}

export default Projects
