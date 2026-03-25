import './SideScroll.css'

function SideScroll() {
    return (
        <div className="container-fluid min-vh-100 align-content-center sticky-top sidebar sidebarScale">
            <ul>
                <li>
                    <a className="TextScale" href="#About">About</a>
                </li>
                <li>
                    <a className="TextScale" href="#Projects">Projects</a>
                </li>
                <li>
                    <a className="TextScale" href="#Work">Work Experience</a>
                </li>
                <li>
                    <a className="TextScale" href="#Techstack">Techstack</a>
                </li>
                <li>
                    <a className="TextScale" href="#Contact">Contact</a>
                </li>
            </ul>
        </div>
    )
}

export default SideScroll