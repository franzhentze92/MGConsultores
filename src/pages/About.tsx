import React, { useRef } from "react";
import AppLayout from "@/components/AppLayout";
import { motion } from "framer-motion";
import { BarChart2, Globe, Lightbulb, Users, ChevronLeft, ChevronRight } from "lucide-react";

const timeline = [
  { year: "2008", title: "Fundación de MG Consultores", desc: "Nacimos con la visión de brindar soluciones contables y financieras de alta calidad en Guatemala.", icon: "🌱" },
  { year: "2012", title: "Primeros grandes clientes", desc: "Nos consolidamos como socios estratégicos de empresas líderes en la región.", icon: "🤝" },
  { year: "2016", title: "Expansión de servicios", desc: "Incorporamos asesoría fiscal, auditoría y consultoría empresarial.", icon: "🚀" },
  { year: "2021", title: "Reconocimientos y certificaciones", desc: "Recibimos premios y certificaciones por excelencia y ética profesional.", icon: "🏆" },
  { year: "Hoy", title: "Equipo multidisciplinario", desc: "Más de 90 profesionales comprometidos con la excelencia y la innovación.", icon: "🌟" },
];

const founder = {
  name: "María González",
  role: "Socia Fundadora",
  img: "https://randomuser.me/api/portraits/women/44.jpg",
  message: "Desde el primer día, nuestro propósito ha sido ayudar a las empresas a crecer con integridad, excelencia y pasión. MG Consultores es más que una firma: es una familia comprometida con el éxito de nuestros clientes.",
  quote: "La excelencia es nuestra brújula y la integridad nuestro compromiso.",
};

const cultureImages = [
  "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1503676382389-4809596d5290?auto=format&fit=crop&w=400&q=80",
];

