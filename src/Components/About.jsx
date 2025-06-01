import React from 'react'
import ab1 from '../assets/ab1.png'
import ab2 from '../assets/ab2.png'

const About = () => {
  return (
    <>
    <section className="py-12 px-4 text-center">
        <h2 className="text-2xl md:text-6xl font-semibold text-black mb-2">
          About <span className='text-purple-900 '>PR</span> Tailor
        </h2>
        <p>We Listen First.Suggest Second!!</p>
    </section>

    <section className='py-10 px-4'>
       <div className='max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10'>
        <div className='w-full md:w-1/2'>
        <img src={ab1} alt="img1" className='rounded-3xl shadow-lg w-full object-cover'/>
        </div>
        <div className='w-full md:w-1/2 border-2 rounded-3xl shadow-lg p-25 bg-gradient-to-br from-purple-300 to white-200'>
        <h3 className='text-2xl font-bold mb-4 text-black font-bold '>Personal Fittings That Understand You</h3>
        <p className='text-gray-700 leading-relaxed'>At PR TAILOR,it's not just tailoring-it's a one-on-one style journey tailored around your shape.Your needs and Your preferences.</p>
        </div>
       </div>
    </section>

      <section className='py-10 px-4'>
       <div className='max-w-6xl mx-auto flex flex-col md:flex-row-reverse items-center gap-10'>
        <div className='w-full md:w-1/2'>
        <img src={ab2} alt="img2" className='rounded-3xl shadow-lg w-full object-cover'/>
        </div>

        <div className='w-full md:w-1/2 border-2 rounded-3xl shadow-lg p-23 bg-gradient-to-bl from-purple-300 to white-200'>
        <h3 className='text-2xl font-bold mb-4 text-black font-bold'>Every Outfit is Made to Empower</h3>
        <p className='text-gray-700 leading-relaxed'>We understand that every woman deserves to fell confident in what she wears-that's why we focus on creating pieces that not only fit the body but lift thye spirit.</p>
        </div>
       </div>
    </section>
    </>
  )
}

export default About