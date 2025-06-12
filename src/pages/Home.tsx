import React from "react";
import AppLayout from "@/components/AppLayout";
import { motion } from "framer-motion";
import { IconReportMoney, IconBuildingBank, IconPigMoney, IconChartBar, IconShieldCheck, IconUserCheck, IconCoins, IconCalculator, IconBriefcase, IconReceipt2, IconTrendingUp, IconUsersGroup, IconCertificate, IconHandCoins, IconBanknote, IconFileInvoice, IconCashBanknote, IconCreditCard, IconChecklist, IconAward } from "@tabler/icons-react";

const services = [
  { icon: <IconCalculator className="w-10 h-10 text-blue-700 animate-bounce" />, title: "Contabilidad", desc: "Gestión contable integral y cumplimiento fiscal." },
  { icon: <IconShieldCheck className="w-10 h-10 text-blue-700 animate-pulse" />, title: "Auditoría", desc: "Auditoría financiera y de cumplimiento para tu tranquilidad." },
  { icon: <IconReceipt2 className="w-10 h-10 text-blue-700 animate-bounce" />, title: "Asesoría Fiscal", desc: "Optimización tributaria y cumplimiento normativo." },
  { icon: <IconBuildingBank className="w-10 h-10 text-blue-700 animate-pulse" />, title: "Creación de Empresas", desc: "Asesoría y trámites para tu nueva empresa." },
  { icon: <IconReportMoney className="w-10 h-10 text-blue-700 animate-bounce" />, title: "Asesoría Financiera", desc: "Planificación y gestión financiera estratégica." },
  { icon: <IconBriefcase className="w-10 h-10 text-blue-700 animate-pulse" />, title: "Otros Servicios", desc: "Soluciones integrales y trámites empresariales." },
];

const values = [
  { icon: <IconAward className="w-8 h-8 text-blue-700 animate-bounce" />, label: "Excelencia" },
  { icon: <IconHandCoins className="w-8 h-8 text-blue-700 animate-pulse" />, label: "Integridad" },
  { icon: <IconChecklist className="w-8 h-8 text-blue-700 animate-bounce" />, label: "Honestidad" },
  { icon: <IconCertificate className="w-8 h-8 text-blue-700 animate-pulse" />, label: "Veracidad" },
];

const objectives = [
  { icon: <IconUserCheck className="w-10 h-10 text-blue-600 animate-bounce" />, title: "Servicio Personalizado", desc: "Atención a la medida de cada cliente." },
  { icon: <IconTrendingUp className="w-10 h-10 text-blue-600 animate-pulse" />, title: "Asesoría Empresarial", desc: "Mejora continua y gestión financiera sólida." },
  { icon: <IconShieldCheck className="w-10 h-10 text-blue-600 animate-bounce" />, title: "Confianza y Transparencia", desc: "Relación cercana y transparente." },
  { icon: <IconCalculator className="w-10 h-10 text-blue-600 animate-pulse" />, title: "Soluciones Innovadoras", desc: "Estrategias eficaces y creativas." },
];

const testimonials = [
  { name: "Christine Eve", role: "Founder & CEO", text: "MG Consultores superó nuestras expectativas. Su equipo es profesional y confiable." },
  { name: "Kevin Smith", role: "Customer", text: "La asesoría fiscal y contable fue clave para el crecimiento de nuestra empresa." },
  { name: "Jessica Brown", role: "Founder & CEO", text: "Excelente servicio y atención personalizada. 100% recomendados." },
];

const stats = [
  { label: "+15", desc: "Años de Experiencia" },
  { label: "98%", desc: "Tasa de Éxito" },
  { label: "12k", desc: "Clientes Satisfechos" },
  { label: "90+", desc: "Equipo Profesional" },
];

const partners = [1, 2, 3, 4, 5, 6];

