import React from 'react'
import img1 from '../assets/img1.jpg'
import { Users, TrendingUp, Gift, Truck } from 'lucide-react'

const Home = () => {
  return (
    <div className="bg-white">
      <section className="w-full flex justify-center items-center px-4 pt-10">
        <div className="relative w-full max-w-7.2xl h-[600px] rounded-3xl overflow-hidden shadow-lg">
          <img src={img1} alt="home img" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black opacity-40"></div>

          <div className="absolute inset-0 flex items-center justify-center px-4">
            <div className="px-6 py-4 rounded-md">
              <p className="text-white text-3xl md:text-4xl font-bold text-center mb-110 mr-150 mt-0">
                We Don't Just Stitch Clothes, <br />
                We Weave Confidence for Every Woman
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 px-4 text-center">
        <h2 className="text-2xl md:text-3xl font-semibold text-black">
          Tailoring With Passion Since 1997
        </h2>
      </section>

      <section className="py-10 px-4 gap-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-10">
  
          <div className="bg-gradient-to-br from-purple-300 to-white p-10 rounded-lg text-center shadow-md">
            <div className="bg-purple-700 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8 text-white" />
            </div>
            <h3 className="font-semibold text-black mb-1">100+ Happy Customers</h3>
            <p className="text-sm text-gray-800">We leave customers satisfied, creating garments that make them feel confident and beautiful.</p>
          </div>


          <div className="bg-gradient-to-bl from-purple-300 to-white p-8 rounded-lg text-center shadow-md">
            <div className="bg-purple-700 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <TrendingUp className="w-8 h-8 text-white " />
            </div>
            <h3 className="font-semibold text-black mb-1">98%Customer Satisfaction</h3>
             <p className="text-sm text-gray-800">Our commitment to quality and attention to detail ensures exceptional customer satisfaction.</p>

          </div>

          <div className="bg-gradient-to-br from-purple-300 to-white p-8 rounded-lg text-center shadow-md">
            <div className="bg-purple-700 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Gift className="w-8 h-8 text-white" />
            </div>
            <h3 className="font-semibold text-black mb-1">85% Repeat Customers</h3>
             <p className="text-sm text-gray-800">Our loyal customers return time and again for our exceptional craftsmanship and service.</p>
          </div>


          <div className="bg-gradient-to-bl from-purple-300 to-white p-8 rounded-lg text-center shadow-md">
            <div className="bg-purple-700 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Truck className="w-8 h-8 text-white" />
            </div>
            <h3 className="font-semibold text-black mb-1">Proudly Serving All of Chennai</h3>
             <p className="text-sm text-gray-800">From the heart of Chennai, we offer premium tailoring services across the city.</p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
