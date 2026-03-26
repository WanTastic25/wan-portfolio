import { motion, useAnimation, useInView } from 'motion/react';
import { useRef, useEffect } from 'react';
import game from './assets/images/game.png';

function WorkExperience() {
    const titleRef = useRef(null);
    const cardRef = useRef(null);
    const titleInView = useInView(titleRef, { amount: 0.3 });
    const cardInView = useInView(cardRef, { amount: 0.6 });

    return (
        <div className="container-fluid p-5 min-vh-100 align-content-center" id="Work">
            <motion.div
                className="div"
                ref={titleRef}
                initial={{ opacity: 0, y: -50 }}
                animate={titleInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8 }}>
                <h1 className="d-flex justify-content-center pb-5">Work Experience</h1>
            </motion.div>
            <motion.div
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
                <motion.div className="card card-hover"
                    variants={{
                        hidden: { opacity: 0 },
                        visible: { opacity: 1, transition: {duration: 0.8} }
                    }}>
                    <div className="row">
                        <div className="col-md-4">
                            <img src={game} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                        </div>
                        <div className="col g-0">
                            <div className="card-body">
                                <h5 className="card-title">Lorem Ipsum</h5>
                                <p className="card-text">Lorem Ipsum</p>
                            </div>
                        </div>
                    </div>
                </motion.div>

                <motion.div className="card card-hover mt-3"
                    variants={{
                        hidden: { opacity: 0 },
                        visible: { opacity: 1, transition: {duration: 0.8} }
                    }}>
                    <div className="row">
                        <div className="col-md-4">
                            <img src={game} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                        </div>
                        <div className="col g-0">
                            <div className="card-body">
                                <h5 className="card-title">Lorem Ipsum</h5>
                                <p className="card-text">Lorem Ipsum</p>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </div>
    )
}

export default WorkExperience