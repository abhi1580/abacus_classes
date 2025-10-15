import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

function About() {
    return (
        <>
            {/* About Hero */}
            <section className="py-5 position-relative" style={{ background: 'linear-gradient(120deg, var(--ac-grad-end) 0%, var(--ac-grad-start) 100%)' }}>
                <div className="container text-center text-white py-5 position-relative" style={{zIndex:2}}>
                    <motion.h1 initial={{ opacity: 0, y: 32 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} viewport={{ once: true }} className="display-4 fw-bold mb-2">
                        About <span className="text-accent">SHASHWAT Abacus Academy</span>
                    </motion.h1>
                    <motion.p initial={{ opacity: 0, y: 32 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }} viewport={{ once: true }} className="lead mb-4" style={{ fontSize: '1.25rem' }}>
                        Empowering young minds through proven abacus methodology, modern pedagogy, and personal attention.
                    </motion.p>
                    <motion.div initial={{ opacity: 0, y: 32 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }} viewport={{ once: true }}>
                        <Link className="btn btn-light text-primary fw-semibold px-4 py-2 shadow" to="/contact">Talk to Us</Link>
                    </motion.div>
                </div>
                <div className="position-absolute top-0 start-0 w-100 h-100" style={{background:'radial-gradient(circle at 70% 30%, #fff2 0%, transparent 70%)', zIndex:1}}></div>
            </section>

            {/* Mission & Vision */}
            <section className="py-5" style={{ background: 'var(--ac-light)' }}>
                <div className="container">
                    <div className="row g-4">
                        <div className="col-md-6">
                            <motion.div className="card h-100 shadow-sm" initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
                                <div className="card-body">
                                    <div className="d-flex align-items-center gap-3 mb-2">
                                        <span className="icon-circle bg-gradient-brand text-white shadow-sm"><i className="bi bi-bullseye"></i></span>
                                        <h5 className="card-title fw-semibold mb-0">Our Mission</h5>
                                    </div>
                                    <p className="card-text">To build confidence and a love for numbers by nurturing analytical thinking, concentration, and creativity.</p>
                                </div>
                            </motion.div>
                        </div>
                        <div className="col-md-6">
                            <motion.div className="card h-100 shadow-sm" initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }}>
                                <div className="card-body">
                                    <div className="d-flex align-items-center gap-3 mb-2">
                                        <span className="icon-circle bg-gradient-brand text-white shadow-sm"><i className="bi bi-eye"></i></span>
                                        <h5 className="card-title fw-semibold mb-0">Our Vision</h5>
                                    </div>
                                    <p className="card-text">To be a leading institute for holistic brain development through engaging and effective abacus education.</p>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Story & Methodology */}
            <section className="py-5" style={{ background: 'var(--ac-light)' }}>
                <div className="container">
                    <div className="row g-4">
                        <div className="col-lg-6">
                            <motion.div className="card h-100 shadow-sm" initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
                                <div className="card-body">
                                    <div className="d-flex align-items-center gap-3 mb-2">
                                        <span className="icon-circle bg-gradient-brand text-white shadow-sm"><i className="bi bi-book-half"></i></span>
                                        <h3 className="card-title text-brand mb-0">Our Story</h3>
                                    </div>
                                    <p className="card-text">Founded by passionate educators, SHASHWAT began with a simple idea: make mathematics joyful and intuitive. Over the years, we have refined our curriculum to balance traditional abacus practice with brain gym activities, puzzles, and real-life applications.</p>
                                </div>
                            </motion.div>
                        </div>
                        <div className="col-lg-6">
                            <motion.div className="card h-100 shadow-sm" initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }}>
                                <div className="card-body">
                                    <div className="d-flex align-items-center gap-3 mb-2">
                                        <span className="icon-circle bg-gradient-brand text-white shadow-sm"><i className="bi bi-diagram-3"></i></span>
                                        <h3 className="card-title text-brand mb-0">Our Methodology</h3>
                                    </div>
                                    <ul className="mb-0 lh-lg">
                                        <li>Concept → Practice → Speed → Accuracy → Application</li>
                                        <li>Spaced repetition with weekly targets and gamified drills</li>
                                        <li>Personalized attention through small batch sizes</li>
                                        <li>Regular assessments and parent feedback loops</li>
                                    </ul>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Certifications & Highlights */}
            <div className="w-100" style={{height:'32px',background:'linear-gradient(90deg, var(--ac-grad-end) 0%, var(--ac-grad-start) 100%)'}}></div>
            <section className="py-5" style={{ background: 'linear-gradient(120deg, var(--ac-grad-start) 0%, var(--ac-grad-end) 100%)' }}>
                <div className="container">
                    <div className="row g-4">
                        <div className="col-md-4">
                            <motion.div className="card h-100 shadow-sm" initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.45 }}>
                                <div className="card-body">
                                    <div className="d-flex align-items-center gap-3 mb-2">
                                        <span className="icon-circle bg-white text-brand shadow-sm"><i className="bi bi-patch-check"></i></span>
                                        <h5 className="card-title fw-semibold mb-0">Certified Trainers</h5>
                                    </div>
                                    <p className="card-text mb-0">Our instructors hold nationally recognized certifications and undergo continuous training.</p>
                                </div>
                            </motion.div>
                        </div>
                        <div className="col-md-4">
                            <motion.div className="card h-100 shadow-sm" initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.45, delay: 0.1 }}>
                                <div className="card-body">
                                    <div className="d-flex align-items-center gap-3 mb-2">
                                        <span className="icon-circle bg-white text-brand shadow-sm"><i className="bi bi-trophy"></i></span>
                                        <h5 className="card-title fw-semibold mb-0">Competition Prep</h5>
                                    </div>
                                    <p className="card-text mb-0">Guidance for city, state, and national-level abacus and mental math competitions.</p>
                                </div>
                            </motion.div>
                        </div>
                        <div className="col-md-4">
                            <motion.div className="card h-100 shadow-sm" initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.45, delay: 0.2 }}>
                                <div className="card-body">
                                    <div className="d-flex align-items-center gap-3 mb-2">
                                        <span className="icon-circle bg-white text-brand shadow-sm"><i className="bi bi-people"></i></span>
                                        <h5 className="card-title fw-semibold mb-0">Parental Engagement</h5>
                                    </div>
                                    <p className="card-text mb-0">Monthly progress reports and open sessions to discuss strategies at home.</p>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <div className="w-100" style={{height:'32px',background:'linear-gradient(90deg, var(--ac-grad-start) 0%, var(--ac-grad-end) 100%)'}}></div>
            <section className="py-5" style={{ background: 'var(--ac-light)' }}>
                <div className="container">
                    <motion.div className="card shadow-sm" initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
                        <div className="card-body">
                            <div className="d-flex align-items-center gap-3 mb-2">
                                <span className="icon-circle bg-gradient-brand text-white shadow-sm"><i className="bi bi-question-circle"></i></span>
                                <h3 className="mb-0 text-brand">Frequently Asked Questions</h3>
                            </div>
                            <div className="accordion" id="faq">
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="q1">
                                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#a1" aria-expanded="true" aria-controls="a1">
                                            What is the right age to start abacus?
                                        </button>
                                    </h2>
                                    <div id="a1" className="accordion-collapse collapse show" aria-labelledby="q1" data-bs-parent="#faq">
                                        <div className="accordion-body">Children aged 5–12 benefit the most as they develop number sense and visualization skills.</div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="q2">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#a2" aria-expanded="false" aria-controls="a2">
                                            How many classes per week?
                                        </button>
                                    </h2>
                                    <div id="a2" className="accordion-collapse collapse" aria-labelledby="q2" data-bs-parent="#faq">
                                        <div className="accordion-body">Typically 2 sessions per week with home practice sheets provided after each session.</div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="q3">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#a3" aria-expanded="false" aria-controls="a3">
                                            Do you offer online classes?
                                        </button>
                                    </h2>
                                    <div id="a3" className="accordion-collapse collapse" aria-labelledby="q3" data-bs-parent="#faq">
                                        <div className="accordion-body">Yes, we offer both in-person and live online classes with the same curriculum and support.</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>
        </>
    )
}

export default About



