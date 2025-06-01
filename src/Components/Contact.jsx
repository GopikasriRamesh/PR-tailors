import React from 'react'
import con1 from '../assets/con1.png'
import waveTop from '../assets/wave.svg';
import { FiPhone, FiMail, FiMapPin } from 'react-icons/fi'

const Contact = () => {
  return (
    <>
      <section className="py-12 px-4 text-center">
        <h2 className="text-2xl md:text-6xl font-semibold text-black mb-2">
          Contact
        </h2>
      </section>

      <section className='py-10 px-4'>
        <div className='max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-15'>
          <div className='w-full md:w-1/2'>
            <img src={con1} alt="img1" className=' shadow-lg w-full object-cover rounded-tl-[40px] rounded-bl-[40px] ' />
          </div>

          <div className='w-full md:w-1/2'>

            <div className='space-y-6 text-black'>
              <div className='flex items-center gap-3'>
                <FiPhone className='text-xl text-purple-800' />
                <span>+91 9876543210</span>
              </div>
              <div className='flex items-center gap-3'>
                <FiMail className='text-xl text-purple-800' />
                <span>contact@prtailor.com</span>
              </div>
              <div className='flex items-center gap-3'>
                <FiMapPin className='text-xl text-purple-800' />
                <span>123, Tailor Street, Mumbai, India</span>
              </div>
            </div>
          </div>
        </div>
      </section>

       <div className="relative w-full">
  <img src={waveTop} alt="wave" className="w-full h-auto" />
  
  <p className="absolute bottom-1 w-full text-center text-white text-lg md:text-2xl font-semibold">
    Created by Prabeen Ragupathi © 2025
  </p>
</div>


    </>
  )
}

export default Contact
