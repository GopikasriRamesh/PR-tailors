import React from 'react';
import waveTop from '../assets/wave.svg';
import waveBottom from '../assets/wave-light.svg';
import img1 from '../assets/pt 1.png';
import img2 from '../assets/pt 2.png';
import img3 from '../assets/pt 3.png';
import { motion } from 'framer-motion';

const Portfolio = () => {
  return (
    <section className="relative bg-purple-800 text-white overflow-hidden">

      <img
        src={waveBottom}
        alt="Wave Top"
        className="absolute top-0 left-0 w-full transform scale-y-[-1] mb-[-1px] mix-blend-screen brightness-0 invert border-none outline-none"
      />

      <motion.div
        className="relative z-10 max-w-6xl mx-auto px-6 py-20 text-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
      >
        <h2 className="text-5xl font-bold mb-4 mt-40">PORTFOLIO</h2>
        <p className="text-lg text-purple-100 max-w-2xl mx-auto">
          Take a look at some of our proudly stitched pieces — each one a reflection of our craftsmanship, care, and creativity.
        </p>
      </motion.div>

      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {[img1, img2, img3].map((img, index) => (
          <motion.div
            key={index}
            className="bg-white rounded-xl overflow-hidden shadow-md transition-transform hover:scale-105 mb-50"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2, ease: 'easeOut' }}
            viewport={{ once: false }}
          >
            <img src={img} alt={`blouse-${index}`} className="w-full h-[340px] object-cover" />
          </motion.div>
        ))}
      </div>

      <img
        src={waveBottom}
        alt="Wave Bottom"
        className="absolute bottom-0 left-0 w-full mix-blend-screen brightness-0 invert border-none outline-none"
      />
    </section>
  );
};

export default Portfolio;
