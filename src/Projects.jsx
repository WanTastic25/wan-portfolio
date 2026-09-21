import { motion as Motion, useInView } from 'motion/react';
import { useEffect, useRef, useState } from 'react';
import GitHubIcon from './assets/images/techIcons/github-icon.svg?react';

const GITHUB_REPOS_URL = 'https://api.github.com/users/WanTastic25/repos?sort=pushed&direction=desc&per_page=100';
const MAX_PROJECTS = 6;

const cardVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.3 } },
};

function formatDate(dateString) {
    return new Intl.DateTimeFormat('en', {
        month: 'short',
        year: 'numeric',
    }).format(new Date(dateString));
}

function Projects() {
    const titleRef = useRef(null);
    const cardRef = useRef(null);
    const titleInView = useInView(titleRef, { amount: 0.3 });
    const cardInView = useInView(cardRef, { amount: 0.6 });
    const [projects, setProjects] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        const controller = new AbortController();

        async function loadProjects() {
            try {
                const response = await fetch(GITHUB_REPOS_URL, {
                    signal: controller.signal,
                    headers: {
                        Accept: 'application/vnd.github+json',
                    },
                });

                if (!response.ok) {
                    throw new Error('GitHub projects could not be loaded.');
                }

                const repos = await response.json();
                const visibleRepos = repos
                    .filter((repo) => !repo.fork && !repo.archived)
                    .slice(0, MAX_PROJECTS);

                setProjects(visibleRepos);
            } catch (err) {
                if (err.name !== 'AbortError') {
                    setError(err.message);
                }
            } finally {
                if (!controller.signal.aborted) {
                    setIsLoading(false);
                }
            }
        }

        loadProjects();

        return () => controller.abort();
    }, []);

    return (
        <div className="container-fluid p-5 min-vh-100 align-content-center" id="Projects">
            <Motion.div
                className="div"
                ref={titleRef}
                initial={{ opacity: 0, y: -50 }}
                animate={titleInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8 }}>
                <h1 className="d-flex justify-content-center pb-5">Projects</h1>
            </Motion.div>
            <Motion.div className="row g-4"
                ref={cardRef}
                initial="hidden"
                animate={cardInView ? "visible" : "hidden"}
                variants={{
                    visible: {
                        transition: {
                            staggerChildren: 0.2,
                        }
                    }
                }}>
                {isLoading && [1, 2, 3].map((item) => (
                    <Motion.div className="col-12 col-md-6 col-lg-4" key={item} variants={cardVariants}>
                        <div className="card project-card card-hover">
                            <div className="project-card-visual placeholder-glow">
                                <span className="placeholder col-4 rounded-circle"></span>
                            </div>
                            <div className="card-body">
                                <p className="placeholder-glow">
                                    <span className="placeholder col-8"></span>
                                    <span className="placeholder col-12"></span>
                                    <span className="placeholder col-9"></span>
                                </p>
                            </div>
                        </div>
                    </Motion.div>
                ))}

                {!isLoading && error && (
                    <Motion.div className="col-12" variants={cardVariants}>
                        <div className="alert alert-warning mb-0" role="alert">
                            {error}
                        </div>
                    </Motion.div>
                )}

                {!isLoading && !error && projects.length === 0 && (
                    <Motion.div className="col-12" variants={cardVariants}>
                        <div className="alert alert-light border mb-0" role="alert">
                            No public projects found.
                        </div>
                    </Motion.div>
                )}

                {!isLoading && !error && projects.map((project) => (
                    <Motion.div className="col-12 col-md-6 col-lg-4" key={project.id} variants={cardVariants}>
                        <div className="card project-card card-hover h-100">
                            <div className="project-card-visual">
                                <GitHubIcon width={58} height={58} />
                            </div>
                            <div className="card-body d-flex flex-column">
                                <div className="d-flex justify-content-between align-items-start gap-2 mb-3">
                                    <span className="badge border text-dark rounded-pill">
                                        {project.language || 'Repository'}
                                    </span>
                                    <small className="text-body-secondary">
                                        {formatDate(project.pushed_at)}
                                    </small>
                                </div>
                                <h5 className="card-title">{project.name}</h5>
                                <p className="card-text project-card-description">
                                    {project.description || 'No description added yet.'}
                                </p>
                                <div className="d-flex justify-content-between align-items-center mt-auto pt-3">
                                    <small className="text-body-secondary">
                                        Stars {project.stargazers_count} | Forks {project.forks_count}
                                    </small>
                                    <a
                                        className="btn btn-outline-dark btn-sm"
                                        href={project.html_url}
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        View Code
                                    </a>
                                </div>
                            </div>
                        </div>
                    </Motion.div>
                ))}
            </Motion.div>
        </div>
    )
}

export default Projects
