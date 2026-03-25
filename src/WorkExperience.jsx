import { motion, useAnimation, useInView } from 'motion/react';
import { useRef, useEffect } from 'react';
import game from './assets/images/game.png';

function WorkExperience() {
    const ref = useRef(null);
    const inView = useInView(ref, { amount: 0.3 });
    const controls = useAnimation();

    useEffect(() => {
        if (inView) {
            controls.start({
                opacity: 1,
                y: 0
            });
        } else {
            controls.start({
                opacity: 0,
                y: -50
            });
        }
    }, [inView, controls]);

    return (
        <motion.div
            className="container-fluid p-5 min-vh-100 align-content-center"
            id="Work"
            ref={ref}
            initial={{ opacity: 0, y: -50 }}
            animate={controls}
            transition={{ duration: 0.8 }}>
            <h1 className="d-flex justify-content-center pb-5">Work Experience</h1>

            <div className="col">
                <div className="card card-hover">
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
                </div>

                <div className="card card-hover mt-3">
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
                </div>
            </div>
        </motion.div>
    )
}

export default WorkExperience