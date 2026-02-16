import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { navigation } from '../../data/navigation';
import Button from '../ui/Button';
import { Menu, X } from 'lucide-react';
import logo from '../../img/logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleScroll = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 py-6 px-4 md:px-8 max-w-7xl mx-auto">
      <div className="rounded-full bg-gradient-to-r from-[#3B82F6] to-[#F089D5] p-[1.5px]">
        {/* Inner White */}
        <div className="bg-white rounded-full px-6 py-3 flex items-center justify-between shadow-sm">

          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img src={logo} alt="Ditz Logo" className="h-8 w-auto" />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {navigation.header.map((item) => (
              <button
                key={item.name}
                onClick={() => item.scrollTo && handleScroll(item.scrollTo)}
                className="text-gray-600 hover:text-blue-500 font-medium transition-colors"
              >
                {item.name}
              </button>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden md:block">
            <Button
              href="https://wa.me/6287788714970?text=Halo%20Ditz!%20Saya%20tertarik%20dengan%20layanannya."
              variant="primary"
              className="!px-6 !py-2 text-sm"
            >
              Contact Us
            </Button>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden text-gray-800"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-24 left-4 right-4 z-50 md:hidden">
          <div className="rounded-2xl bg-gradient-to-r from-[#3B82F6] to-[#F089D5] p-[1.5px]">
            <div className="bg-white rounded-2xl shadow-xl p-6 flex flex-col gap-4">
              {navigation.header.map((item) => (
                <button
                  key={item.name}
                  onClick={() => {
                    item.scrollTo && handleScroll(item.scrollTo);
                    setIsOpen(false);
                  }}
                  className="text-gray-600 font-medium text-lg text-left"
                >
                  {item.name}
                </button>
              ))}

              <Button
                href="https://wa.me/6287788714970?text=Halo%20Ditz!%20Saya%20tertarik%20dengan%20layanannya."
                variant="primary"
                className="!px-6 !py-2 text-sm"
              >
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
