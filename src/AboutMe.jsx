import { motion, useAnimation, useInView } from 'motion/react';
import { useRef, useEffect } from 'react';
import logo from './assets/images/userIcon.jpg';

function AboutMe() {
    const ref = useRef(null);
    const inView = useInView(ref, { amount: 0.3 });
    const controls = useAnimation();

    useEffect(() => {
        if (inView) {
            controls.start({
                opacity: 1,
                x: 0
            });
        } else {
            controls.start({
                opacity: 0,
                x: -50
            });
        }
    }, [inView, controls]);

    return (
        <motion.div
            className="d-flex container-fluid p-5 min-vh-100 align-content-center justify-content-center"
            id="About"
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={controls}
            transition={{ duration: 0.8 }}
        >
            <div className="row align-content-center justify-content-center">
                <div className="col-auto align-content-center">
                    <img src={logo} className="rounded-circle border" width="250" height="250"></img>
                </div>
                <div className="col-auto align-content-center">
                    <h1>Hello, I'm Wan Ashraf</h1>
                    <p className="lead">
                        Lorem Ipsum Description
                    </p>
                </div>
            </div>
        </motion.div>
    )
}

export default AboutMe