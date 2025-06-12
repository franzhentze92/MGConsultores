import React from "react";
import { useParams } from "react-router-dom";
import AppLayout from "@/components/AppLayout";
import { motion } from "framer-motion";
import { IconReportMoney, IconBuildingBank, IconCertificate, IconUserCheck, IconChartBar, IconShieldCheck, IconPigMoney, IconFileCertificate, IconUsers, IconTrophy, IconCalendar, IconChevronDown, IconChevronUp, IconCheck } from "@tabler/icons-react";
import { useState } from "react";

const services = [
  {
    id: "consultoria",
    name: "Consultoría Financiera",
    desc: "Asesoría experta para el crecimiento y la seguridad de tu empresa.",
    icon: <IconReportMoney className="w-10 h-10 text-blue-700" />,
    image: "https://images.unsplash.com/photo-1515168833906-d2a3b82b3029?auto=format&fit=crop&w=400&q=80",
    longDesc: "Nuestro servicio de consultoría financiera ofrece asesoramiento experto para optimizar la gestión financiera de tu empresa. Analizamos tu situación actual, identificamos oportunidades de mejora y desarrollamos estrategias personalizadas para impulsar el crecimiento y la rentabilidad de tu negocio.",
    benefits: [
      "Optimización de recursos financieros",
      "Mejora de la rentabilidad",
      "Reducción de costos operativos",
      "Estrategias de crecimiento",
      "Gestión de riesgos financieros"
    ]
  },
  {
    id: "auditoria",
    name: "Auditoría",
    desc: "Auditoría financiera y de cumplimiento para tu tranquilidad.",
    icon: <IconShieldCheck className="w-10 h-10 text-blue-700" />,
    image: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80",
    longDesc: "Realizamos auditorías financieras exhaustivas para garantizar la transparencia y el cumplimiento normativo de tu empresa. Nuestro equipo de auditores expertos revisa todos los aspectos financieros y operativos para identificar áreas de mejora y asegurar el cumplimiento de las regulaciones vigentes.",
    benefits: [
      "Cumplimiento normativo",
      "Detección de irregularidades",
      "Mejora de procesos internos",
      "Transparencia financiera",
      "Prevención de riesgos"
    ]
  },
  {
    id: "planificacion",
    name: "Planificación Fiscal",
    desc: "Optimización tributaria y cumplimiento normativo.",
    icon: <IconPigMoney className="w-10 h-10 text-blue-700" />,
    image: "https://images.unsplash.com/photo-1508385082359-f48b1c1b1f57?auto=format&fit=crop&w=400&q=80",
    longDesc: "Nuestra planificación fiscal está diseñada para optimizar la carga tributaria de tu empresa mientras garantizamos el cumplimiento de todas las obligaciones fiscales. Desarrollamos estrategias personalizadas que se adaptan a las necesidades específicas de tu negocio.",
    benefits: [
      "Optimización fiscal",
      "Cumplimiento tributario",
      "Reducción de cargas fiscales",
      "Planificación estratégica",
      "Asesoramiento continuo"
    ]
  },
  {
    id: "creacion-empresas",
    name: "Creación de Empresas",
    desc: "Asesoría y trámites para tu nueva empresa.",
    icon: <IconBuildingBank className="w-10 h-10 text-blue-700" />,
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=400&q=80",
    longDesc: "Te acompañamos en todo el proceso de creación de tu empresa, desde la elección de la forma jurídica hasta la puesta en marcha. Nuestro equipo te guiará en cada paso, asegurando que tu negocio comience con las bases más sólidas.",
    benefits: [
      "Asesoramiento legal",
      "Gestión de trámites",
      "Estructuración empresarial",
      "Planificación inicial",
      "Soporte continuo"
    ]
  },
  {
    id: "contabilidad",
    name: "Contabilidad",
    desc: "Gestión contable integral y cumplimiento fiscal.",
    icon: <IconChartBar className="w-10 h-10 text-blue-700" />,
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=400&q=80",
    longDesc: "Ofrecemos un servicio de contabilidad integral que cubre todas las necesidades de tu empresa. Desde la gestión diaria hasta los informes financieros, nos encargamos de mantener tu contabilidad al día y cumplir con todas las obligaciones legales.",
    benefits: [
      "Gestión contable completa",
      "Cumplimiento normativo",
      "Informes financieros",
      "Asesoramiento fiscal",
      "Control de costos"
    ]
  },
  {
    id: "otros",
    name: "Otros Servicios",
    desc: "Soluciones integrales y trámites empresariales.",
    icon: <IconFileCertificate className="w-10 h-10 text-blue-700" />,
    image: "https://images.unsplash.com/photo-1503676382389-4809596d5290?auto=format&fit=crop&w=400&q=80",
    longDesc: "Además de nuestros servicios principales, ofrecemos una amplia gama de soluciones adicionales para cubrir todas las necesidades de tu empresa. Desde trámites administrativos hasta asesoramiento especializado, estamos aquí para ayudarte.",
    benefits: [
      "Servicios personalizados",
      "Soporte administrativo",
      "Asesoramiento especializado",
      "Gestión de trámites",
      "Soluciones integrales"
    ]
  }
];

