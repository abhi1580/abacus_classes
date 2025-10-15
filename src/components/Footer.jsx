import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

function Footer() {
    return (
        <footer className="text-white mt-auto position-relative" style={{background:'linear-gradient(120deg, var(--ac-grad-end) 0%, var(--ac-grad-start) 100%)', borderTop:'4px solid var(--ac-grad-start)'}}>
            <div className="position-absolute top-0 start-0 w-100 h-100" style={{background:'radial-gradient(circle at 80% 10%, #fff1 0%, transparent 70%)', zIndex:1, pointerEvents:'none'}}></div>
            <div className="container py-5 position-relative" style={{zIndex:2}}>
                <div className="row g-4 align-items-start">
                    <div className="col-12 col-lg-4">
                        <div className="d-flex align-items-center gap-2 mb-2">
                            <img src="/shashwat-logo.png" alt="SHASHWAT Abacus Academy" height="40" className="bg-white rounded shadow-sm p-1 me-2" style={{border:'2px solid #fff'}} />
                            <h5 className="fw-bold mb-0">SHASHWAT Abacus Academy</h5>
                        </div>
                        <p className="mb-1">Building strong math foundations with proven methods.</p>
                        <p className="mb-0"><i className="bi bi-telephone"></i> +91 98765 43210</p>
                        <p className="mb-0"><i className="bi bi-envelope"></i> info@abacusclasses.com</p>
                        <p className="mb-0"><i className="bi bi-geo-alt"></i> Mumbai, Maharashtra</p>
                    </div>
                    <div className="col-6 col-lg-2">
                        <h6 className="fw-bold">Quick Links</h6>
                        <ul className="list-unstyled">
                            <li><Link className="link-light text-decoration-none" to="/">Home</Link></li>
                            <li><Link className="link-light text-decoration-none" to="/about">About</Link></li>
                            <li><Link className="link-light text-decoration-none" to="/courses">Courses</Link></li>
                            <li><Link className="link-light text-decoration-none" to="/gallery">Gallery</Link></li>
                            <li><Link className="link-light text-decoration-none" to="/contact">Contact</Link></li>
                        </ul>
                    </div>
                    <div className="col-6 col-lg-3">
                        <h6 className="fw-bold">Follow Us</h6>
                        <div className="d-flex gap-3 fs-4">
                            <a className="bg-white bg-opacity-25 rounded-circle p-2 shadow-sm text-white" href="#" aria-label="Facebook"><i className="bi bi-facebook"></i></a>
                            <a className="bg-white bg-opacity-25 rounded-circle p-2 shadow-sm text-white" href="#" aria-label="Instagram"><i className="bi bi-instagram"></i></a>
                            <a className="bg-white bg-opacity-25 rounded-circle p-2 shadow-sm text-white" href="#" aria-label="Twitter"><i className="bi bi-twitter-x"></i></a>
                            <a className="bg-white bg-opacity-25 rounded-circle p-2 shadow-sm text-white" href="#" aria-label="YouTube"><i className="bi bi-youtube"></i></a>
                        </div>
                    </div>
                    <div className="col-12 col-lg-3">
                        <h6 className="fw-bold">Subscribe</h6>
                        <form className="d-flex gap-2">
                            <input type="email" className="form-control form-control-sm rounded-pill" placeholder="Email address" />
                            <button className="btn btn-light btn-sm text-primary rounded-pill shadow-sm" type="submit">Join</button>
                        </form>
                        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="small mt-2">Get updates about batches and events.</motion.div>
                    </div>
                </div>
            </div>
            <div className="bg-black-50 py-2" style={{background:'rgba(0,0,0,0.15)'}}>
                <div className="container small text-center">© {new Date().getFullYear()} <span className="fw-bold">SHASHWAT Abacus Academy</span></div>
            </div>
        </footer>
    )
}

export default Footer



