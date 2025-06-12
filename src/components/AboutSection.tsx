import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Target, Eye, Heart } from 'lucide-react';

const AboutSection: React.FC = () => {
  const values = [
    {
      icon: <Target className="h-8 w-8 text-blue-600" />,
      title: "Misión",
      content: "Brindar servicios financieros y contables de excelencia, contribuyendo al crecimiento y éxito sostenible de nuestros clientes."
    },
    {
      icon: <Eye className="h-8 w-8 text-blue-600" />,
      title: "Visión",
      content: "Ser la firma consultora líder en Guatemala, reconocida por nuestra integridad, innovación y compromiso con la excelencia."
    },
    {
      icon: <Heart className="h-8 w-8 text-blue-600" />,
      title: "Valores",
      content: "Integridad, transparencia, excelencia profesional y compromiso con el desarrollo de nuestros clientes y comunidad."
    }
  ];

  return (
    <section id="sobre-nosotros" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Sobre Nosotros
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                MG Consultores es una firma guatemalteca especializada en servicios 
                financieros y contables, con más de una década de experiencia 
                sirviendo a empresas de diversos sectores.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Nuestro equipo de profesionales altamente calificados se dedica 
                a proporcionar soluciones personalizadas que impulsen el 
                crecimiento y la estabilidad financiera de nuestros clientes.
              </p>
            </div>
          </div>
          
          <div className="space-y-6">
            {values.map((value, index) => (
              <Card key={index} className="border-l-4 border-l-blue-600">
                <CardHeader className="pb-3">
                  <div className="flex items-center space-x-3">
                    {value.icon}
                    <CardTitle className="text-lg">{value.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 leading-relaxed">{value.content}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;