import { motion } from 'framer-motion'
import { useState } from 'react';

import gallery1 from '../assets/gallery/2148524674.jpg';
import gallery2 from '../assets/gallery/2149091515.jpg';
import gallery3 from '../assets/gallery/2589676_15595.jpg';
import gallery4 from '../assets/gallery/children-6744948_1280.png';
import gallery5 from '../assets/gallery/gama-abacus-8457067_1280.jpg';
import gallery6 from '../assets/gallery/sticker.jpg';


function Gallery() {

    const images = [
        { src: gallery1, caption: 'Abacus Class in Action' },
        { src: gallery2, caption: 'Focused Learning Moments' },
        { src: gallery3, caption: 'Celebrating Achievements' },
        { src: gallery4, caption: 'Creative Activities' },
        { src: gallery5, caption: 'Hands-on Practice' },
        { src: gallery6, caption: 'Fun with Friends' },
    ];

    const [modalOpen, setModalOpen] = useState(false);
    const [currentIdx, setCurrentIdx] = useState(0);

    const openModal = (idx) => {
        setCurrentIdx(idx);
        setModalOpen(true);
    };
    const closeModal = () => setModalOpen(false);
    const showPrev = (e) => {
        e.stopPropagation();
        setCurrentIdx((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    };
    const showNext = (e) => {
        e.stopPropagation();
        setCurrentIdx((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    };

    return (
        <>
            {/* Hero Section */}
            <section className="py-5" style={{ background: 'linear-gradient(120deg, var(--ac-grad-end) 0%, var(--ac-grad-start) 100%)' }}>
                <div className="container text-center text-white py-4">
                    <h1 className="display-4 fw-bold mb-2">Gallery</h1>
                    <p className="lead mb-0">A glimpse into our vibrant classes, activities, and student achievements.</p>
                </div>
            </section>

            {/* Gallery Grid */}
            <section className="py-5" style={{ background: 'var(--ac-light)' }}>
                <div className="container">
                    <div className="row g-4">
                        {images.map((img, idx) => (
                            <div className="col-12 col-sm-6 col-md-4 col-lg-3" key={idx}>
                                <motion.div className="card border-0 shadow-sm h-100 gallery-card" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: (idx % 6) * 0.07 }} viewport={{ once: true }}>
                                    <div className="ratio ratio-4x3 overflow-hidden rounded-top gallery-thumb" style={{ cursor: 'pointer' }} onClick={() => openModal(idx)}>
                                        <img src={img.src} alt={img.caption} className="w-100 h-100 object-fit-cover" loading="lazy" style={{ objectFit: 'cover', transition: 'transform .2s' }} />
                                    </div>
                                    <div className="card-body p-2 text-center">
                                        <div className="small text-secondary">{img.caption}</div>
                                    </div>
                                </motion.div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Modal Lightbox */}
            {modalOpen && (
                <div className="gallery-modal position-fixed top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center" style={{ zIndex: 1055, background: 'rgba(0,0,0,0.85)' }} onClick={closeModal}>
                    <div className="position-relative" style={{ maxWidth: '90vw', maxHeight: '90vh' }} onClick={e => e.stopPropagation()}>
                        <img src={images[currentIdx].src} alt={images[currentIdx].caption} className="rounded shadow-lg" style={{ maxWidth: '80vw', maxHeight: '70vh', objectFit: 'contain', background: '#fff' }} />
                        <button className="btn btn-light position-absolute top-0 end-0 m-2" style={{ zIndex: 2 }} onClick={closeModal} aria-label="Close"><span aria-hidden>×</span></button>
                        <button className="btn btn-light position-absolute top-50 start-0 translate-middle-y ms-2" style={{ zIndex: 2 }} onClick={showPrev} aria-label="Previous"><span aria-hidden>{'<'}</span></button>
                        <button className="btn btn-light position-absolute top-50 end-0 translate-middle-y me-2" style={{ zIndex: 2 }} onClick={showNext} aria-label="Next"><span aria-hidden>{'>'}</span></button>
                        <div className="text-center text-white mt-3 small">{images[currentIdx].caption}</div>
                    </div>
                </div>
            )}

            {/* CTA Band */}
            <section className="py-5 text-white" style={{ background: 'linear-gradient(120deg, var(--ac-grad-start) 0%, var(--ac-grad-end) 100%)' }}>
                <div className="container text-center">
                    <h3 className="mb-3">Want to see your child in our gallery?</h3>
                    <a className="btn btn-light text-primary fw-semibold px-4 py-2" href="/contact">Book a Free Trial</a>
                </div>
            </section>
        </>
    )
}

export default Gallery



