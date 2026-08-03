import { motion } from 'motion/react'
import './SideScroll.css'

const links = [
    { id: 'About', label: 'About' },
    { id: 'Projects', label: 'Projects' },
    { id: 'Work', label: 'Work Experience' },
    { id: 'Techstack', label: 'Techstack' },
    { id: 'Contact', label: 'Contact' },
]

const CENTER_INDEX = 2
const ITEM_STEP = 64

function SideScroll({ activeSection }) {
    const activeIndex = Math.max(
        0,
        links.findIndex((link) => link.id === activeSection)
    )
    return (
        <motion.nav
            className="container-fluid min-vh-100 sticky-top sidebarScale psp-stage"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
        >
            <motion.ul
                className="psp-nav"
                animate={{ y: (CENTER_INDEX - activeIndex) * ITEM_STEP }}
                transition={{ type: 'spring', stiffness: 220, damping: 28 }}
            >
                {links.map((link, index) => {
                    const distance = Math.abs(index - activeIndex)
                    const isActive = index === activeIndex

                    return (
                        <motion.li
                            key={link.id}
                            className="psp-item"
                            layout
                            animate={{
                                opacity: isActive ? 1 : distance === 1 ? 0.55 : 0.2,
                                scale: isActive ? 1.12 : distance === 1 ? 0.98 : 0.92,
                                filter: isActive ? 'blur(0px)' : 'blur(0.15px)',
                            }}
                            transition={{ type: 'spring', stiffness: 260, damping: 26 }}
                        >
                            <a
                                className={`TextScale side-link ${isActive ? 'is-active' : ''}`}
                                href={`#${link.id}`}
                            >
                                {link.label}
                            </a>
                        </motion.li>
                    )
                })}
            </motion.ul>
        </motion.nav>
    )
}

export default SideScroll