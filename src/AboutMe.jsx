import logo from './assets/images/userIcon.jpg';

function AboutMe() {
    return (
        <div className="d-flex container-fluid p-5 min-vh-100 align-content-center justify-content-center" id="About">
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
        </div>
    )
}

export default AboutMe