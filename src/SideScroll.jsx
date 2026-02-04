import './SideScroll.css'

function SideScroll() {
    return (
        <div className="container-fluid min-vh-100 align-content-center sticky-top">
            <ul>
                <li>
                    <a className="" href="#About">About</a>
                </li>
                <li>
                    <a className="" href="#Projects">Projects</a>
                </li>
                <li>
                    <a className="" href="#Work">Work Experience</a>
                </li>
                <li>
                    <a className="" href="#Techstack">Techstack</a>
                </li>
                <li>
                    <a className="" href="#Contact">Contact</a>
                </li>
            </ul>
        </div>
    )
}

export default SideScroll