import LinkedInIcon from './assets/images/techIcons/linkedin-logo.svg?react'
import GitHubIcon from './assets/images/techIcons/github-icon.svg?react'
import FolderIcon from './assets/images/techIcons/folder-icon.svg?react'

function Contact() {
    const resumeUrl = 'public/WAN ASHRAF MUZAFFER BIN WAN MOHD ZAINI Resume.pdf'

    return (
        <div className="container-fluid p-5 min-vh-100 align-content-center" id="Contact">
            <h1 className="d-flex justify-content-center pb-5">You can find me here, or download my resume</h1>
            <div className="row">
                <div className="col d-flex justify-content-center gap-3">
                    <a href="https://www.linkedin.com/in/wan-ashraf-muzaffer-bin-wan-mohd-zaini-58449b1a6/"
                        className="border border-2 rounded-pill d-inline-flex align-items-center gap-2 px-4 py-2 text-decoration-none text-dark"
                        rel="noopener noreferrer" target="_blank">
                        <LinkedInIcon width={25} height={25} />
                        LinkedIn
                    </a>
                    <a href="https://github.com/WanTastic25"
                        className="border border-2 rounded-pill d-inline-flex align-items-center gap-2 px-4 py-2 text-decoration-none text-dark"
                        rel="noopener noreferrer" target="_blank">
                        <GitHubIcon width={25} height={25} />
                        GitHub
                    </a>
                    <a
                        href={resumeUrl}
                        download="Wan-Ashraf-Muzaffer-Resume.pdf"
                        className="border border-2 rounded-pill d-inline-flex align-items-center gap-2 px-4 py-2 text-decoration-none text-dark">
                        <FolderIcon width={25} height={25} />
                        Download Resume
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Contact
