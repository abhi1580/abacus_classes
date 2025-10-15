
import { motion } from 'framer-motion'
function Courses() {
    return (
        <>
            {/* Hero Section */}
            <section className="py-5" style={{ background: 'linear-gradient(120deg, var(--ac-grad-start) 0%, var(--ac-grad-end) 100%)' }}>
                <div className="container text-center text-white py-4">
                    <h1 className="display-4 fw-bold mb-2" style={{ letterSpacing: '1px' }}>Shashwat Abacus</h1>
                    <p className="lead mb-4" style={{ fontSize: '1.35rem' }}>Making children <span style={{ color: '#ffe066' }}>10x</span> better, faster & smarter.</p>
                    <img src="/franchisee2.jpg" alt="Abacus Hero" className="rounded shadow-lg mb-3" style={{ maxHeight: '180px', border: '5px solid #fff', background: '#fff8' }} />
                </div>
            </section>

            {/* About Abacus */}
            <section className="py-5" style={{ background: 'var(--ac-light)' }}>
                <div className="container">
                    <div className="row justify-content-center mb-4">
                        <div className="col-lg-10">
                            <div className="card border-0 shadow-lg bg-white">
                                <div className="card-body p-4">
                                    <h2 className="h4 fw-bold mb-3 text-gradient">What is Abacus?</h2>
                                    <p className="mb-2">The word <b>“Abacus”</b> comes from the Latin language. Abacus is a tool which helps children to grow mathematical calculations. It was invented in China nearly 2055 years ago. It helps children to remove the fear of numbers and creates interest in mathematics.</p>
                                    <p className="mb-0">The Shashwat Abacus uses three elements to enhance life skills in children – <b>Abacus</b>, <b>Brain Gym</b>, and <b>Speed Writing</b>. The programme helps children to develop their learning abilities like concentration, observation, imagination, listening skills, visualization, speed & accuracy, retention & recall, self-confidence, and more.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row g-4 text-center">
                        <div className="col-md-4">
                            <div className="card h-100 border-0 shadow-sm bg-gradient-brand text-white">
                                <div className="card-body">
                                    <span className="display-3 mb-2 d-block"><i className="bi bi-activity"></i></span>
                                    <h5 className="fw-bold">Brain Gym</h5>
                                    <p className="mb-0">Exercises to relax the mind and energize the brain for new activities.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card h-100 border-0 shadow-sm bg-white text-brand">
                                <div className="card-body">
                                    <span className="display-3 mb-2 d-block"><i className="bi bi-calculator"></i></span>
                                    <h5 className="fw-bold">Abacus</h5>
                                    <p className="mb-0">Ancient tool for developing strong mental arithmetic and visualization skills.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card h-100 border-0 shadow-sm bg-gradient-brand text-white">
                                <div className="card-body">
                                    <span className="display-3 mb-2 d-block"><i className="bi bi-pencil"></i></span>
                                    <h5 className="fw-bold">Speed Writing</h5>
                                    <p className="mb-0">Techniques to boost writing speed, accuracy, and confidence.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Benefits Section */}
            <section className="py-5" style={{ background: 'linear-gradient(120deg, var(--ac-grad-end) 0%, var(--ac-grad-start) 100%)' }}>
                <div className="container">
                    <div className="row justify-content-center mb-4">
                        <div className="col-lg-8 text-center">
                            <h3 className="h4 fw-bold text-white mb-3">Benefits & Results</h3>
                        </div>
                    </div>
                    <div className="row g-4">
                        <div className="col-md-6 col-lg-4">
                            <div className="card border-0 shadow-sm h-100">
                                <div className="card-body">
                                    <ul className="list-unstyled mb-0">
                                        <li><i className="bi bi-check-circle-fill text-success me-2"></i>Improved focus and concentration</li>
                                        <li><i className="bi bi-check-circle-fill text-success me-2"></i>Improved self-discipline</li>
                                        <li><i className="bi bi-check-circle-fill text-success me-2"></i>Greater listening skills</li>
                                        <li><i className="bi bi-check-circle-fill text-success me-2"></i>Helps to retain and recall anything</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4">
                            <div className="card border-0 shadow-sm h-100">
                                <div className="card-body">
                                    <ul className="list-unstyled mb-0">
                                        <li><i className="bi bi-check-circle-fill text-success me-2"></i>Improves visualization power</li>
                                        <li><i className="bi bi-check-circle-fill text-success me-2"></i>Increases arithmetic and numerical ability</li>
                                        <li><i className="bi bi-check-circle-fill text-success me-2"></i>Enhances memory and imagination power</li>
                                        <li><i className="bi bi-check-circle-fill text-success me-2"></i>Increased self-confidence</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-12 col-lg-4">
                            <div className="card border-0 shadow-sm h-100">
                                <div className="card-body">
                                    <ul className="list-unstyled mb-0">
                                        <li><i className="bi bi-check-circle-fill text-success me-2"></i>Overall academic achievement</li>
                                        <li><i className="bi bi-check-circle-fill text-success me-2"></i>Certificates on completion of each level</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Levels & Programme Structure */}
            <section className="py-5" style={{ background: 'var(--ac-light)' }}>
                <div className="container">
                    <div className="row g-4">
                        <div className="col-lg-6">
                            <div className="card border-0 shadow-lg h-100">
                                <div className="card-body">
                                    <h4 className="fw-bold mb-3 text-gradient">Levels Structure</h4>
                                    <ul className="mb-0">
                                        <li>Beginners – Junior Abacus</li>
                                        <li>Beginners – Basic levels 4</li>
                                        <li>Progressive – Advanced levels 4</li>
                                        <li>Expert – Master levels 2</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="card border-0 shadow-lg h-100">
                                <div className="card-body">
                                    <h4 className="fw-bold mb-3 text-gradient">Programme Structure</h4>
                                    <ul className="mb-0">
                                        <li><b>Age Group:</b> 6 to 14 years</li>
                                        <li><b>Total Levels:</b> Junior Abacus + 10 levels</li>
                                        <li><b>Duration per level:</b> 2 to 3 months</li>
                                        <li><b>Weekly Sessions:</b> One session of 2 hours</li>
                                        <li><b>Maximum Students per class:</b> 15 Students</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Courses



