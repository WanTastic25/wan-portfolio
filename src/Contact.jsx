function Contact() {
    const resumeUrl = 'public/WAN ASHRAF MUZAFFER BIN WAN MOHD ZAINI Resume.pdf'

    return (
        <div className="container-fluid p-5 min-vh-100 align-content-center" id="Contact">
            <h1 className="d-flex justify-content-center pb-5">You can find me here, or download my resume</h1>
            <div className="row">
                <div className="col d-flex justify-content-center gap-3">
                    <div><a href="https://www.linkedin.com/in/wan-ashraf-muzaffer-bin-wan-mohd-zaini-58449b1a6/"
                        className="d-inline-flex align-items-center px-4 py-2 border border-2 rounded-pill text-decoration-none text-dark"
                        rel="noopener noreferrer" target="_blank">
                        LinkedIn
                    </a></div>
                    <div><a href="https://github.com/WanTastic25"
                        className="d-inline-flex align-items-center px-4 py-2 border border-2 rounded-pill text-decoration-none text-dark"
                        rel="noopener noreferrer" target="_blank">
                        GitHub
                    </a></div>
                </div>
            </div>
            <div className="row pt-5">
                <div className="col d-flex justify-content-center">
                    <a
                        href={resumeUrl}
                        download="Wan-Ashraf-Muzaffer-Resume.pdf"
                        className="d-inline-flex align-items-center px-4 py-2 border border-2 rounded-pill text-decoration-none text-dark"
                    >
                        Download Resume
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Contact
