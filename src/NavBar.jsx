import logo from './assets/images/userIcon.jpg';

function NavBar() {
    return (
        <nav className="navbar border">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                    <img src={logo} alt="logo" height="100"></img>
                </a>
            </div>
        </nav>
    );
}

export default NavBar