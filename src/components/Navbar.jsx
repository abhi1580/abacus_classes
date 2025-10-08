
import { motion } from 'framer-motion'
import { Link, NavLink } from 'react-router-dom'

function Navbar() {
    const closeOnMobile = () => {
        const nav = document.getElementById('navbarsExample')
        if (nav && nav.classList.contains('show')) {
            const bs = window.bootstrap
            if (bs && bs.Collapse) {
                const instance = bs.Collapse.getInstance(nav) || new bs.Collapse(nav, { toggle: false })
                instance.hide()
            } else {
                const toggler = document.querySelector('[data-bs-target="#navbarsExample"]')
                if (toggler) toggler.click()
            }
        }
    }
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-gradient-brand sticky-top shadow-sm">
            <div className="container">
                <Link className="navbar-brand fw-bold d-flex align-items-center gap-2" to="/">
                    <motion.img initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }} src="/shashwat-logo.png" alt="SHASHWAT Abacus Academy" height="70" width="100%" />
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample"
                    aria-controls="navbarsExample" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarsExample">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0 align-items-lg-center">
                        <li className="nav-item"><NavLink end className="nav-link" to="/" onClick={closeOnMobile}>Home</NavLink></li>
                        <li className="nav-item"><NavLink className="nav-link" to="/about" onClick={closeOnMobile}>About Us</NavLink></li>
                        <li className="nav-item"><NavLink className="nav-link" to="/courses" onClick={closeOnMobile}>Courses</NavLink></li>
                        <li className="nav-item"><NavLink className="nav-link" to="/gallery" onClick={closeOnMobile}>Gallery</NavLink></li>
                        <li className="nav-item me-lg-3"><NavLink className="nav-link" to="/contact" onClick={closeOnMobile}>Contact</NavLink></li>
                        <li className="nav-item d-none d-lg-block">
                            <Link to="/contact" className="btn btn-light text-primary fw-semibold" onClick={closeOnMobile}>Enroll Now</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar



