import { motion } from 'framer-motion'

function Gallery() {
    const images = [
        '/gallery1.png', '/gallery2.png', '/gallery3.png',
        '/gallery4.png', '/gallery5.png', '/gallery6.png'
    ]

    return (
        <>
            <section className="py-5 bg-gradient-brand text-white">
                <div className="container">
                    <h1 className="h2 fw-bold mb-1">Gallery</h1>
                    <p className="mb-0">Moments from classes, activities, and achievements.</p>
                </div>
            </section>
            <section className="py-5">
                <div className="container">
                    <div className="row g-3">
                        {images.map((src, idx) => (
                            <div className="col-6 col-md-4 col-lg-3" key={idx}>
                                <motion.div className="ratio ratio-4x3 overflow-hidden rounded shadow-sm"
                                    initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: (idx % 6) * 0.05 }} viewport={{ once: true }}>
                                    <img src={src} alt={`Gallery ${idx + 1}`} className="w-100 h-100 object-fit-cover" loading="lazy" />
                                </motion.div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}

export default Gallery