const stats = [
  { label: "Clientes Satisfechos", value: "+500", icon: <IconUsers className="w-7 h-7 text-blue-700" /> },
  { label: "Años de Experiencia", value: "+15", icon: <IconCalendar className="w-7 h-7 text-blue-700" /> },
  { label: "Proyectos Completados", value: "+1200", icon: <IconTrophy className="w-7 h-7 text-blue-700" /> },
];

const faqs = [
  { q: "¿Qué incluye este servicio?", a: "Incluye asesoría personalizada, análisis de tu situación y estrategias a medida para tu empresa." },
  { q: "¿Cómo puedo contratar el servicio?", a: "Puedes contactarnos a través del formulario o por teléfono para agendar una consulta inicial." },
  { q: "¿Ofrecen soporte continuo?", a: "Sí, brindamos acompañamiento y soporte durante todo el proceso y después de la implementación." },
];

const ServiceDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const service = services.find(s => s.id === id);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  if (!service) {
    return (
      <AppLayout>
        <div className="w-full py-16 bg-white flex flex-col items-center">
          <h1 className="text-3xl font-bold text-blue-900 mb-4">Servicio no encontrado</h1>
          <p className="text-blue-700">El servicio que buscas no existe.</p>
        </div>
      </AppLayout>
    );
  }

  return (
    <AppLayout>
      {/* Hero Section */}
      <section className="w-full relative min-h-[340px] flex items-center justify-center bg-gradient-to-br from-blue-900 via-blue-800 to-blue-600 overflow-hidden">
        <img src="https://images.unsplash.com/photo-1556740772-1a741367b93e?auto=format&fit=crop&w=1200&q=80" alt="Finance background" className="absolute inset-0 w-full h-full object-cover opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/80 to-blue-700/80" />
        <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} className="relative z-10 flex flex-col items-center text-center">
          <div className="mb-6 group-hover:scale-110 transition-transform duration-300">{service.icon}</div>
          <h1 className="text-5xl font-extrabold text-white mb-2">{service.name}</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto mb-4">{service.desc}</p>
          <span className="inline-block bg-white/20 text-white font-semibold px-6 py-2 rounded-full shadow-lg border border-white/30 text-lg mb-2">Soluciones financieras a tu medida</span>
        </motion.div>
        {/* Info Box */}
        <div className="absolute right-8 bottom-8 bg-white/90 rounded-2xl shadow-xl px-8 py-6 flex items-center gap-4 border-2 border-blue-100">
          <span className="text-4xl font-bold text-blue-700">+15</span>
          <span className="text-blue-900 font-semibold">Años de Experiencia</span>
        </div>
      </section>

      {/* Stats Row */}
      <section className="w-full bg-white flex justify-center py-8">
        <div className="flex flex-col md:flex-row gap-8 max-w-4xl w-full items-center justify-center">
          {stats.map((stat, idx) => (
            <div key={idx} className="flex flex-col items-center bg-blue-50 rounded-2xl shadow p-6 w-64">
              <div className="mb-2">{stat.icon}</div>
              <div className="text-3xl font-bold text-blue-900">{stat.value}</div>
              <div className="text-blue-700 font-semibold">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Content Section */}
      <section className="w-full py-16 bg-white flex flex-col items-center">
        <div className="max-w-4xl w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Image and Description */}
            <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="flex flex-col">
              <img src={service.image} alt={service.name} className="w-full h-64 object-cover rounded-2xl shadow-lg mb-8" />
              <h2 className="text-2xl font-bold text-blue-900 mb-4">Descripción del Servicio</h2>
              <p className="text-blue-700 leading-relaxed mb-4 text-justify">{service.longDesc}</p>
              <div className="bg-blue-50 rounded-xl p-4 text-blue-900 font-semibold shadow mb-4">¿Tienes dudas? ¡Contáctanos para una asesoría personalizada!</div>
            </motion.div>

            {/* Benefits */}
            <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="flex flex-col">
              <h2 className="text-2xl font-bold text-blue-900 mb-6">Beneficios</h2>
              <ul className="grid grid-cols-1 gap-4">
                {service.benefits.map((benefit, index) => (
                  <motion.li key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.1 }} className="flex items-center gap-3 bg-white rounded-lg shadow p-4 border-l-4 border-blue-600">
                    <IconCheck className="w-6 h-6 text-blue-600 flex-shrink-0" />
                    <span className="text-blue-700">{benefit}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="w-full bg-blue-50 py-12 flex flex-col items-center">
        <div className="max-w-3xl w-full">
          <h2 className="text-2xl font-bold text-blue-900 mb-8 text-center">Preguntas Frecuentes</h2>
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className="bg-white rounded-xl shadow p-4">
                <button
                  className="flex items-center justify-between w-full text-left text-blue-900 font-semibold text-lg focus:outline-none"
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                >
                  <span>{faq.q}</span>
                  {openFaq === idx ? <IconChevronUp className="w-5 h-5" /> : <IconChevronDown className="w-5 h-5" />}
                </button>
                {openFaq === idx && (
                  <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} className="overflow-hidden mt-2 text-blue-700">
                    {faq.a}
                  </motion.div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-16 bg-gradient-to-r from-blue-900 via-blue-800 to-blue-700 flex flex-col items-center">
        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">¿Listo para comenzar?</h2>
          <p className="max-w-2xl text-center text-blue-100 mb-8">
            Contáctanos hoy mismo y descubre cómo podemos ayudarte a alcanzar tus objetivos financieros y empresariales.
          </p>
          <a href="/contact" className="inline-block px-8 py-3 rounded-full bg-white hover:bg-blue-100 text-blue-900 font-bold text-lg shadow-lg transition-all duration-300">Contáctanos</a>
        </motion.div>
      </section>

      {/* Contact Form Section */}
      <section className="w-full bg-white py-12 flex flex-col items-center">
        <div className="max-w-2xl w-full bg-blue-50 rounded-2xl shadow-xl p-8 border border-blue-100">
          <h2 className="text-2xl font-bold text-blue-900 mb-6 text-center">Solicita más información</h2>
          <form className="space-y-6">
            <div>
              <label className="block text-blue-900 mb-2">Nombre</label>
              <input type="text" className="w-full px-4 py-3 rounded-lg border border-blue-200 focus:outline-none focus:border-blue-500" placeholder="Tu nombre" required />
            </div>
            <div>
              <label className="block text-blue-900 mb-2">Email</label>
              <input type="email" className="w-full px-4 py-3 rounded-lg border border-blue-200 focus:outline-none focus:border-blue-500" placeholder="tu@email.com" required />
            </div>
            <div>
              <label className="block text-blue-900 mb-2">Mensaje</label>
              <textarea className="w-full px-4 py-3 rounded-lg border border-blue-200 focus:outline-none focus:border-blue-500 h-28" placeholder="¿En qué podemos ayudarte?" required />
            </div>
            <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors">Enviar Solicitud</button>
          </form>
        </div>
      </section>
    </AppLayout>
  );
};

export default ServiceDetail; 