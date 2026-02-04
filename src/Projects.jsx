import game from './assets/images/game.png';

function Projects() {
    return (
        <div className="container-fluid p-5 min-vh-100 align-content-center" id="Projects">
            <h1 className="d-flex justify-content-center pb-5">Projects</h1>

            <div className="row">
                <div className="col-4">
                    <div className="card">
                        <img height={150} src={game} style={{ objectFit: "cover" }}/>
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

                <div className="col-4">
                    <div className="card">
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

                <div className="col-4">
                    <div className="card">
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

                <div className="col-4 mt-4">
                    <div className="card">
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

                <div className="col-4 mt-4">
                    <div className="card">
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

                <div className="col-4 mt-4">
                    <div className="card">
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
        </div>
    )
}

export default Projects
