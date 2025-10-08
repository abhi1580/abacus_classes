import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

function Footer() {
    return (
        <footer className="text-white mt-auto bg-gradient-brand">
            <div className="container py-5">
                <div className="row g-4 align-items-start">
                    <div className="col-12 col-lg-4">
                        <div className="d-flex align-items-center gap-2 mb-2">
                            {/* <img src="/shashwat-logo.png" alt="SHASHWAT Abacus Academy" height="40" /> */}
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
                            <a className="link-light" href="#" aria-label="Facebook"><i className="bi bi-facebook"></i></a>
                            <a className="link-light" href="#" aria-label="Instagram"><i className="bi bi-instagram"></i></a>
                            <a className="link-light" href="#" aria-label="Twitter"><i className="bi bi-twitter-x"></i></a>
                            <a className="link-light" href="#" aria-label="YouTube"><i className="bi bi-youtube"></i></a>
                        </div>
                    </div>
                    <div className="col-12 col-lg-3">
                        <h6 className="fw-bold">Subscribe</h6>
                        <form className="d-flex gap-2">
                            <input type="email" className="form-control form-control-sm" placeholder="Email address" />
                            <button className="btn btn-light btn-sm text-primary" type="submit">Join</button>
                        </form>
                        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="small mt-2">Get updates about batches and events.</motion.div>
                    </div>
                </div>
            </div>
            <div className="bg-black-50 py-2">
                <div className="container small text-center">© {new Date().getFullYear()} SHASHWAT Abacus Academy</div>
            </div>
        </footer>
    )
}

export default Footer



