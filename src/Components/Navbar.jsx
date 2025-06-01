import React, { useState, useMemo } from 'react';
import { Link } from 'react-scroll';
import { Menu, X } from 'lucide-react'; // icons
import clsx from 'clsx';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navLinks = useMemo(() => [
    { label: 'Home', path: 'home' },
    { label: 'About', path: 'about' },
    { label: 'Service', path: 'services' },
    { label: 'Portfolio', path: 'portfolio' },
    { label: 'Contact', path: 'contact' },
  ], []);

  return (
    <header className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-[98%] max-w-8xl bg-[#f8f9fa] rounded-xl shadow-md px-4 py-3 flex items-center justify-between">
      <div className="text-2xl font-bold text-purple-600">PR</div>
      <div className="md:hidden">
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      <nav className={clsx(
        "flex flex-col md:flex-row items-center absolute md:static top-full left-0 w-full md:w-auto bg-[#f8f9fa] md:bg-transparent mt-2 md:mt-0 px-4 md:px-0 rounded-b-xl md:rounded-none shadow-md md:shadow-none transition-all duration-300 overflow-hidden",
        isOpen ? 'max-h-[500px] py-4' : 'max-h-0 md:max-h-full'
      )}>
        {navLinks.map((link) => (
          <Link
            key={link.path}
            to={link.path}
            smooth={true}
            duration={500}
            offset={-80}
            spy={true}
            activeClass="text-purple-600"
            className="cursor-pointer px-3 py-2 text-gray-800 hover:text-purple-600 font-medium text-base"
            onClick={() => setIsOpen(false)}
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </header>
  );
};

export default Navbar;
