import React, { useState } from "react";
import AppLayout from "@/components/AppLayout";
import { motion } from "framer-motion";
import { IconPhone, IconMail, IconMapPin, IconClock, IconBrandLinkedin, IconBrandTwitter, IconBrandFacebook, IconCheck } from "@tabler/icons-react";

const Contact: React.FC = () => {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      setForm({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setSuccess(false), 3000);
    }, 1500);
  };

  return (
    <AppLayout>
      <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 flex flex-col">
        {/* Hero Section */}
        <div className="relative h-[38vh] flex items-center justify-center overflow-hidden">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="absolute inset-0 bg-[url('/images/contact-bg.jpg')] bg-cover bg-center scale-105 blur-sm"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/80 to-blue-700/80 z-10" />
          <div className="relative z-20 flex flex-col items-center text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-6xl font-extrabold text-white drop-shadow mb-4 tracking-tight">
                Contáctanos
              </h1>
              <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto mb-2">
                ¿Listo para llevar tus finanzas al siguiente nivel?
              </p>
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.6, type: "spring", stiffness: 200 }}
                className="flex justify-center gap-4 mt-4"
              >
                <a
                  href="tel:+50223145678"
                  className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white/20 border border-white/30 text-white text-2xl shadow-lg animate-bounce hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  aria-label="Llamar"
                >
                  <IconPhone />
                </a>
                <a
                  href="mailto:info@mgconsultoresgt.com"
                  className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white/20 border border-white/30 text-white text-2xl shadow-lg animate-pulse hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  aria-label="Enviar correo"
                >
                  <IconMail />
                </a>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=6a+Avenida+10-55,+Zona+9,+Ciudad+de+Guatemala,+Guatemala"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white/20 border border-white/30 text-white text-2xl shadow-lg animate-bounce hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  aria-label="Ver mapa"
                >
                  <IconMapPin />
                </a>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Main Content */}
        <div className="container mx-auto px-4 py-16 flex-1">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-8"
            >
              <div className="bg-white/20 backdrop-blur-2xl rounded-2xl p-10 shadow-xl border border-white/30">
                <h2 className="text-3xl font-bold text-white mb-8">Información de Contacto</h2>
                <div className="space-y-6">
                  <div className="flex items-center gap-4 group">
                    <span className="bg-blue-600 p-3 rounded-lg shadow-lg group-hover:scale-110 transition-transform">
                      <IconPhone className="w-6 h-6 text-white" />
                    </span>
                    <div>
                      <h3 className="text-white font-semibold">Teléfono</h3>
                      <p className="text-white/80">+502 2314-5678</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 group">
                    <span className="bg-blue-600 p-3 rounded-lg shadow-lg group-hover:scale-110 transition-transform">
                      <IconMail className="w-6 h-6 text-white" />
                    </span>
                    <div>
                      <h3 className="text-white font-semibold">Email</h3>
                      <p className="text-white/80">info@mgconsultoresgt.com</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 group">
                    <span className="bg-blue-600 p-3 rounded-lg shadow-lg group-hover:scale-110 transition-transform">
                      <IconMapPin className="w-6 h-6 text-white" />
                    </span>
                    <div>
                      <h3 className="text-white font-semibold">Dirección</h3>
                      <p className="text-white/80">6a Avenida 10-55, Zona 9, Ciudad de Guatemala, Guatemala</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 group">
                    <span className="bg-blue-600 p-3 rounded-lg shadow-lg group-hover:scale-110 transition-transform">
                      <IconClock className="w-6 h-6 text-white" />
                    </span>
                    <div>
                      <h3 className="text-white font-semibold">Horario</h3>
                      <p className="text-white/80">Lunes - Viernes: 9:00 AM - 6:00 PM</p>
                    </div>
                  </div>
                </div>
                {/* Social Media */}
                <div className="mt-10">
                  <h3 className="text-white font-semibold mb-4">Síguenos</h3>
                  <div className="flex gap-4">
                    <a href="#" className="bg-white/20 border border-white/30 p-3 rounded-full hover:bg-blue-600 transition-colors shadow-lg" aria-label="LinkedIn">
                      <IconBrandLinkedin className="w-6 h-6 text-white" />
                    </a>
                    <a href="#" className="bg-white/20 border border-white/30 p-3 rounded-full hover:bg-blue-600 transition-colors shadow-lg" aria-label="Twitter">
                      <IconBrandTwitter className="w-6 h-6 text-white" />
                    </a>
                    <a href="#" className="bg-white/20 border border-white/30 p-3 rounded-full hover:bg-blue-600 transition-colors shadow-lg" aria-label="Facebook">
                      <IconBrandFacebook className="w-6 h-6 text-white" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="bg-white/20 backdrop-blur-2xl rounded-2xl p-10 shadow-xl border border-white/30">
                <h2 className="text-3xl font-bold text-white mb-8">Envíanos un Mensaje</h2>
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="relative">
                      <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        className="peer w-full px-4 py-3 rounded-lg bg-white/10 border border-white/30 text-white placeholder-transparent focus:outline-none focus:border-blue-400 transition-colors"
                        placeholder="Nombre"
                        required
                        autoComplete="off"
                      />
                      <label className="absolute left-4 top-3 text-white/70 pointer-events-none transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-white/70 peer-focus:-top-5 peer-focus:text-xs peer-focus:text-blue-200 bg-transparent px-1">
                        Nombre
                      </label>
                    </div>
                    <div className="relative">
                      <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        className="peer w-full px-4 py-3 rounded-lg bg-white/10 border border-white/30 text-white placeholder-transparent focus:outline-none focus:border-blue-400 transition-colors"
                        placeholder="Email"
                        required
                        autoComplete="off"
                      />
                      <label className="absolute left-4 top-3 text-white/70 pointer-events-none transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-white/70 peer-focus:-top-5 peer-focus:text-xs peer-focus:text-blue-200 bg-transparent px-1">
                        Email
                      </label>
                    </div>
                  </div>
                  <div className="relative">
                    <input
                      type="text"
                      name="subject"
                      value={form.subject}
                      onChange={handleChange}
                      className="peer w-full px-4 py-3 rounded-lg bg-white/10 border border-white/30 text-white placeholder-transparent focus:outline-none focus:border-blue-400 transition-colors"
                      placeholder="Asunto"
                      required
                      autoComplete="off"
                    />
                    <label className="absolute left-4 top-3 text-white/70 pointer-events-none transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-white/70 peer-focus:-top-5 peer-focus:text-xs peer-focus:text-blue-200 bg-transparent px-1">
                      Asunto
                    </label>
                  </div>
                  <div className="relative">
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      className="peer w-full px-4 py-3 rounded-lg bg-white/10 border border-white/30 text-white placeholder-transparent focus:outline-none focus:border-blue-400 transition-colors h-32 resize-none"
                      placeholder="Mensaje"
                      required
                    />
                    <label className="absolute left-4 top-3 text-white/70 pointer-events-none transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-white/70 peer-focus:-top-5 peer-focus:text-xs peer-focus:text-blue-200 bg-transparent px-1">
                      Mensaje
                    </label>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors flex items-center justify-center gap-2 text-lg shadow-lg disabled:opacity-60"
                    disabled={loading}
                  >
                    {loading ? (
                      <span className="animate-spin h-5 w-5 border-2 border-white border-t-transparent rounded-full mr-2" />
                    ) : (
                      <IconMail className="w-5 h-5" />
                    )}
                    {loading ? "Enviando..." : "Enviar Mensaje"}
                  </button>
                </form>
                {/* Success Toast */}
                {success && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    className="fixed bottom-8 right-8 bg-green-600 text-white px-6 py-4 rounded-xl shadow-2xl flex items-center gap-3 z-50"
                  >
                    <IconCheck className="w-6 h-6" />
                    ¡Mensaje enviado con éxito!
                  </motion.div>
                )}
              </div>
            </motion.div>
          </div>
          {/* Full-width Map Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-12"
          >
            <div className="bg-white/20 backdrop-blur-2xl rounded-2xl p-8 shadow-xl border border-white/30">
              <h2 className="text-2xl font-bold text-white mb-6">Ubicación</h2>
              <div className="w-full aspect-video rounded-lg overflow-hidden border border-white/20">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3762.9632343395397!2d-99.1673!3d19.4270!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1ff35f5bd1563%3A0x6c366f0e2de02ff7!2sAv.%20Reforma%2C%20Ciudad%20de%20M%C3%A9xico%2C%20CDMX!5e0!3m2!1ses-419!2smx!4v1647881234567!5m2!1ses-419!2smx"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                />
              </div>
              <div className="mt-4 text-right">
                <a href="https://goo.gl/maps/xyz" target="_blank" rel="noopener noreferrer" className="text-blue-200 hover:text-white underline text-sm">Obtener direcciones</a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </AppLayout>
  );
};

export default Contact; 