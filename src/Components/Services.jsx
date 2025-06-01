import React from 'react';
import ser1 from '../assets/ser 1.png';
import ser2 from '../assets/ser 2.png';
import ser3 from '../assets/ser 3.png';

const Services = () => {
  return (
    <>
    <section className="py-12 px-4 text-center">
        <h2 className="text-2xl md:text-6xl font-semibold text-black mb-2">
          Servies
        </h2>
    </section>
    
    <section className="px-6 py-10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
        <div className="w-full md:w-1/2 relative">
          <img
            src={ser1}
            alt="Blouses"
            className="rounded-tr-[80px] rounded-bl-[80px] h-auto w-full"
          />
          <div className="absolute top-4 left-4 bg-white px-6 py-3 rounded-tr-[40px] shadow-md text-center">
            <h2 className="text-4xl text-purple-700 font-semibold">Chudidar</h2>
            <p className="text-purple-400 text-lg">Stitching</p>
          </div>
        </div>

        <div className="w-full md:w-1/2 border-2  shadow-lg p-8 bg-gradient-to-br from-purple-300 to-white p-24 rounded-tl-[80px] rounded-br-[80px]">
          <h3 className="text-2xl font-bold mb-4 text-black">
            From Simple cotton to elegant festival wear,We sticth chudidars that blend comfort with grace
          </h3>
          <p className="text-gray-700 leading-relaxed">
            -tailored perfectly to your shape and style
          </p>
        </div>
      </div>
    </section>

    <section className="px-6 py-10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row-reverse items-center gap-10">
        <div className="w-full md:w-1/2 relative">
          <img
            src={ser2}
            alt="Blouses"
            className="rounded-tr-[80px] rounded-bl-[80px] h-auto w-full"
          />
          <div className="absolute top-4 left-4 bg-white px-6 py-3 rounded-tr-[40px] shadow-md text-center">
            <h2 className="text-4xl text-purple-700 font-semibold">Blouses</h2>
            <p className="text-purple-400 text-lg">Normal & Lining</p>
          </div>
        </div>

        <div className="w-full md:w-1/2 border-2  shadow-lg  bg-gradient-to-br from-purple-300 to-white p-24 rounded-tl-[80px] rounded-br-[80px]">
          <h3 className="text-2xl font-bold mb-4 text-black">
            Daily-Wear or Occasion-ready,every blouse is tailored for the perfect fit and elegant finish
          </h3>
          <p className="text-gray-700 leading-relaxed">
             -always matching your saree's style
          </p>
        </div>
      </div>
    </section>

    <section className="px-6 py-10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
        <div className="w-full md:w-1/2 relative ">
         <img
  src={ser3}
  alt="Blouses"
  className="rounded-tr-[80px] rounded-bl-[80px] h-[420px] w-full object-cover"
/>

          <div className="absolute top-4 left-4 bg-white px-6 py-3 rounded-tr-[40px] shadow-md text-center">
            <h2 className="text-4xl text-purple-700 font-semibold">Embroidery</h2>
          </div>
        </div>

        <div className="w-full md:w-1/2 border-2  shadow-lg  bg-gradient-to-br from-purple-300 to-white p-23 rounded-tl-[80px] rounded-br-[80px]">
          <h3 className="text-2xl font-bold mb-4 text-black">
            Add a touch of elegance with our intricate embroidery work-perfect for blouses,dupattas.sleeves and more
          </h3>
          <p className="text-gray-700 leading-relaxed">
            -every detail is crafted to make your outfit truely unique
          </p>
        </div>
      </div>
    </section>
    </>
  );
};

export default Services;
