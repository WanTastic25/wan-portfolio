function Contact() {
    return (
        <div className="container-fluid p-5 min-vh-100 align-content-center" id="Contact">
            <h1 className="d-flex justify-content-center pb-5">Get In Touch!</h1>
            <div className="row">
                <div className="col d-flex justify-content-center gap-3">
                    <div><a href="#" className="d-inline-flex align-items-center px-4 py-2 border border-2 rounded-pill text-decoration-none text-dark">LinkedIn</a></div>
                    <div><a href="#" className="d-inline-flex align-items-center px-4 py-2 border border-2 rounded-pill text-decoration-none text-dark">GitHub</a></div>
                    <div><a href="#" className="d-inline-flex align-items-center px-4 py-2 border border-2 rounded-pill text-decoration-none text-dark">Instagram</a></div>
                    <div><a href="#" className="d-inline-flex align-items-center px-4 py-2 border border-2 rounded-pill text-decoration-none text-dark">Phone number</a></div>
                    <div><a href="#" className="d-inline-flex align-items-center px-4 py-2 border border-2 rounded-pill text-decoration-none text-dark">Email</a></div>
                </div>

            </div>
        </div>
    )
}

export default Contact