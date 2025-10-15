import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

import sticker from '../assets/gallery/sticker.jpg';
import gamaAbacus from '../assets/gallery/gama-abacus-8457067_1280.jpg';
import children from '../assets/gallery/children-6744948_1280.png';
import img2589 from '../assets/gallery/2589676_15595.jpg';
import img2149a from '../assets/gallery/2149091515.jpg';
import img2148a from '../assets/gallery/2148524674.jpg';
import { useEffect, useRef } from 'react';

function Home() {
    const carouselRef = useRef(null);
    const carouselInstance = useRef(null);
    useEffect(() => {
        // Delay to ensure DOM and Bootstrap JS are ready
        const timer = setTimeout(() => {
            if (window.bootstrap && window.bootstrap.Carousel && carouselRef.current) {
                // Destroy previous instance if exists
                if (carouselInstance.current) {
                    carouselInstance.current.dispose();
                }
                carouselInstance.current = window.bootstrap.Carousel.getOrCreateInstance(carouselRef.current, { interval: 3000 });
            }
        }, 100);
        return () => {
            clearTimeout(timer);
            if (carouselInstance.current) {
                carouselInstance.current.dispose();
                carouselInstance.current = null;
            }
        };
    }, []);

    return (
        <>
            {/* Hero Section with Full Background Carousel */}
            <section className="position-relative overflow-hidden" style={{ minHeight: '440px', maxHeight: '600px' }}>
                {/* Carousel as background */}
                <div
                    id="heroCarousel"
                    className="carousel slide carousel-fade h-100 w-100 position-absolute top-0 start-0"
                    data-bs-ride="carousel"
                    ref={carouselRef}
                    style={{ zIndex: 1, height: '100%', width: '100%' }}
                >
                    {/* Indicators */}
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#heroCarousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#heroCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#heroCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        <button type="button" data-bs-target="#heroCarousel" data-bs-slide-to="3" aria-label="Slide 4"></button>
                        <button type="button" data-bs-target="#heroCarousel" data-bs-slide-to="4" aria-label="Slide 5"></button>
                        <button type="button" data-bs-target="#heroCarousel" data-bs-slide-to="5" aria-label="Slide 6"></button>
                    </div>
                    <div className="carousel-inner h-100 w-100">
                        <div className="carousel-item active h-100 w-100">
                            <img src={img2148a} className="d-block w-100 h-100" alt="2148524674" style={{ objectFit: 'cover', filter: 'brightness(0.55)' }} />
                        </div>
                        <div className="carousel-item h-100 w-100">
                            <img src={img2149a} className="d-block w-100 h-100" alt="2149091515" style={{ objectFit: 'cover', filter: 'brightness(0.55)' }} />
                        </div>
                        <div className="carousel-item h-100 w-100">
                            <img src={img2589} className="d-block w-100 h-100" alt="2589676_15595" style={{ objectFit: 'cover', filter: 'brightness(0.55)' }} />
                        </div>
                        <div className="carousel-item h-100 w-100">
                            <img src={children} className="d-block w-100 h-100" alt="children-6744948_1280" style={{ objectFit: 'cover', filter: 'brightness(0.55)' }} />
                        </div>
                        <div className="carousel-item h-100 w-100">
                            <img src={gamaAbacus} className="d-block w-100 h-100" alt="gama-abacus-8457067_1280" style={{ objectFit: 'cover', filter: 'brightness(0.55)' }} />
                        </div>
                        <div className="carousel-item h-100 w-100">
                            <img src={sticker} className="d-block w-100 h-100" alt="sticker" style={{ objectFit: 'cover', filter: 'brightness(0.55)' }} />
                        </div>
                    </div>
                    <button
                        className="carousel-control-prev bg-white bg-opacity-75 rounded-circle border shadow d-none d-md-flex"
                        type="button"
                        style={{ zIndex: 2, width: '48px', height: '48px', top: '50%', transform: 'translateY(-50%)' }}
                        onClick={() => {
                            if (carouselInstance.current) {
                                carouselInstance.current.prev();
                            }
                        }}
                    >
                        <span className="carousel-control-prev-icon" aria-hidden="true" style={{ filter: 'invert(1)' }}></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button
                        className="carousel-control-next bg-white bg-opacity-75 rounded-circle border shadow d-none d-md-flex"
                        type="button"
                        style={{ zIndex: 2, width: '48px', height: '48px', top: '50%', transform: 'translateY(-50%)' }}
                        onClick={() => {
                            if (carouselInstance.current) {
                                carouselInstance.current.next();
                            }
                        }}
                    >
                        <span className="carousel-control-next-icon" aria-hidden="true" style={{ filter: 'invert(1)' }}></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
                {/* Overlayed Hero Content */}
                <div className="container position-relative h-100 d-flex align-items-center" style={{ zIndex: 3, minHeight: '440px' }}>
                    <div className="row w-100">
                        <div className="col-lg-8 mx-auto text-center text-white" style={{ textShadow: '0 2px 16px #0008' }}>
                            <motion.h1 initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} viewport={{ once: true }} className="display-3 fw-bold mb-3">
                                Shashwat Abacus Academy
                            </motion.h1>
                            <motion.p initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }} viewport={{ once: true }} className="lead mb-4">
                                Make your child 10x better, faster & smarter with India’s most trusted abacus program.
                            </motion.p>
                            <div className="d-flex gap-3 flex-wrap justify-content-center">
                                <Link className="btn btn-light text-primary btn-lg fw-semibold px-4" to="/contact">Book Free Trial</Link>
                                <Link className="btn btn-outline-light btn-lg fw-semibold px-4" to="/courses">View Courses</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Benefits Section */}
            <section className="py-5" style={{ background: 'var(--ac-light)' }}>
                <div className="container">
                    <div className="row g-4 text-center">
                        <div className="col-md-4">
                            <div className="card h-100 border-0 shadow-sm bg-gradient-brand text-white">
                                <div className="card-body">
                                    <span className="display-3 mb-2 d-block"><i className="bi bi-mortarboard"></i></span>
                                    <h5 className="fw-bold">Experienced Instructors</h5>
                                    <p className="mb-0">Certified trainers with years of experience in child-centered learning.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card h-100 border-0 shadow-sm bg-white text-brand">
                                <div className="card-body">
                                    <span className="display-3 mb-2 d-block"><i className="bi bi-journal-check"></i></span>
                                    <h5 className="fw-bold">Structured Curriculum</h5>
                                    <p className="mb-0">Progressive levels from Beginner to Advanced with practical assessments.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card h-100 border-0 shadow-sm bg-gradient-brand text-white">
                                <div className="card-body">
                                    <span className="display-3 mb-2 d-block"><i className="bi bi-stars"></i></span>
                                    <h5 className="fw-bold">Holistic Growth</h5>
                                    <p className="mb-0">Improves focus, creativity, and confidence through engaging activities.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            {/* Why Choose Us & Stats */}
            <section className="py-5" style={{ background: 'linear-gradient(120deg, var(--ac-grad-end) 0%, var(--ac-grad-start) 100%)' }}>
                <div className="container">
                    <div className="row align-items-center g-4 text-white">
                        <div className="col-lg-6">
                            <h2 className="mb-3 fw-bold">Why Choose Shashwat?</h2>
                            <ul className="list-unstyled lh-lg mb-0">
                                <li className="d-flex align-items-start gap-2"><i className="bi bi-check2-circle text-warning fs-5"></i><span>Small batch sizes for individual attention</span></li>
                                <li className="d-flex align-items-start gap-2"><i className="bi bi-check2-circle text-warning fs-5"></i><span>Outcome-focused weekly assessments and feedback</span></li>
                                <li className="d-flex align-items-start gap-2"><i className="bi bi-check2-circle text-warning fs-5"></i><span>Regular parent updates and progress tracking</span></li>
                                <li className="d-flex align-items-start gap-2"><i className="bi bi-check2-circle text-warning fs-5"></i><span>Fun activities that build speed, accuracy, and confidence</span></li>
                            </ul>
                        </div>
                        <div className="col-lg-6">
                            <div className="row g-3">
                                <div className="col-6">
                                    <motion.div className="border-0 rounded-4 text-center p-4 bg-white h-100 shadow-sm"
                                        initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} viewport={{ once: true }}>
                                        <div className="display-6 fw-bold text-brand">5x</div>
                                        <div className="small text-secondary">Faster Mental Math</div>
                                    </motion.div>
                                </div>
                                <div className="col-6">
                                    <motion.div className="border-0 rounded-4 text-center p-4 bg-white h-100 shadow-sm"
                                        initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.1 }} viewport={{ once: true }}>
                                        <div className="display-6 fw-bold text-brand">95%</div>
                                        <div className="small text-secondary">Parent Satisfaction</div>
                                    </motion.div>
                                </div>
                                <div className="col-6">
                                    <motion.div className="border-0 rounded-4 text-center p-4 bg-white h-100 shadow-sm"
                                        initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.2 }} viewport={{ once: true }}>
                                        <div className="display-6 fw-bold text-brand">1:10</div>
                                        <div className="small text-secondary">Trainer:Student Ratio</div>
                                    </motion.div>
                                </div>
                                <div className="col-6">
                                    <motion.div className="border-0 rounded-4 text-center p-4 bg-white h-100 shadow-sm"
                                        initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.3 }} viewport={{ once: true }}>
                                        <div className="display-6 fw-bold text-brand">1000+</div>
                                        <div className="small text-secondary">Students Trained</div>
                                    </motion.div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            {/* Testimonials */}
            <section className="py-5" style={{ background: 'var(--ac-light)' }}>
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
            {/* How It Works */}
            <section className="py-5" style={{ background: 'linear-gradient(120deg, var(--ac-grad-end) 0%, var(--ac-grad-start) 100%)' }}>
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
            {/* CTA Band */}
            <section className="py-5 text-white" style={{ background: 'linear-gradient(120deg, var(--ac-grad-start) 0%, var(--ac-grad-end) 100%)' }}>
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



