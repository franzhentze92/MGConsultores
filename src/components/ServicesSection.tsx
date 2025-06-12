import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Calculator, FileText, Search, TrendingUp, Receipt } from 'lucide-react';

const ServicesSection: React.FC = () => {
  const services = [
    {
      icon: <TrendingUp className="h-8 w-8 text-blue-600" />,
      title: "Administración Financiera",
      description: "Gestión integral de recursos financieros para optimizar la rentabilidad de su empresa."
    },
    {
      icon: <Calculator className="h-8 w-8 text-blue-600" />,
      title: "Contaduría",
      description: "Servicios contables completos con registro preciso y cumplimiento normativo."
    },
    {
      icon: <Search className="h-8 w-8 text-blue-600" />,
      title: "Auditoría",
      description: "Revisiones exhaustivas para garantizar transparencia y control interno."
    },
    {
      icon: <FileText className="h-8 w-8 text-blue-600" />,
      title: "Asesoría Financiera",
      description: "Consultoría estratégica para la toma de decisiones financieras acertadas."
    },
    {
      icon: <Receipt className="h-8 w-8 text-blue-600" />,
      title: "Asesoría Fiscal",
      description: "Orientación especializada en materia tributaria y cumplimiento fiscal."
    }
  ];

  return (
    <section id="servicios" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Nuestros Servicios
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ofrecemos soluciones integrales en servicios financieros y contables 
            para impulsar el éxito de su empresa.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="mb-4">{service.icon}</div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;