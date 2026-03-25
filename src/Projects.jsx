import { motion, useAnimation, useInView } from 'motion/react';
import { useRef, useEffect } from 'react';
import game from './assets/images/game.png';

function Projects() {
    const ref = useRef(null);
    const inView = useInView(ref, {amount: 0.3});
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
            id="Projects"
            ref={ref}
            initial={{ opacity: 0, y: -50 }}
            animate={controls}
            transition={{ duration: 0.8 }}
        >

            <h1 className="d-flex justify-content-center pb-5">Projects</h1>

            <div className="row g-4">
                <div className="col-12 col-md-6 col-lg-4">
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
                </div>

                <div className="col-12 col-md-6 col-lg-4">
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
                </div>

                <div className="col-12 col-md-6 col-lg-4">
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
                </div>

                <div className="col-12 col-md-6 col-lg-4">
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
                </div>

                <div className="col-12 col-md-6 col-lg-4">
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
                </div>

                <div className="col-12 col-md-6 col-lg-4">
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
                </div>
            </div>
        </motion.div>
    )
}

export default Projects
