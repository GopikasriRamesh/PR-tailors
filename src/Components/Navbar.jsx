import { header } from 'framer-motion/client'
import React, { useMemo } from 'react'

const Navbar = () => {

    const navLinks=useMemo(()=>[
        {label:'Home',path:'home'},
        {label:'About',path:'about'},
        {label:'Services',path:'services'},
        {label:'Contact',path:'contact'},
        {label:'Testimonials',path:'testimonials'},
        {label:'Portfolio',path:'portfolio'},
    ])
  return (
    <header className='bg-gray-300 bg-opacity-70 m-2 w-full fixed border-b shadow-md trasition-all px-5 py-5'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-12 md:h-10'>
            <div className='flex items-cemter'>
                
            </div>
        </div>
    </header>
  )
}

export default Navbar