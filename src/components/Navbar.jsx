
import { motion } from 'framer-motion'
import { Link, NavLink } from 'react-router-dom'


import { useEffect, useState } from 'react'

function Navbar() {
    const [scrolled, setScrolled] = useState(false);
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

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`navbar navbar-expand-lg sticky-top shadow-lg transition-navbar ${scrolled ? 'navbar-white' : 'navbar-transparent'}`}
            style={{backdropFilter:'blur(12px)', background: scrolled ? 'rgba(255,255,255,0.95)' : 'rgba(255,255,255,0.25)', borderBottom: scrolled ? '1.5px solid #eee' : 'none', transition:'all .3s'}}>
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
                        <li className="nav-item"><NavLink end className={({isActive}) => `nav-link px-3 position-relative${isActive ? ' active-link' : ''}`} to="/" onClick={closeOnMobile}>Home</NavLink></li>
                        <li className="nav-item"><NavLink className={({isActive}) => `nav-link px-3 position-relative${isActive ? ' active-link' : ''}`} to="/about" onClick={closeOnMobile}>About Us</NavLink></li>
                        <li className="nav-item"><NavLink className={({isActive}) => `nav-link px-3 position-relative${isActive ? ' active-link' : ''}`} to="/gallery" onClick={closeOnMobile}>Gallery</NavLink></li>
                        <li className="nav-item"><NavLink className={({isActive}) => `nav-link px-3 position-relative${isActive ? ' active-link' : ''}`} to="/franchisee" onClick={closeOnMobile}>Franchisee</NavLink></li>
                        <li className="nav-item"><NavLink className={({isActive}) => `nav-link px-3 position-relative${isActive ? ' active-link' : ''}`} to="/courses" onClick={closeOnMobile}>Courses</NavLink></li>
                        <li className="nav-item me-lg-3"><NavLink className={({isActive}) => `nav-link px-3 position-relative${isActive ? ' active-link' : ''}`} to="/contact" onClick={closeOnMobile}>Contact</NavLink></li>
                        <li className="nav-item d-none d-lg-block">
                            <Link to="/contact" className="btn btn-light text-primary fw-semibold shadow-sm px-4 rounded-pill" onClick={closeOnMobile}>Enroll Now</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        )

/* Add this CSS to your main CSS file for underline animation */
/*
.nav-link.active-link::after {
    content: '';
    display: block;
    width: 60%;
    height: 3px;
    margin: 0 auto 0.25em auto;
    background: linear-gradient(90deg, var(--ac-grad-start), var(--ac-grad-end));
    border-radius: 2px;
    transition: width .3s;
}
.nav-link.position-relative {
    transition: color .2s;
}
*/
}

export default Navbar



