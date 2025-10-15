import franchiseeImg1 from '../assets/franchisee1.jpg';
import franchiseeImg2 from '../assets/franchisee2.jpg';
import franchiseeImg3 from '../assets/franchisee3.jpg';
import { Link } from 'react-router-dom';

function Franchisee() {
    return (
        <>
            {/* Hero Section */}
            <section className="py-5" style={{ background: 'linear-gradient(120deg, var(--ac-grad-end) 0%, var(--ac-grad-start) 100%)' }}>
                <div className="container text-center text-white py-4">
                    <h1 className="display-4 fw-bold mb-2">Franchisee Opportunity</h1>
                    <p className="lead mb-4" style={{ fontSize: '1.25rem' }}>Start your own education business and empower your community with <span className="fw-bold">SHASHWAT Abacus Academy</span>.</p>
                    <Link className="btn btn-light text-primary fw-semibold px-4 py-2" to="/contact">Apply Now</Link>
                </div>
            </section>

            {/* Info Cards */}
            <section className="py-5" style={{ background: 'var(--ac-light)' }}>
                <div className="container">
                    <div className="row g-4 mb-4">
                        <div className="col-md-4">
                            <div className="card h-100 border-0 shadow-lg text-center bg-white">
                                <div className="card-body">
                                    <img src={franchiseeImg1} alt="Franchisee" className="img-fluid mb-3 rounded shadow-sm" style={{ maxHeight: '120px' }} />
                                    <h5 className="fw-bold mb-2 text-gradient">Start Your Own Business</h5>
                                    <p className="mb-0">Join as a business partner! If you have the passion to set up your own business, be your own boss, and contribute to society, SHASHWAT Abacus Academy is the right place for you. We provide support in training, marketing, setup, and advertising to help you grow.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card h-100 border-0 shadow-lg text-center bg-gradient-brand text-white">
                                <div className="card-body">
                                    <img src={franchiseeImg2} alt="Who can start" className="img-fluid mb-3 rounded shadow-sm" style={{ maxHeight: '120px' }} />
                                    <h5 className="fw-bold mb-2">Who Can Start?</h5>
                                    <ul className="list-unstyled mb-0">
                                        <li>Educated Housewives</li>
                                        <li>School or Tuition Teachers</li>
                                        <li>Pre School/Activity Centre owners</li>
                                        <li>Any professional or graduate</li>
                                        <li>Business owners</li>
                                        <li>Schools</li>
                                        <li>Anyone with zeal to work with children &amp; wants financial independence</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card h-100 border-0 shadow-lg text-center bg-white">
                                <div className="card-body">
                                    <img src={franchiseeImg3} alt="Valued Services" className="img-fluid mb-3 rounded shadow-sm" style={{ maxHeight: '120px' }} />
                                    <h5 className="fw-bold mb-2 text-gradient">How to Become a Franchisee</h5>
                                    <ol className="mb-0 text-start" style={{ marginLeft: '1.2em' }}>
                                        <li>Franchise Enquiry: <Link to="/contact">Apply Now</Link></li>
                                        <li>1 on 1 Meeting: Our executive will contact you for a detailed discussion.</li>
                                        <li>Franchise Registration: Receive and submit the registration form.</li>
                                        <li>Authorized Franchise: Submit the form and payment to become our partner.</li>
                                        <li>Site Selection & Branding: We help you finalize the center location and branding.</li>
                                        <li>Training & Certification: Get certified after training by our Master Trainer.</li>
                                    </ol>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Why SHASHWAT */}
                    <div className="row justify-content-center mb-4">
                        <div className="col-lg-10">
                            <div className="card border-0 shadow-lg bg-gradient-brand text-white">
                                <div className="card-body">
                                    <h3 className="h5 fw-bold mb-3">Why SHASHWAT?</h3>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <ul className="mb-0">
                                                <li>Enhancing excellence in quality, performance, and methodology</li>
                                                <li>World-class abacus training for kids</li>
                                                <li>Low initial investment, high profit</li>
                                                <li>Showcase your entrepreneurship skill</li>
                                                <li>Advanced abacus education techniques</li>
                                                <li>Great opportunity for housewives</li>
                                            </ul>
                                        </div>
                                        <div className="col-md-6">
                                            <ul className="mb-0">
                                                <li>Work full or part time</li>
                                                <li>Lifetime support to set up your center</li>
                                                <li>Detailed training and regular refreshment programs</li>
                                                <li>Best-in-class learning material</li>
                                                <li>Regular student evaluation</li>
                                                <li>Helping people become employed and earn more</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Quotes */}
                    <div className="row justify-content-center mb-4">
                        <div className="col-lg-8">
                            <div className="card shadow-sm bg-light border-0">
                                <div className="card-body">
                                    <blockquote className="blockquote mb-0 text-center">
                                        <p className="mb-2">“What you do today can improve all your tomorrows.”</p>
                                    </blockquote>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <div className="card shadow-sm bg-light border-0">
                                <div className="card-body">
                                    <blockquote className="blockquote mb-0 text-center">
                                        <footer className="blockquote-footer">The secret of change is to focus all your energy not on fighting the old but on building the new.</footer>
                                    </blockquote>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Franchisee;
