import React from "react";
import { Link } from "react-router-dom";
import AppLayout from "@/components/AppLayout";
import { motion } from "framer-motion";
import { IconReportMoney, IconBuildingBank, IconCertificate, IconUserCheck, IconChartBar, IconShieldCheck, IconPigMoney, IconFileCertificate } from "@tabler/icons-react";

const services = [
  {
    id: "consultoria",
    name: "Consultoría Financiera",
    desc: "Asesoría experta para el crecimiento y la seguridad de tu empresa.",
    icon: <IconReportMoney className="w-10 h-10 text-blue-700" />,
    image: "https://images.unsplash.com/photo-1515168833906-d2a3b82b3029?auto=format&fit=crop&w=400&q=80"
  },
  {
    id: "auditoria",
    name: "Auditoría",
    desc: "Auditoría financiera y de cumplimiento para tu tranquilidad.",
    icon: <IconShieldCheck className="w-10 h-10 text-blue-700" />,
    image: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80"
  },
  {
    id: "planificacion",
    name: "Planificación Fiscal",
    desc: "Optimización tributaria y cumplimiento normativo.",
    icon: <IconPigMoney className="w-10 h-10 text-blue-700" />,
    image: "https://images.unsplash.com/photo-1508385082359-f48b1c1b1f57?auto=format&fit=crop&w=400&q=80"
  },
  {
    id: "creacion-empresas",
    name: "Creación de Empresas",
    desc: "Asesoría y trámites para tu nueva empresa.",
    icon: <IconBuildingBank className="w-10 h-10 text-blue-700" />,
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=400&q=80"
  },
  {
    id: "contabilidad",
    name: "Contabilidad",
    desc: "Gestión contable integral y cumplimiento fiscal.",
    icon: <IconChartBar className="w-10 h-10 text-blue-700" />,
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=400&q=80"
  },
  {
    id: "otros",
    name: "Otros Servicios",
    desc: "Soluciones integrales y trámites empresariales.",
    icon: <IconFileCertificate className="w-10 h-10 text-blue-700" />,
    image: "https://images.unsplash.com/photo-1503676382389-4809596d5290?auto=format&fit=crop&w=400&q=80"
  },
];

const Services: React.FC = () => (
  <AppLayout>
    {/* Hero Section */}
    <section className="w-full py-16 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-600 flex flex-col items-center">
      <motion.h1 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} className="text-5xl font-extrabold text-white mb-4">Nuestros Servicios</motion.h1>
      <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.2 }} className="text-xl text-blue-100 max-w-2xl text-center mb-8">
        Soluciones integrales en consultoría financiera, auditoría, fiscal, contabilidad y más. Descubre cómo podemos ayudarte a crecer.
      </motion.p>
    </section>
    {/* Intro Section with Images */}
    <section className="w-full bg-white flex flex-col items-center py-12">
      <div className="max-w-5xl w-full flex flex-col md:flex-row gap-8 items-center mb-8">
        <div className="flex-1 space-y-6">
          <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-lg text-blue-900 text-justify">
            En MG Consultores, nos apasiona acompañar a empresas y emprendedores en su crecimiento financiero. Nuestro equipo combina experiencia, innovación y un enfoque personalizado para ofrecer soluciones que realmente marcan la diferencia.
          </motion.p>
          <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.1 }} className="text-lg text-blue-900 text-justify">
            Creemos en la transparencia, la ética y la excelencia en cada uno de nuestros servicios. Nos adaptamos a las necesidades de cada cliente, brindando asesoría estratégica y acompañamiento constante.
          </motion.p>
          <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.2 }} className="text-lg text-blue-900 text-justify">
            Descubre por qué somos el aliado preferido de empresas que buscan seguridad, crecimiento y éxito sostenible en el mundo financiero y empresarial.
          </motion.p>
        </div>
        <div className="flex-1 flex justify-center md:justify-end">
          <img
            src="https://images.unsplash.com/photo-1556740772-1a741367b93e?auto=format&fit=crop&w=600&q=80"
            alt="Análisis financiero"
            className="w-80 h-80 object-cover rounded-[100px_100px_200px_200px/120px_120px_200px_200px] shadow-2xl border-4 border-blue-100"
            style={{ clipPath: 'ellipse(70% 60% at 50% 40%)' }}
          />
        </div>
      </div>
    </section>
    {/* Services Grid */}
    <section className="w-full py-16 bg-white flex flex-col items-center">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 w-full max-w-6xl">
        {services.map((service, idx) => (
          <motion.div key={service.id} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: idx * 0.1 }} className="group bg-blue-50 rounded-3xl shadow-xl p-8 flex flex-col items-center hover:scale-105 hover:shadow-2xl transition-all duration-300 cursor-pointer">
            <img src={service.image} alt={service.name} className="w-20 h-20 object-cover rounded-xl shadow mb-4" />
            <div className="mb-4 group-hover:scale-110 transition-transform duration-300">{service.icon}</div>
            <h3 className="text-2xl font-bold text-blue-900 mb-2">{service.name}</h3>
            <p className="text-blue-700 text-center mb-4">{service.desc}</p>
            <Link to={`/services/${service.id}`} className="text-blue-500 font-semibold hover:underline">Ver más</Link>
          </motion.div>
        ))}
      </div>
    </section>
    {/* CTA Section */}
    <section className="w-full py-16 bg-gradient-to-r from-blue-900 via-blue-800 to-blue-700 flex flex-col items-center">
      <motion.h2 initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-3xl md:text-4xl font-bold text-white mb-6">¿Listo para impulsar tu empresa?</motion.h2>
      <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.2 }} className="max-w-2xl text-center text-blue-100 mb-8">
        Contáctanos hoy mismo y descubre cómo MG Consultores puede ayudarte a alcanzar tus objetivos financieros y empresariales.
      </motion.p>
      <Link to="/contact" className="inline-block px-8 py-3 rounded-full bg-white hover:bg-blue-100 text-blue-900 font-bold text-lg shadow-lg transition-all duration-300">Contáctanos</Link>
    </section>
  </AppLayout>
);

export default Services; 