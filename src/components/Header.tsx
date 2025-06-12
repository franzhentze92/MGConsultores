import React from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { Link, NavLink } from "react-router-dom";

interface HeaderProps {
  isMenuOpen: boolean;
  toggleMenu: () => void;
}

const Header: React.FC<HeaderProps> = ({ isMenuOpen, toggleMenu }) => {
  return (
    <header className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-blue-600">MG Consultores</h1>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <NavLink to="/" className={({ isActive }) => isActive ? "text-blue-800 font-bold" : "text-gray-200 hover:text-blue-400 font-medium"}>Inicio</NavLink>
            <NavLink to="/about" className={({ isActive }) => isActive ? "text-blue-800 font-bold" : "text-gray-200 hover:text-blue-400 font-medium"}>Sobre Nosotros</NavLink>
            <NavLink to="/services" className={({ isActive }) => isActive ? "text-blue-800 font-bold" : "text-gray-200 hover:text-blue-400 font-medium"}>Servicios</NavLink>
            <NavLink to="/contact" className={({ isActive }) => isActive ? "text-blue-800 font-bold" : "text-gray-200 hover:text-blue-400 font-medium"}>Contáctanos</NavLink>
            <NavLink to="/portal" className={({ isActive }) => isActive ? "text-blue-800 font-bold" : "text-gray-200 hover:text-blue-400 font-medium"}>Portal</NavLink>
          </nav>

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={toggleMenu}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <NavLink to="/" className={({ isActive }) => isActive ? "block px-3 py-2 text-blue-800 font-bold" : "block px-3 py-2 text-gray-200 hover:text-blue-400"}>Inicio</NavLink>
            <NavLink to="/about" className={({ isActive }) => isActive ? "block px-3 py-2 text-blue-800 font-bold" : "block px-3 py-2 text-gray-200 hover:text-blue-400"}>Sobre Nosotros</NavLink>
            <NavLink to="/services" className={({ isActive }) => isActive ? "block px-3 py-2 text-blue-800 font-bold" : "block px-3 py-2 text-gray-200 hover:text-blue-400"}>Servicios</NavLink>
            <NavLink to="/contact" className={({ isActive }) => isActive ? "block px-3 py-2 text-blue-800 font-bold" : "block px-3 py-2 text-gray-200 hover:text-blue-400"}>Contáctanos</NavLink>
            <NavLink to="/portal" className={({ isActive }) => isActive ? "block px-3 py-2 text-blue-800 font-bold" : "block px-3 py-2 text-gray-200 hover:text-blue-400"}>Portal</NavLink>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;