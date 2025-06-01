import React from 'react';
import con1 from '../assets/con1.png';
import waveTop from '../assets/wave.svg';
import { FiPhone, FiMail, FiMapPin } from 'react-icons/fi';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <>
      <section className="py-12 px-4 text-center bg-white">
        <motion.h2
          className="text-2xl md:text-6xl font-bold text-purple-800 mb-2 drop-shadow-md tracking-wide"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Contact
        </motion.h2>
        <motion.p
          className="text-gray-600 text-sm md:text-lg"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          We'd love to hear from you — whether you're a new customer or a returning one!
        </motion.p>
      </section>

      <section className="py-10 px-4 bg-white">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
          <motion.div
            className="w-full md:w-1/2 mb-6 md:mb-0"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <img
              src={con1}
              alt="Contact visual"
              className="shadow-2xl w-full h-full object-cover rounded-tl-[40px] rounded-bl-[40px] transition-transform duration-300 hover:scale-105"
            />
          </motion.div>

          <motion.div
            className="w-full md:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="bg-white/70 backdrop-blur-lg border border-purple-100 rounded-3xl p-8 shadow-xl space-y-6 text-black">
              <div className="flex items-center gap-4">
                <FiPhone className="text-2xl text-purple-800" />
                <span className="text-lg font-medium">+91 9940697552</span>
              </div>
              <div className="flex items-center gap-4">
                <FiMail className="text-2xl text-purple-800" />
                <span className="text-lg font-medium">prabeenragupathi.regular@gmail.com</span>
              </div>
              <div className="flex items-center gap-4">
                <FiMapPin className="text-2xl text-purple-800" />
                <span className="text-lg font-medium">35/43, Jayaram St, Anna Nagar, Saidapet, Chennai, Tamil Nadu 600015</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      <div className="relative w-full mt-10">
        <img src={waveTop} alt="wave" className="w-full h-auto" />
        <p className="absolute bottom-0 w-full text-center text-white text-lg md:text-xl font-semibold drop-shadow-sm">
          Created by Prabeen Ragupathi © 2025
        </p>
      </div>
    </>
  );
};

export default Contact;
