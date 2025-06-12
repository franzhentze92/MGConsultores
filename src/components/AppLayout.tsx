import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';

const AppLayout: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="min-h-screen bg-white">
      <Header isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
      <main>
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default AppLayout;