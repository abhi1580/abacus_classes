import { motion } from 'framer-motion'

function Contact() {
    return (
        <>
            <section className="py-5 bg-gradient-brand text-white">
                <div className="container">
                    <h1 className="h2 fw-bold mb-1">Contact Us</h1>
                    <p className="mb-0">Have questions? Send a message and we’ll get back within 24 hrs.</p>
                </div>
            </section>
            <section className="py-5">
                <div className="container">
                    <div className="row g-4">
                        <div className="col-12 col-lg-6">
                            <form className="row g-3">
                                <div className="col-12">
                                    <label htmlFor="name" className="form-label">Name</label>
                                    <input type="text" className="form-control" id="name" placeholder="Your Name" required />
                                </div>
                                <div className="col-md-6">
                                    <label htmlFor="email" className="form-label">Email</label>
                                    <input type="email" className="form-control" id="email" placeholder="you@example.com" required />
                                </div>
                                <div className="col-md-6">
                                    <label htmlFor="phone" className="form-label">Phone</label>
                                    <input type="tel" className="form-control" id="phone" placeholder="9876543210" required />
                                </div>
                                <div className="col-12">
                                    <label htmlFor="message" className="form-label">Message</label>
                                    <textarea className="form-control" id="message" rows="4" placeholder="How can we help?" required></textarea>
                                </div>
                                <div className="col-12">
                                    <button type="submit" className="btn btn-gradient">Send Message</button>
                                </div>
                            </form>
                            <div className="mt-4 d-flex gap-3">
                                <a href="tel:+919876543210" className="btn btn-outline-primary"><i className="bi bi-telephone"></i> Call</a>
                                <a href="mailto:info@abacusclasses.com" className="btn btn-outline-primary"><i className="bi bi-envelope"></i> Email</a>
                                <a href="https://wa.me/919876543210" className="btn btn-outline-success"><i className="bi bi-whatsapp"></i> WhatsApp</a>
                            </div>
                        </div>
                        <div className="col-12 col-lg-6">
                            <motion.div className="ratio ratio-16x9" initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241317.11609863126!2d72.74109911908093!3d19.082197839848195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b8d9b7b1bc2b%3A0x9b1c2d5b9f86f3e!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                                    style={{ border: 0 }}
                                    allowFullScreen=""
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    title="Institute Location"
                                ></iframe>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Contact



