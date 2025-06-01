import React from 'react';
import img1 from '../assets/img1.jpg';
import { Users, TrendingUp, Gift, Truck } from 'lucide-react';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <div className="bg-white">
      <section className="w-full flex justify-center items-center px-4 pt-10">
        <div className="relative w-full max-w-7xl h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px] rounded-3xl overflow-hidden shadow-lg">
          <img
            src={img1}
            alt="home img"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-opacity-40"></div>

          <motion.div 
            className="absolute inset-0 flex items-center justify-center px-4 sm:px-6 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, ease: 'easeOut' }}
          >
            <motion.div className="px-4 py-6 sm:px-6 sm:py-8">
              <motion.p 
                className="text-white text-lg sm:text-2xl md:text-3xl lg:text-4xl font-bold leading-snug md:mb-135 mr-100 mt-0"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, ease: 'easeOut' }}
              >
                We Don't Just Stitch Clothes, <br />
                We Weave Confidence for Every Woman
              </motion.p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <motion.section
        className="py-12 px-4 text-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
      >
        <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-black">
          Tailoring With Passion Since 1997
        </h2>
      </motion.section>

      <motion.section
        className="py-10 px-4"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
      >
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-10">
          {[
            {
              icon: <Users className="w-6 h-6 sm:w-8 sm:h-8 text-white" />,
              title: '100+ Happy Customers',
              text: 'We leave customers satisfied, creating garments that make them feel confident and beautiful.',
              from: 'from-purple-300 to-white',
            },
            {
              icon: <TrendingUp className="w-6 h-6 sm:w-8 sm:h-8 text-white" />,
              title: '98% Customer Satisfaction',
              text: 'Our commitment to quality and attention to detail ensures exceptional customer satisfaction.',
              from: 'from-purple-300 to-white',
            },
            {
              icon: <Gift className="w-6 h-6 sm:w-8 sm:h-8 text-white" />,
              title: '85% Repeat Customers',
              text: 'Our loyal customers return time and again for our exceptional craftsmanship and service.',
              from: 'from-purple-300 to-white',
            },
            {
              icon: <Truck className="w-6 h-6 sm:w-8 sm:h-8 text-white" />,
              title: 'Proudly Serving All of Chennai',
              text: 'From the heart of Chennai, we offer premium tailoring services across the city.',
              from: 'from-purple-300 to-white',
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              className={`bg-gradient-to-br ${item.from} p-6 sm:p-8 lg:p-10 rounded-lg text-center shadow-md hover:shadow-lg transition duration-300`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{scale:1.1,y:-5}}
              transition={{ duration: 0.2, ease: 'easeOut' }}
            >
              <div className="bg-purple-700 w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                {item.icon}
              </div>
              <h3 className="font-semibold text-black mb-2 text-base sm:text-lg">
                {item.title}
              </h3>
              <p className="text-sm sm:text-base text-gray-800">
                {item.text}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </div>
  );
};

export default Home;
