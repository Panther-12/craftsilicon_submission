import React, { useState, FC } from 'react';
import { Menu, X, ShoppingBag, User } from 'lucide-react';
import { Link } from 'react-router-dom';

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
    <nav className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo Section */}
          <div className="flex-shrink-0 flex items-center">
            <div className="h-8 w-8 bg-yellow-400 rounded-full"></div>
            <span className="ml-2 text-xl font-bold">LOGO</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
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

          {/* Right Side Icons */}
          <div className="hidden md:flex items-center space-x-4">
            <NavLink 
              to="/shop" 
              className="flex items-center space-x-1 bg-yellow-400 text-black px-4 py-2 rounded"
            >
              <ShoppingBag size={20} />
              <span>SHOP</span>
            </NavLink>
            <div className="flex space-x-2">
              <NavLink to="/login" className="hover:text-yellow-400">
                <User size={20} />
              </NavLink>
            </div>
          </div>

          {/* Mobile menu button */}
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

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
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
                SHOP
              </NavLink>
              <NavLink 
                to="/login" 
                className="block px-3 py-2 hover:text-yellow-400"
              >
                LOGIN
              </NavLink>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;