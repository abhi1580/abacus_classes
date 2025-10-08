import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

function Home() {
    return (
        <>
            <section className="bg-hero text-white py-5">
                <div className="container py-5">
                    <div className="row align-items-center">
                        <div className="col-12 col-lg-7">
                            <motion.h1
                                initial={{ opacity: 0, y: 24 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6 }}
                                viewport={{ once: true }}
                                className="display-5 fw-bold"
                            >
                                SHASHWAT Abacus Academy
                            </motion.h1>
                            <motion.p
                                initial={{ opacity: 0, y: 24 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.1 }}
                                viewport={{ once: true }}
                                className="lead"
                            >
                                Boost concentration, memory, and mental math skills with our expert-guided abacus training.
                            </motion.p>
                            <div className="d-flex gap-3 mt-3">
                                <motion.div
                                    initial={{ opacity: 0, y: 24 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: 0.2 }}
                                    viewport={{ once: true }}
                                >
                                    <Link className="btn btn-gradient btn-lg fw-semibold" to="/contact">Join Now</Link>
                                </motion.div>
                                <motion.div
                                    initial={{ opacity: 0, y: 24 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: 0.3 }}
                                    viewport={{ once: true }}
                                >
                                    <Link className="btn btn-light btn-lg text-primary fw-semibold" to="/courses">View Courses</Link>
                                </motion.div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-5 text-center mt-4 mt-lg-0">
                            <motion.img
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.6 }}
                                viewport={{ once: true }}
                                className="img-fluid rounded shadow"
                                src="/hero-abacus.png" alt="Abacus banner" />
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-5">
                <div className="container">
                    <div className="row g-4">
                        {[
                            { t: 'Experienced Instructors', d: 'Certified trainers with years of experience in child-centered learning.', icon: 'bi-mortarboard' },
                            { t: 'Structured Curriculum', d: 'Progressive levels from Beginner to Advanced with practical assessments.', icon: 'bi-journal-check' },
                            { t: 'Holistic Growth', d: 'Improves focus, creativity, and confidence through engaging activities.', icon: 'bi-stars' },
                        ].map((item, i) => (
                            <div className="col-12 col-md-4" key={item.t}>
                                <motion.div
                                    className="card h-100"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: i * 0.1 }}
                                    viewport={{ once: true }}
                                >
                                    <div className="card-body">
                                        <div className="d-flex align-items-center gap-3 mb-2">
                                            <span className="icon-circle"><i className={`bi ${item.icon}`}></i></span>
                                            <h5 className="card-title mb-0">{item.t}</h5>
                                        </div>
                                        <p className="card-text">{item.d}</p>
                                    </div>
                                </motion.div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="py-5 bg-white">
                <div className="container">
                    <div className="row align-items-center g-4">
                        <div className="col-lg-6">
                            <h2 className="mb-3 text-brand">Why Choose SHASHWAT?</h2>
                            <ul className="list-unstyled lh-lg mb-0">
                                <li className="d-flex align-items-start gap-2"><i className="bi bi-check2-circle text-success fs-5"></i><span>Small batch sizes for individual attention.</span></li>
                                <li className="d-flex align-items-start gap-2"><i className="bi bi-check2-circle text-success fs-5"></i><span>Outcome-focused weekly assessments and feedback.</span></li>
                                <li className="d-flex align-items-start gap-2"><i className="bi bi-check2-circle text-success fs-5"></i><span>Regular parent updates and progress tracking.</span></li>
                                <li className="d-flex align-items-start gap-2"><i className="bi bi-check2-circle text-success fs-5"></i><span>Fun activities that build speed, accuracy, and confidence.</span></li>
                            </ul>
                        </div>
                        <div className="col-lg-6">
                            <div className="row g-3">
                                <div className="col-6">
                                    <motion.div className="border rounded-4 text-center p-4 bg-light h-100"
                                        initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} viewport={{ once: true }}>
                                        <div className="display-6 fw-bold text-brand">5x</div>
                                        <div className="small">Faster Mental Math</div>
                                    </motion.div>
                                </div>
                                <div className="col-6">
                                    <motion.div className="border rounded-4 text-center p-4 bg-light h-100"
                                        initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.1 }} viewport={{ once: true }}>
                                        <div className="display-6 fw-bold text-brand">95%</div>
                                        <div className="small">Parent Satisfaction</div>
                                    </motion.div>
                                </div>
                                <div className="col-6">
                                    <motion.div className="border rounded-4 text-center p-4 bg-light h-100"
                                        initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.2 }} viewport={{ once: true }}>
                                        <div className="display-6 fw-bold text-brand">1:10</div>
                                        <div className="small">Trainer:Student Ratio</div>
                                    </motion.div>
                                </div>
                                <div className="col-6">
                                    <motion.div className="border rounded-4 text-center p-4 bg-light h-100"
                                        initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.3 }} viewport={{ once: true }}>
                                        <div className="display-6 fw-bold text-brand">1000+</div>
                                        <div className="small">Students Trained</div>
                                    </motion.div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section className="py-5">
                <div className="container">
                    <h2 className="mb-4 text-brand">What Parents Say</h2>
                    <div className="row g-4">
                        {[
                            { q: '“My child\u2019s confidence in math has skyrocketed. The classes are engaging and effective.”', a: '— Neha, Parent' },
                            { q: '“Amazing improvement in speed and focus within a few months!”', a: '— Rohan, Parent' },
                            { q: '“Professional trainers and a structured program. Highly recommended.”', a: '— Aisha, Parent' },
                        ].map((t, i) => (
                            <div className="col-md-4" key={i}>
                                <motion.div className="card h-100 shadow-sm"
                                    initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: i * 0.1 }} viewport={{ once: true }}>
                                    <div className="card-body">
                                        <p className="mb-3">{t.q}</p>
                                        <div className="fw-semibold">{t.a}</div>
                                    </div>
                                </motion.div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* How It Works */}
            <section className="py-5 bg-light">
                <div className="container">
                    <h2 className="mb-4 text-brand">How It Works</h2>
                    <div className="row g-4">
                        <div className="col-md-3">
                            <div className="text-center p-4 h-100 border rounded-3 bg-white">
                                <div className="display-6 mb-2">1</div>
                                <div className="fw-semibold">Free Assessment</div>
                                <div className="small text-muted">Understand your childs current level.</div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="text-center p-4 h-100 border rounded-3 bg-white">
                                <div className="display-6 mb-2">2</div>
                                <div className="fw-semibold">Enroll & Schedule</div>
                                <div className="small text-muted">Choose a batch time that works for you.</div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="text-center p-4 h-100 border rounded-3 bg-white">
                                <div className="display-6 mb-2">3</div>
                                <div className="fw-semibold">Weekly Sessions</div>
                                <div className="small text-muted">Interactive classes with practice sheets.</div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="text-center p-4 h-100 border rounded-3 bg-white">
                                <div className="display-6 mb-2">4</div>
                                <div className="fw-semibold">Track Progress</div>
                                <div className="small text-muted">Regular feedback and certificates.</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Band */}
            <section className="py-5 text-white bg-gradient-brand">
                <div className="container">
                    <div className="d-lg-flex align-items-center justify-content-between gap-3">
                        <h3 className="mb-3 mb-lg-0">Ready to boost your childs mathematical speed?</h3>
                        <Link className="btn btn-light fw-semibold" to="/contact">Book a Free Trial</Link>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home



