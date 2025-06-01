import React from 'react';
import { motion } from 'framer-motion';
import ab1 from '../assets/ab1.png';
import ab2 from '../assets/ab2.png';

const About = () => {
  return (
    <>
      <motion.section
        className="py-12 px-4 text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        viewport={{ once: false }}
      >
        <h2 className="text-2xl md:text-6xl font-semibold text-black mb-2">
          About <span className="text-purple-900">PR</span> Tailor
        </h2>
        <p>We Listen First. Suggest Second!!</p>
      </motion.section>

      <motion.section
        className="py-10 px-4"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        viewport={{ once: false }}
      >
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
          <motion.div
            className="w-full md:w-1/2"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <img
              src={ab1}
              alt="img1"
              className="rounded-3xl shadow-lg w-full object-cover"
            />
          </motion.div>
          <motion.div
            className="w-full md:w-1/2 border-2 rounded-3xl shadow-lg  bg-gradient-to-br from-purple-300 to-white p-25"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="text-2xl font-bold mb-4 text-black">
              Personal Fittings That Understand You
            </h3>
            <p className="text-gray-700 leading-relaxed">
              At PR TAILOR, it's not just tailoring – it's a one-on-one style journey tailored around your shape, your needs, and your preferences.
            </p>
          </motion.div>
        </div>
      </motion.section>

      <motion.section
        className="py-10 px-4"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        viewport={{ once: false }}
      >
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row-reverse items-center gap-10">
          <motion.div
            className="w-full md:w-1/2"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <img
              src={ab2}
              alt="img2"
              className="rounded-3xl shadow-lg w-full object-cover"
            />
          </motion.div>
          <motion.div
            className="w-full md:w-1/2 border-2 rounded-3xl shadow-lg p-6 bg-gradient-to-bl from-purple-300 to-white p-23"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="text-2xl font-bold mb-4 text-black">
              Every Outfit is Made to Empower
            </h3>
            <p className="text-gray-700 leading-relaxed">
              We understand that every woman deserves to feel confident in what she wears — that's why we focus on creating pieces that not only fit the body but lift the spirit.
            </p>
          </motion.div>
        </div>
      </motion.section>
    </>
  );
};

export default About;
