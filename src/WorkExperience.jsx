import game from './assets/images/game.png';

function WorkExperience() {
    return (
        <div className="container-fluid p-5 min-vh-100 align-content-center" id="Work">
            <h1 className="d-flex justify-content-center pb-5">Work Experience</h1>

            <div className="col">
                <div className="card">
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

                <div className="card mt-3">
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
        </div>
    )
}

export default WorkExperience