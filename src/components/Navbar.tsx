import React, { useState, FC } from 'react';
import { Menu, X, Search } from 'lucide-react';
import { ShirtIcon } from 'lucide-react';
import { UserCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import logo from '../assets/Mseal-logo- 1.png'

interface NavLinkProps {
  to: string;
  children: React.ReactNode;
  className?: string;
}

interface NavLink {
  path: string;
  label: string;
}

const NavLink: FC<NavLinkProps> = ({ to, children, className }) => (
  <Link to={to} className={className}>
    {children}
  </Link>
);

const Navbar: FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const navLinks: NavLink[] = [
    { path: '/news', label: 'NEWS' },
    { path: '/fixtures', label: 'FIXTURES' },
    { path: '/team', label: 'TEAM' },
    { path: '/statistics', label: 'STATISTICS' },
    { path: '/club', label: 'OUR CLUB' }
  ];

  const handleToggle = (): void => {
    setIsOpen(!isOpen);
  };

  return (
    <nav>
      {/* Top Row */}
      <div className="bg-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center h-12">
          {/* Logo Section (spans across both rows) */}
          <div className="flex items-center h-full">
            <div className="flex-shrink-0 flex items-center mt-[45%]">
              <span className="ml-2 text-xl font-bold text-center">
                <img src={logo} alt="logo" className="h-35 w-35" />
              </span>
            </div>
          </div>

          {/* Right Side - Login/Register */}
          <div className="flex items-center space-x-6">
            <NavLink to="/login" className="hover:text-yellow-400 flex items-center space-x-1">
              <UserCircle2 size={24} color="yellow" strokeWidth={2} className="bg-yellow-400 text-black rounded-full" />
              <span className="text-white">Login</span>
            </NavLink>
            <NavLink to="/register" className="hover:text-yellow-400 flex items-center space-x-1">
              <UserCircle2 size={24} color="yellow" strokeWidth={2} className="bg-yellow-400 text-black rounded-full" />
              <span className="text-white">Register</span>
            </NavLink>
          </div>
        </div>
      </div>


      {/* Bottom Row */}
      <div className="bg-black text-white border-t-4 border-yellow-400">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center h-16">
          {/* Navigation Links */}
          <div className="flex items-center space-x-8 ml-[13%]">
            {navLinks.map((link: NavLink) => (
              <NavLink 
                key={link.path}
                to={link.path} 
                className="hover:text-yellow-400"
              >
                {link.label}
              </NavLink>
            ))}
          </div>

          {/* Right Side - Shop and Search */}
          <div className="flex items-center space-x-6">
            <NavLink 
              to="/shop" 
              className="flex items-center space-x-1 text-yellow-400 px-4 py-2 rounded"
            >
              <ShirtIcon size={20} />
              <span>SHOP Ø</span>
            </NavLink>
            <button className="text-white hover:text-yellow-400">
              <Search size={24} />
              <span className="sr-only">Search</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={handleToggle}
              className="text-white hover:text-yellow-400"
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-black">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navLinks.map((link: NavLink) => (
              <NavLink 
                key={link.path}
                to={link.path} 
                className="block px-3 py-2 hover:text-yellow-400"
              >
                {link.label}
              </NavLink>
            ))}
            <NavLink 
              to="/shop" 
              className="block px-3 py-2 text-black bg-yellow-400 rounded"
            >
              SHOP Ø
            </NavLink>
            <NavLink 
              to="/login" 
              className="block px-3 py-2 hover:text-yellow-400"
            >
              LOGIN
            </NavLink>
            <NavLink 
              to="/register" 
              className="block px-3 py-2 hover:text-yellow-400"
            >
              REGISTER
            </NavLink>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
