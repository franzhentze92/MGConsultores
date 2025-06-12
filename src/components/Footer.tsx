import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-blue-400">MG Consultores</h3>
            <p className="text-gray-300">
              Soluciones financieras profesionales para el crecimiento de su empresa.
            </p>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Servicios</h4>
            <ul className="space-y-2 text-gray-300">
              <li>Administración Financiera</li>
              <li>Contaduría</li>
              <li>Auditoría</li>
              <li>Asesoría Financiera</li>
              <li>Asesoría Fiscal</li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Enlaces</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#inicio" className="hover:text-blue-400">Inicio</a></li>
              <li><a href="#sobre-nosotros" className="hover:text-blue-400">Sobre Nosotros</a></li>
              <li><a href="#servicios" className="hover:text-blue-400">Servicios</a></li>
              <li><a href="#contacto" className="hover:text-blue-400">Contáctanos</a></li>
              <li><a href="#portal" className="hover:text-blue-400">Portal</a></li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contacto</h4>
            <div className="space-y-2 text-gray-300">
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span className="text-sm">Ciudad de Guatemala</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span className="text-sm">+502 2345-6789</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span className="text-sm">info@mgconsultores.gt</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 MG Consultores. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;