const certifications = [
  { name: "IFAC", img: "https://upload.wikimedia.org/wikipedia/commons/7/7e/IFAC_logo.png" },
  { name: "Colegio de Contadores Públicos", img: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png" },
  { name: "ISO 9001", img: "https://cdn-icons-png.flaticon.com/512/190/190411.png" },
];

const teamSpotlight = [
  { name: "Carlos Méndez", role: "Director de Auditoría", img: "https://randomuser.me/api/portraits/men/32.jpg", bio: "Apasionado por la transparencia y la mejora continua. Amante del ciclismo y la música clásica." },
  { name: "Ana López", role: "Gerente de Contabilidad", img: "https://randomuser.me/api/portraits/women/68.jpg", bio: "Experta en gestión financiera y liderazgo de equipos. Disfruta la lectura y el senderismo." },
  { name: "Luis Pérez", role: "Consultor Fiscal", img: "https://randomuser.me/api/portraits/men/65.jpg", bio: "Especialista en planificación fiscal y cumplimiento. Fan del café y los deportes." },
];

const uniquePoints = [
  { icon: <BarChart2 className="w-8 h-8 text-blue-700" />, title: "Enfoque Analítico", desc: "Utilizamos tecnología y análisis avanzado para ofrecer soluciones personalizadas." },
  { icon: <Globe className="w-8 h-8 text-blue-700" />, title: "Impacto Social", desc: "Contribuimos al desarrollo económico y social de Guatemala." },
  { icon: <Lightbulb className="w-8 h-8 text-blue-700" />, title: "Innovación Constante", desc: "Siempre buscamos nuevas formas de agregar valor a nuestros clientes." },
  { icon: <Users className="w-8 h-8 text-blue-700" />, title: "Cultura de Familia", desc: "Un ambiente de trabajo humano, cercano y colaborativo." },
];

const stats = [
  { label: "+15", desc: "Años de Trayectoria" },
  { label: "90+", desc: "Profesionales" },
  { label: "12k", desc: "Clientes Satisfechos" },
  { label: "98%", desc: "Tasa de Éxito" },
];

const About: React.FC = () => {
  // Team carousel logic
  const carouselRef = useRef<HTMLDivElement>(null);
  const scrollBy = (offset: number) => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: offset, behavior: "smooth" });
    }
  };

  return (
    <AppLayout>
      {/* Main Page Title Section */}
      <section className="w-full py-16 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-600 flex flex-col items-center">
        <h1 className="text-5xl font-extrabold text-white mb-4">Sobre Nosotros</h1>
        <p className="text-xl text-blue-100 max-w-2xl text-center mb-4">Conoce la historia, misión y valores que nos definen como firma líder en consultoría financiera y empresarial en Guatemala.</p>
      </section>

      {/* Company Description Section */}
      <section className="w-full py-16 bg-white flex flex-col items-center">
        <motion.h1 initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-4xl md:text-5xl font-extrabold text-blue-900 mb-8">Sobre MG Consultores</motion.h1>
        <div className="max-w-3xl w-full flex flex-col items-center">
          <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-blue-800 text-lg mb-6 text-justify">
            MG Consultores es una firma líder en consultoría financiera, contable y fiscal en Guatemala. Desde nuestra fundación, nos hemos comprometido a brindar soluciones integrales y personalizadas que impulsan el crecimiento y la seguridad de nuestros clientes. Nuestro equipo multidisciplinario combina experiencia, innovación y un profundo conocimiento del entorno empresarial para ofrecer resultados de alto impacto.
          </motion.p>
          <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.1 }} className="text-blue-800 text-lg text-justify">
            Nuestra misión es ser el aliado estratégico de empresas y emprendedores, guiándolos con integridad, ética y excelencia profesional. Creemos en la transparencia, la mejora continua y el compromiso con el desarrollo económico y social de Guatemala.
          </motion.p>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="w-full py-16 bg-gradient-to-br from-blue-50 via-blue-100 to-blue-50 flex flex-col items-center">
        <motion.h1 initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-4xl md:text-5xl font-extrabold text-blue-900 mb-10">Nuestra Historia</motion.h1>
        <div className="relative w-full max-w-4xl">
          <div className="absolute left-1/2 top-0 h-full w-1 bg-blue-200 rounded-full -translate-x-1/2" />
          <div className="flex flex-col gap-12 z-10 relative">
            {timeline.map((item, i) => (
              <motion.div key={item.year} initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: i * 0.1 }} className={`flex ${i % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} items-center gap-8`}> 
                <div className="flex flex-col items-center min-w-[80px]">
                  <span className="text-3xl mb-2">{item.icon}</span>
                  <span className="font-bold text-blue-900 text-lg">{item.year}</span>
                </div>
                <div className="bg-white rounded-2xl shadow-lg p-6 flex-1">
                  <span className="font-bold text-blue-900 text-xl mb-1 block">{item.title}</span>
                  <span className="text-blue-700 text-base">{item.desc}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Founder Message Section */}
      <section className="w-full py-16 bg-white flex flex-col md:flex-row items-center justify-center gap-12">
        <motion.img src={founder.img} alt={founder.name} initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="w-40 h-40 object-cover rounded-full shadow-lg mb-6 md:mb-0" />
        <div className="flex-1 flex flex-col items-center md:items-start">
          <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-3xl font-bold text-blue-900 mb-2">Mensaje de la Fundadora</motion.h2>
          <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.1 }} className="text-blue-800 text-lg mb-4 max-w-xl text-center md:text-left">{founder.message}</motion.p>
          <motion.blockquote initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.2 }} className="italic text-blue-600 border-l-4 border-blue-300 pl-4">“{founder.quote}”</motion.blockquote>
          <span className="mt-4 font-bold text-blue-900">{founder.name} – {founder.role}</span>
        </div>
      </section>

      {/* Company Culture Collage */}
      <section className="w-full py-16 bg-gradient-to-r from-blue-100 via-blue-50 to-blue-100 flex flex-col items-center">
        <motion.h2 initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-3xl md:text-4xl font-bold text-blue-900 mb-10">Nuestra Cultura</motion.h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
          {cultureImages.map((img, i) => (
            <motion.img key={img} src={img} alt="Cultura MG Consultores" initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }} className="w-40 h-40 object-cover rounded-xl shadow-lg" />
          ))}
        </div>
        <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.2 }} className="max-w-2xl text-center text-blue-800">
          Fomentamos un ambiente de trabajo humano, colaborativo y orientado al desarrollo profesional y personal de nuestro equipo.
        </motion.p>
      </section>

      {/* Certifications & Awards */}
      <section className="w-full py-16 bg-white flex flex-col items-center">
        <motion.h2 initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-3xl md:text-4xl font-bold text-blue-900 mb-10">Certificaciones y Reconocimientos</motion.h2>
        <div className="flex flex-row flex-wrap gap-10 justify-center items-center w-full max-w-4xl mb-8">
          {certifications.map((c, i) => (
            <motion.div key={c.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }} className="flex flex-col items-center bg-blue-50 rounded-2xl px-8 py-6 shadow-lg hover:scale-105 transition-transform">
              <img src={c.img} alt={c.name} className="w-16 h-16 object-contain rounded-full shadow mb-2 bg-white" />
              <span className="font-bold text-blue-900 text-lg mb-1">{c.name}</span>
            </motion.div>
          ))}
        </div>
        <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.2 }} className="max-w-2xl text-center text-blue-800">
          Nuestro compromiso con la calidad y la ética profesional está respaldado por certificaciones y reconocimientos nacionales e internacionales.
        </motion.p>
      </section>

      {/* Team Spotlight Carousel */}
      <section className="w-full py-16 bg-gradient-to-r from-blue-900 via-blue-800 to-blue-700 flex flex-col items-center">
        <motion.h2 initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-3xl md:text-4xl font-bold text-white mb-10">Conoce a Nuestro Equipo</motion.h2>
        <div className="relative w-full max-w-3xl">
          {/* Gradient fades */}
          <div className="pointer-events-none absolute left-0 top-0 h-full w-16 bg-gradient-to-r from-blue-900/90 to-transparent z-10" />
          <div className="pointer-events-none absolute right-0 top-0 h-full w-16 bg-gradient-to-l from-blue-900/90 to-transparent z-10" />
          {/* Arrow buttons (desktop only) */}
          <button onClick={() => scrollBy(-260)} className="hidden md:flex absolute left-2 top-1/2 -translate-y-1/2 z-20 bg-white/80 hover:bg-white text-blue-900 rounded-full p-2 shadow transition-all"><ChevronLeft className="w-6 h-6" /></button>
          <button onClick={() => scrollBy(260)} className="hidden md:flex absolute right-2 top-1/2 -translate-y-1/2 z-20 bg-white/80 hover:bg-white text-blue-900 rounded-full p-2 shadow transition-all"><ChevronRight className="w-6 h-6" /></button>
          <div ref={carouselRef} className="flex flex-row gap-10 justify-start items-center w-full max-w-3xl overflow-x-auto pb-4 snap-x snap-mandatory scroll-smooth">
            {teamSpotlight.map((member, i) => (
              <motion.div key={member.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex flex-col items-center bg-white/90 rounded-2xl px-8 py-8 shadow-lg hover:scale-105 hover:rotate-[-2deg] transition-transform min-w-[260px] snap-center">
                <img src={member.img} alt={member.name} className="w-24 h-24 object-cover rounded-full shadow mb-4" />
                <span className="font-bold text-blue-900 text-lg mb-1">{member.name}</span>
                <span className="text-blue-700 text-center text-sm mb-2">{member.role}</span>
                <span className="text-blue-800 text-center text-sm italic">{member.bio}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why We're Different Infographics */}
      <section className="w-full py-16 bg-white flex flex-col items-center">
        <motion.h2 initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-3xl md:text-4xl font-bold text-blue-900 mb-10">¿Qué nos hace únicos?</motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full max-w-4xl mb-10">
          {uniquePoints.map((p, i) => (
            <motion.div key={p.title} initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: i * 0.1 }} className="flex flex-row items-center bg-blue-50 rounded-2xl px-8 py-6 shadow-lg hover:scale-105 transition-transform">
              <span className="text-4xl mr-6">{p.icon}</span>
              <div>
                <span className="font-bold text-blue-900 text-lg mb-1 block">{p.title}</span>
                <span className="text-blue-700 text-base">{p.desc}</span>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="flex flex-row flex-wrap gap-10 justify-center items-center">
          {stats.map((stat, i) => (
            <motion.div key={stat.label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }} className="flex flex-col items-center bg-blue-100 rounded-xl px-10 py-8 shadow hover:scale-105 transition-transform">
              <span className="text-4xl font-bold text-blue-900 animate-pulse">{stat.label}</span>
              <span className="text-blue-700 text-center text-lg">{stat.desc}</span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Join Us CTA Section */}
      <section className="w-full py-16 bg-gradient-to-r from-blue-900 via-blue-800 to-blue-700 flex flex-col items-center">
        <motion.h2 initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-3xl md:text-4xl font-bold text-white mb-6">¿Quieres formar parte de nuestro equipo?</motion.h2>
        <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.2 }} className="max-w-2xl text-center text-blue-100 mb-8">
          En MG Consultores valoramos el talento y la pasión por el servicio. Si quieres crecer profesionalmente y aportar a una firma líder, ¡contáctanos!
        </motion.p>
        <a href="mailto:cm@somosmgconsultores.com" className="inline-block px-8 py-3 rounded-full bg-blue-500 hover:bg-blue-400 text-white font-bold text-lg shadow-lg transition-all duration-300 mb-4">Envíanos tu CV</a>
        <a href="/contact" className="inline-block px-8 py-3 rounded-full bg-white hover:bg-blue-100 text-blue-900 font-bold text-lg shadow-lg transition-all duration-300">Contáctanos</a>
      </section>
    </AppLayout>
  );
};

export default About; 