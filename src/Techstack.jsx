import CssIcon from './assets/images/techIcons/css-icon.svg?react'
import HtmlIcon from './assets/images/techIcons/html-icon.svg?react'
import JsIcon from './assets/images/techIcons/javascript-programming-language-icon.svg?react'
import CsharpIcon from './assets/images/techIcons/logo_C_sharp.svg?react'
import JavaIcon from './assets/images/techIcons/java-programming-language-icon.svg?react'
import PhpIcon from './assets/images/techIcons/php-programming-language-icon.svg?react'

import ReactIcon from './assets/images/techIcons/react-js-icon.svg?react'
import LaravelIcon from './assets/images/techIcons/laravel-icon.svg?react'
import BootStrapIcon from './assets/images/techIcons/bootstrap-5-logo-icon.svg?react'
import DotNetIcon from './assets/images/techIcons/DotNet_logo.svg?react'

import GodotIcon from './assets/images/techIcons/godot-game-engine-icon.svg?react'
import MySqlIcon from './assets/images/techIcons/mysql-icon.svg?react'
import UnityIcon from './assets/images/techIcons/unity-game-engine-icon.svg?react'
import GitHubIcon from './assets/images/techIcons/github-icon.svg?react'

function Techstack() {
    return (
        <div className="container-fluid p-5 min-vh-100" id="Techstack">
            <h1 className="d-flex justify-content-center pb-5">Techstack</h1>

            <div className="row justify-content-center g-4">
                <div className="col-auto">
                    <div className="card">
                        <h5 className="card-title text-center mt-3">Languages</h5>
                        <div className="card-body">
                            {/* Put Icons Here */}
                            <div className="d-flex flex-wrap justify-content-center" style={{ gap: "10px" }}>
                                <div className="border d-flex flex-column justify-content-center align-items-center align-content-center p-2 rounded" style={{ minWidth: "100px", minHeight: "100px" }}>
                                    <CssIcon width={50} height={50} />
                                    <p className='m-0 mt-1'>CSS</p>
                                </div>
                                <div className="border d-flex flex-column justify-content-center align-items-center align-content-center p-2 rounded" style={{ minWidth: "100px", minHeight: "100px" }}>
                                    <HtmlIcon width={50} height={50} />
                                    <p className='m-0 mt-1'>HTML</p>
                                </div>
                                <div className="border d-flex flex-column justify-content-center align-items-center align-content-center p-2 rounded" style={{ minWidth: "100px", minHeight: "100px" }}>
                                    <JsIcon width={50} height={50} />
                                    <p className='m-0 mt-1'>JavaScript</p>
                                </div>
                                <div className="border d-flex flex-column justify-content-center align-items-center align-content-center p-2 rounded" style={{ minWidth: "100px", minHeight: "100px" }}>
                                    <CsharpIcon width={50} height={50} />
                                    <p className='m-0 mt-1'>C#</p>
                                </div>
                                <div className="border d-flex flex-column justify-content-center align-items-center align-content-center p-2 rounded" style={{ minWidth: "100px", minHeight: "100px" }}>
                                    <JavaIcon width={50} height={50} />
                                    <p className='m-0 mt-1'>Java</p>
                                </div>
                                <div className="border d-flex flex-column justify-content-center align-items-center align-content-center p-2 rounded" style={{ minWidth: "100px", minHeight: "100px" }}>
                                    <PhpIcon width={50} height={50} />
                                    <p className='m-0 mt-1'>PHP</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-auto">
                    <div className="card">
                        <h5 className="card-title text-center mt-3">Frameworks</h5>
                        <div className="card-body">
                            {/* Put Icons Here */}
                            <div className="d-flex flex-wrap justify-content-center" style={{ gap: "10px" }}>
                                <div className="border d-flex flex-column justify-content-center align-items-center align-content-center p-2 rounded" style={{ minWidth: "100px", minHeight: "100px" }}>
                                    <ReactIcon width={50} height={50} />
                                    <p className='m-0 mt-1'>React</p>
                                </div>
                                <div className="border d-flex flex-column justify-content-center align-items-center align-content-center p-2 rounded" style={{ minWidth: "100px", minHeight: "100px" }}>
                                    <LaravelIcon width={50} height={50} />
                                    <p className='m-0 mt-1'>Laravel</p>
                                </div>
                                <div className="border d-flex flex-column justify-content-center align-items-center align-content-center p-2 rounded" style={{ minWidth: "100px", minHeight: "100px" }}>
                                    <BootStrapIcon width={50} height={50} />
                                    <p className='m-0 mt-1'>Bootstrap</p>
                                </div>
                                <div className="border d-flex flex-column justify-content-center align-items-center align-content-center p-2 rounded" style={{ minWidth: "100px", minHeight: "100px" }}>
                                    <DotNetIcon width={50} height={50} />
                                    <p className='m-0 mt-1'>ASP.NET</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-auto">
                    <div className="card">
                        <h5 className="card-title text-center mt-3">Others</h5>
                        <div className="card-body">
                            {/* Put Icons Here */}
                            <div className="d-flex flex-wrap justify-content-center" style={{ gap: "10px" }}>
                                <div className="border d-flex flex-column justify-content-center align-items-center align-content-center p-2 rounded" style={{ minWidth: "100px", minHeight: "100px" }}>
                                    <MySqlIcon width={50} height={50} />
                                    <p className='m-0 mt-1'>MySQL</p>
                                </div>
                                <div className="border d-flex flex-column justify-content-center align-items-center align-content-center p-2 rounded" style={{ minWidth: "100px", minHeight: "100px" }}>
                                    <UnityIcon width={50} height={50} />
                                    <p className='m-0 mt-1'>Unity</p>
                                </div>
                                <div className="border d-flex flex-column justify-content-center align-items-center align-content-center p-2 rounded" style={{ minWidth: "100px", minHeight: "100px" }}>
                                    <GodotIcon width={50} height={50} />
                                    <p className='m-0 mt-1'>Godot</p>
                                </div>
                                <div className="border d-flex flex-column justify-content-center align-items-center align-content-center p-2 rounded" style={{ minWidth: "100px", minHeight: "100px" }}>
                                    <GitHubIcon width={50} height={50} />
                                    <p className='m-0 mt-1'>GitHub</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Techstack