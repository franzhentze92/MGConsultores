import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Shield, TrendingUp } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <section id="inicio" className="bg-gradient-to-br from-blue-50 to-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Soluciones <span className="text-blue-600">Financieras</span> de Confianza
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Expertos en administración financiera, contaduría y auditoría. 
                Impulsamos el crecimiento de su empresa con asesoría especializada.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                Nuestros Servicios
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg">
                Contáctanos
              </Button>
            </div>

            <div className="flex items-center space-x-8 pt-8">
              <div className="flex items-center space-x-2">
                <Shield className="h-6 w-6 text-blue-600" />
                <span className="text-sm font-medium text-gray-700">Confianza</span>
              </div>
              <div className="flex items-center space-x-2">
                <TrendingUp className="h-6 w-6 text-blue-600" />
                <span className="text-sm font-medium text-gray-700">Crecimiento</span>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-blue-600 rounded-2xl p-8 shadow-2xl">
              <div className="bg-white rounded-xl p-6 space-y-4">
                <h3 className="text-lg font-semibold text-gray-900">Portal de Clientes</h3>
                <p className="text-gray-600">Acceda a sus reportes financieros personalizados</p>
                <Button className="w-full">Acceder al Portal</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;