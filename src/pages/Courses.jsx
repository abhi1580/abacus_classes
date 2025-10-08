import { motion } from 'framer-motion'

function Courses() {
    const courses = [
        { name: 'Beginner', desc: 'Introduction to abacus, number sense, and basic operations.', fee: '₹3,000 / month', duration: '3 months', age: '5–7 yrs', sessions: '2 / week', icon: 'bi-seedling' },
        { name: 'Intermediate', desc: 'Speed building, mental math techniques, and accuracy drills.', fee: '₹3,500 / month', duration: '4 months', age: '7–10 yrs', sessions: '2 / week', icon: 'bi-lightning' },
        { name: 'Advanced', desc: 'Complex calculations, competitions prep, and mentoring.', fee: '₹4,000 / month', duration: '5 months', age: '10–12 yrs', sessions: '3 / week', icon: 'bi-trophy' },
    ]

    return (
        <>
            <section className="py-5 bg-gradient-brand text-white">
                <div className="container">
                    <h1 className="h2 fw-bold mb-1">Courses</h1>
                    <p className="mb-0">Structured levels to build speed, accuracy, and confidence step-by-step.</p>
                </div>
            </section>
            <section className="py-5">
                <div className="container">
                    <div className="row g-4">
                        {courses.map((c, i) => (
                            <div className="col-12 col-md-6 col-lg-4" key={c.name}>
                                <motion.div className="card h-100 shadow-sm"
                                    initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: i * 0.1 }} viewport={{ once: true }}>
                                    <div className="card-body d-flex flex-column">
                                        <div className="d-flex align-items-center gap-3 mb-2">
                                            <span className="icon-circle"><i className={`bi ${c.icon}`}></i></span>
                                            <h5 className="card-title mb-0">{c.name}</h5>
                                        </div>
                                        <p className="card-text">{c.desc}</p>
                                        <ul className="list-unstyled small mb-4">
                                            <li className="d-flex align-items-center gap-2"><i className="bi bi-clock"></i><span>Duration: {c.duration}</span></li>
                                            <li className="d-flex align-items-center gap-2"><i className="bi bi-people"></i><span>Age Group: {c.age}</span></li>
                                            <li className="d-flex align-items-center gap-2"><i className="bi bi-calendar-week"></i><span>Sessions: {c.sessions}</span></li>
                                        </ul>
                                        <div className="mt-auto d-flex align-items-center justify-content-between">
                                            <span className="fw-semibold">{c.fee}</span>
                                            <a href="/contact" className="btn btn-gradient">Enroll</a>
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}

export default Courses