const Home: React.FC = () => (
  <AppLayout>
    {/* Hero Section */}
    <section className="relative w-full min-h-[80vh] flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-600 overflow-hidden">
      {/* Animated Blobs */}
      <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 0.3, scale: 1 }} transition={{ duration: 1 }} className="absolute -top-32 -left-32 w-[400px] h-[400px] bg-blue-200 rounded-full filter blur-3xl z-0" />
      <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 0.2, scale: 1 }} transition={{ duration: 1, delay: 0.2 }} className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-blue-100 rounded-full filter blur-2xl z-0" />
      {/* Floating Icons */}
      <motion.div animate={{ y: [0, -20, 0] }} transition={{ repeat: Infinity, duration: 4 }} className="absolute left-24 top-32 z-10">
        <IconReportMoney className="w-14 h-14 text-blue-300 drop-shadow-xl" />
      </motion.div>
      <motion.div animate={{ y: [0, 20, 0] }} transition={{ repeat: Infinity, duration: 5 }} className="absolute right-40 top-20 z-10">
        <IconBuildingBank className="w-12 h-12 text-blue-200 drop-shadow-xl" />
      </motion.div>
      <motion.div animate={{ x: [0, 30, 0] }} transition={{ repeat: Infinity, duration: 6 }} className="absolute left-1/2 bottom-24 z-10">
        <IconPigMoney className="w-12 h-12 text-blue-100 drop-shadow-xl" />
      </motion.div>
      <motion.div animate={{ y: [0, -15, 0] }} transition={{ repeat: Infinity, duration: 4.5 }} className="absolute right-1/3 bottom-10 z-10">
        <IconChartBar className="w-10 h-10 text-blue-200 drop-shadow-xl" />
      </motion.div>
      <motion.div animate={{ x: [0, -20, 0] }} transition={{ repeat: Infinity, duration: 5.5 }} className="absolute left-1/4 top-1/2 z-10">
        <IconShieldCheck className="w-10 h-10 text-blue-100 drop-shadow-xl" />
      </motion.div>
      <motion.div animate={{ y: [0, 15, 0] }} transition={{ repeat: Infinity, duration: 6.5 }} className="absolute right-1/4 top-1/3 z-10">
        <IconUserCheck className="w-10 h-10 text-blue-200 drop-shadow-xl" />
      </motion.div>
      {/* Main Content */}
      <div className="z-20 flex-1 flex flex-col items-start justify-center">
        <motion.h1 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} className="text-5xl md:text-6xl font-extrabold mb-6 text-white drop-shadow-lg">
          Bienvenido a <span className="text-blue-200">MG Consultores</span>
        </motion.h1>
        <motion.p initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.2 }} className="text-xl md:text-2xl max-w-xl mb-8 text-blue-100">
          Soluciones financieras de <span className="font-semibold text-blue-200">confianza</span>, <span className="font-semibold text-blue-200">experiencia</span> y <span className="font-semibold text-blue-200">excelencia</span> para tu empresa.
        </motion.p>
        <div className="flex gap-6 mb-8">
          {stats.map((stat, i) => (
            <motion.div key={stat.label} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.3 + i * 0.1 }} className="flex flex-col items-center">
              <span className="text-3xl md:text-4xl font-bold text-blue-200 animate-pulse">{stat.label}</span>
              <span className="text-blue-100 text-sm md:text-base">{stat.desc}</span>
            </motion.div>
          ))}
        </div>
        <motion.a href="/contact" initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.4 }} className="inline-block px-8 py-3 rounded-full bg-blue-500 hover:bg-blue-400 text-white font-bold text-lg shadow-lg transition-all duration-300">
          Contáctanos
        </motion.a>
      </div>
      <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1, delay: 0.5 }} className="z-20 flex-1 flex items-center justify-center mt-10 md:mt-0">
        <img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80" alt="Business team working together" className="w-96 h-96 object-cover rounded-3xl shadow-2xl border-4 border-blue-100" />
      </motion.div>
    </section>

    {/* About Preview */}
    <section className="w-full py-16 bg-white flex flex-col md:flex-row items-center justify-center gap-12">
      <div className="flex-1 flex flex-col items-center md:items-start">
        <motion.h2 initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">¿Quiénes Somos?</motion.h2>
        <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.2 }} className="max-w-xl text-blue-800 mb-6 text-justify">
          Somos una firma de Contadores Públicos y Auditores con más de 15 años de experiencia, brindando soluciones contables, financieras, fiscales y de auditoría de alta calidad.
        </motion.p>
        <div className="flex flex-row flex-wrap gap-6 justify-center md:justify-start mb-6">
          {values.map((v, i) => (
            <motion.div key={v.label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }} className="flex flex-col items-center bg-blue-50 rounded-xl px-6 py-4 shadow hover:scale-105 transition-transform">
              {v.icon}
              <span className="font-semibold text-blue-900 mt-2">{v.label}</span>
            </motion.div>
          ))}
        </div>
        <a href="/about" className="text-blue-600 font-bold hover:underline">Conócenos</a>
      </div>
      <motion.img src="https://images.unsplash.com/photo-1556740772-1a741367b93e?auto=format&fit=crop&w=400&q=80" alt="Nuestro equipo MG Consultores" initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="w-72 h-72 object-cover rounded-2xl shadow-lg" />
    </section>

    {/* Objectives/Why Us */}
    <section className="w-full py-16 bg-gradient-to-r from-blue-50 via-blue-100 to-blue-50 flex flex-col items-center">
      <motion.h2 initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-3xl md:text-4xl font-bold text-blue-900 mb-8">¿Por qué elegirnos?</motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-full max-w-6xl">
        {objectives.map((o, i) => (
          <motion.div key={o.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }} className="flex flex-col items-center bg-white rounded-2xl px-8 py-6 shadow-lg hover:scale-105 transition-transform">
            {o.icon}
            <span className="font-bold text-blue-900 mb-1 mt-2">{o.title}</span>
            <span className="text-blue-700 text-center text-sm">{o.desc}</span>
          </motion.div>
        ))}
      </div>
    </section>

    {/* Services Section */}
    <section className="w-full py-16 bg-white flex flex-col items-center">
      <motion.h2 initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-3xl md:text-4xl font-bold text-blue-900 mb-10">Nuestros Servicios</motion.h2>
      <div className="flex flex-col md:flex-row flex-wrap gap-8 w-full max-w-6xl justify-center items-center">
        {services.map((service, idx) => (
          <motion.div key={service.title} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: idx * 0.1 }} className="group bg-blue-50 rounded-3xl shadow-xl p-8 flex flex-col items-center w-72 hover:scale-105 hover:shadow-2xl transition-all duration-300 cursor-pointer">
            <div className="mb-4 group-hover:scale-110 transition-transform duration-300">{service.icon}</div>
            <h3 className="text-xl font-bold text-blue-900 mb-2">{service.title}</h3>
            <p className="text-blue-700 text-center mb-4">{service.desc}</p>
            <a href="/services" className="text-blue-500 font-semibold hover:underline">Ver más</a>
          </motion.div>
        ))}
      </div>
      <a href="/services" className="mt-8 text-blue-600 font-bold hover:underline">Ver todos los servicios</a>
    </section>

    {/* Testimonials Section */}
    <section className="w-full py-16 bg-gradient-to-r from-blue-900 via-blue-800 to-blue-700 flex flex-col items-center">
      <motion.h2 initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-3xl md:text-4xl font-bold text-white mb-10">Testimonios</motion.h2>
      <div className="flex flex-row gap-8 justify-center items-stretch w-full max-w-4xl">
        {testimonials.map((t, i) => (
          <motion.div key={t.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.2 }} className="bg-white/80 rounded-2xl shadow-lg p-8 flex flex-col items-center w-80 hover:scale-105 transition-transform">
            <img src={[
              'https://randomuser.me/api/portraits/women/44.jpg',
              'https://randomuser.me/api/portraits/men/32.jpg',
              'https://randomuser.me/api/portraits/women/68.jpg',
            ][i]} alt={t.name} className="w-16 h-16 object-cover rounded-full shadow mb-4" />
            <span className="text-5xl mb-4">“</span>
            <p className="text-blue-900 text-center mb-4">{t.text}</p>
            <span className="font-bold text-blue-800">{t.name}</span>
            <span className="text-blue-600 text-sm">{t.role}</span>
          </motion.div>
        ))}
      </div>
    </section>

    {/* Impact/Stats Section */}
    <section className="w-full py-16 bg-white flex flex-col items-center">
      <motion.h2 initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-3xl md:text-4xl font-bold text-blue-900 mb-10">Nuestro Impacto</motion.h2>
      <div className="flex flex-row flex-wrap gap-10 justify-center items-center">
        {stats.map((stat, i) => (
          <motion.div key={stat.label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }} className="flex flex-col items-center bg-blue-50 rounded-xl px-10 py-8 shadow hover:scale-105 transition-transform">
            <span className="text-4xl font-bold text-blue-900 animate-pulse">{stat.label}</span>
            <span className="text-blue-700 text-center text-lg">{stat.desc}</span>
          </motion.div>
        ))}
      </div>
    </section>

    {/* Contact/CTA Section */}
    <section className="w-full py-16 bg-gradient-to-r from-blue-900 via-blue-800 to-blue-700 flex flex-col items-center">
      <motion.h2 initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-3xl md:text-4xl font-bold text-white mb-6">¿Listo para crecer con nosotros?</motion.h2>
      <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.2 }} className="max-w-2xl text-center text-blue-100 mb-8">
        Contáctanos hoy mismo y descubre cómo MG Consultores puede ayudarte a alcanzar tus objetivos financieros y empresariales.
      </motion.p>
      <a href="mailto:cm@somosmgconsultores.com" className="inline-block px-8 py-3 rounded-full bg-blue-500 hover:bg-blue-400 text-white font-bold text-lg shadow-lg transition-all duration-300 mb-4">Escríbenos</a>
      <a href="tel:+50252430206" className="inline-block px-8 py-3 rounded-full bg-white hover:bg-blue-100 text-blue-900 font-bold text-lg shadow-lg transition-all duration-300">Llámanos: (502) 5243-0206</a>
    </section>

    {/* Partners/Trust Section */}
    <section className="w-full py-10 bg-gradient-to-r from-blue-900 via-blue-800 to-blue-700 flex flex-col items-center">
      <motion.h3 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-2xl font-bold text-white mb-6">Empresas que confían en nosotros</motion.h3>
      <div className="flex flex-row flex-wrap gap-8 justify-center items-center">
        {partners.map((p) => (
          <motion.img key={p} src="/placeholder.svg" alt="Partner Logo" initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 0.7, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: p * 0.1 }} className="w-24 h-24 object-contain grayscale hover:grayscale-0 hover:scale-110 transition-all duration-300 bg-white rounded-full p-2 shadow-md" />
        ))}
      </div>
    </section>
  </AppLayout>
);

export default Home; 