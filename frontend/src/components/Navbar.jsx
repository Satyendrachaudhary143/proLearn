import { HomeIcon, UserIcon, QuestionMarkCircleIcon, InformationCircleIcon, BookOpenIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const navLinks = [
  { label: 'Home', icon: <HomeIcon className="h-5 w-5 inline-block mr-1" />, to: '/' },
  { label: 'Course', icon: <BookOpenIcon className="h-5 w-5 inline-block mr-1" />, to: '/learn' },
  { label: 'Login', icon: <UserIcon className="h-5 w-5 inline-block mr-1" />, to: '/login' },
  { label: 'Signup', icon: <UserIcon className="h-5 w-5 inline-block mr-1" />, to: '/signup' },
  { label: 'Help', icon: <QuestionMarkCircleIcon className="h-5 w-5 inline-block mr-1" />, to: '/help' },
  { label: 'About', icon: <InformationCircleIcon className="h-5 w-5 inline-block mr-1" />, to: '/about' },
];

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md px-6 py-3 flex items-center justify-between relative z-20">
      <div className="flex items-center gap-4">
        <span className="text-2xl font-bold text-blue-600">ProLearn</span>
      </div>
      {/* Desktop Nav */}
      <div className="hidden md:flex gap-4">
        {navLinks.map((link) => (
          <Link key={link.label} to={link.to} className="flex items-center px-3 py-2 rounded hover:bg-blue-50 text-blue-700 font-medium transition">
            {link.icon}
            {link.label}
          </Link>
        ))}
      </div>
      {/* Hamburger Icon */}
      <button className="md:hidden p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400" onClick={() => setOpen(!open)}>
        {open ? <XMarkIcon className="h-7 w-7 text-blue-700" /> : <Bars3Icon className="h-7 w-7 text-blue-700" />}
      </button>
      {/* Mobile Dropdown */}
      {open && (
        <div className="absolute top-full left-0 w-full bg-white shadow-lg flex flex-col items-center py-4 md:hidden animate-fade-in z-30">
          {navLinks.map((link) => (
            <Link key={link.label} to={link.to} className="flex items-center w-full justify-center px-3 py-3 rounded hover:bg-blue-50 text-blue-700 font-medium transition text-lg" onClick={() => setOpen(false)}>
              {link.icon}
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}

export default Navbar; 