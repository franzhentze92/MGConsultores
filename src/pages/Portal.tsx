import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { 
  IconLogout, 
  IconRefresh, 
  IconMenu2, 
  IconX, 
  IconChartBar, 
  IconFileText, 
  IconMessage2,
  IconChevronRight,
  IconChevronLeft,
  IconHome,
  IconDownload,
  IconEye,
  IconFilter,
  IconSearch,
  IconTimeline,
  IconFileUpload,
  IconFileInvoice,
  IconShare,
  IconCheck,
  IconAlertCircle
} from "@tabler/icons-react";

// Example document data - replace with actual data
const documents = [
  {
    id: 1,
    title: "Estado de Cuenta",
    type: "financial",
    date: "2024-03-15",
    category: "Cuentas",
    url: "/documents/estado-cuenta.pdf"
  },
  {
    id: 2,
    title: "Reporte Fiscal",
    type: "tax",
    date: "2024-03-10",
    category: "Fiscal",
    url: "/documents/reporte-fiscal.pdf"
  },
  {
    id: 3,
    title: "Contrato de Servicios",
    type: "contract",
    date: "2024-02-28",
    category: "Contratos",
    url: "/documents/contrato.pdf"
  },
  {
    id: 4,
    title: "Declaración Anual",
    type: "tax",
    date: "2024-02-15",
    category: "Fiscal",
    url: "/documents/declaracion-anual.pdf"
  }
];

// Example messages data - replace with actual data
const messages = [
  { id: 1, sender: "Administrador", content: "Bienvenido al portal. Si tienes dudas, contáctanos." },
  { id: 2, sender: "Soporte", content: "Tu reporte fiscal está disponible en la sección de documentos." },
  { id: 3, sender: "Contador", content: "Recuerda revisar tus declaraciones antes de fin de mes." }
];

// Example timeline data
const timeline = [
  {
    id: 1,
    type: "document",
    title: "Documento subido",
    description: "Se subió el documento 'Estado de Cuenta'.",
    date: "2024-06-01 10:15",
    icon: <IconFileUpload className="w-7 h-7 text-blue-600" />,
    color: "bg-blue-100"
  },
  {
    id: 2,
    type: "invoice",
    title: "Factura cargada",
    description: "Se cargó la factura #12345.",
    date: "2024-06-01 11:00",
    icon: <IconFileInvoice className="w-7 h-7 text-green-600" />,
    color: "bg-green-100"
  },
  {
    id: 3,
    type: "report",
    title: "Reporte compartido",
    description: "Se compartió el reporte fiscal anual.",
    date: "2024-06-01 12:30",
    icon: <IconShare className="w-7 h-7 text-purple-600" />,
    color: "bg-purple-100"
  },
  {
    id: 4,
    type: "other",
    title: "Tarea completada",
    description: "Se completó la revisión de documentos.",
    date: "2024-06-01 13:00",
    icon: <IconCheck className="w-7 h-7 text-teal-600" />,
    color: "bg-teal-100"
  },
  {
    id: 5,
    type: "alert",
    title: "Alerta",
    description: "Falta cargar la declaración mensual.",
    date: "2024-06-01 14:00",
    icon: <IconAlertCircle className="w-7 h-7 text-red-600" />,
    color: "bg-red-100"
  }
];

const Portal: React.FC = () => {
  const navigate = useNavigate();
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [activeSection, setActiveSection] = useState("reports");
  const [selectedDocument, setSelectedDocument] = useState<typeof documents[0] | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [selectedType, setSelectedType] = useState<string>("all");

  // Get unique categories and types for filters
  const categories = ["all", ...new Set(documents.map(doc => doc.category))];
  const types = ["all", ...new Set(documents.map(doc => doc.type))];

  // Filter documents based on search and filters
  const filteredDocuments = documents.filter(doc => {
    const matchesSearch = doc.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "all" || doc.category === selectedCategory;
    const matchesType = selectedType === "all" || doc.type === selectedType;
    return matchesSearch && matchesCategory && matchesType;
  });

  const handleDocumentClick = (document: typeof documents[0]) => {
    setSelectedDocument(document);
  };

  const handleClosePreview = () => {
    setSelectedDocument(null);
  };

  const handleDownload = (url: string, title: string) => {
    // In a real application, this would trigger a download
    // For now, we'll just open in a new tab
    window.open(url, '_blank');
  };

  useEffect(() => {
    // Check if user is authenticated
    const isAuthenticated = localStorage.getItem("isAuthenticated");
    if (!isAuthenticated) {
      navigate("/login");
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated");
    navigate("/login");
  };

  const handleRefresh = () => {
    window.location.reload();
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const renderContent = () => {
    switch (activeSection) {
      case "reports":
        return (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-xl shadow-lg overflow-hidden"
          >
            <div className="p-6 border-b border-gray-200">
              <h2 className="text-xl font-semibold text-blue-900">Reporte Financiero 2025</h2>
              <p className="text-gray-600 mt-1">Visualización de datos y métricas del programa</p>
            </div>
            
            <div className="p-4">
              <div className="aspect-w-16 aspect-h-9 w-full">
                <iframe
                  title="Reporte Programa Madurante"
                  width="100%"
                  height="612"
                  src="https://app.powerbi.com/view?r=eyJrIjoiM2MzYzZkOGQtNDA1YS00ODdmLTkzMTItMDE0ZDQxYzE1NGUxIiwidCI6IjlmMmQzMzdhLTQ5Y2QtNDczZi1iZDI4LTI5NGNkNWYzMThhYiIsImMiOjR9"
                  frameBorder="0"
                  allowFullScreen
                  className="rounded-lg shadow-md"
                />
              </div>
            </div>
          </motion.div>
        );

      case "documents":
        return (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-xl shadow-lg overflow-hidden"
          >
            <div className="p-6 border-b border-gray-200">
              <h2 className="text-xl font-semibold text-blue-900">Documentos</h2>
              <p className="text-gray-600 mt-1">Accede a tus documentos financieros</p>
            </div>
            
            {/* Filters and Search */}
            <div className="p-6 border-b border-gray-200 bg-gray-50">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1">
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <IconSearch className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="text"
                      placeholder="Buscar documentos..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                </div>
                <div className="flex gap-4">
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="block w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  >
                    {categories.map(category => (
                      <option key={category} value={category}>
                        {category === "all" ? "Todas las categorías" : category}
                      </option>
                    ))}
                  </select>
                  <select
                    value={selectedType}
                    onChange={(e) => setSelectedType(e.target.value)}
                    className="block w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  >
                    {types.map(type => (
                      <option key={type} value={type}>
                        {type === "all" ? "Todos los tipos" : type}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
            
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {filteredDocuments.map((doc) => (
                  <div
                    key={doc.id}
                    className="bg-blue-50 p-4 rounded-lg hover:bg-blue-100 transition-colors cursor-pointer"
                    onClick={() => handleDocumentClick(doc)}
                  >
                    <div className="flex items-center space-x-3">
                      <IconFileText className="h-8 w-8 text-blue-600" />
                      <div className="flex-1">
                        <h3 className="font-medium text-blue-900">{doc.title}</h3>
                        <p className="text-sm text-blue-600">
                          {new Date(doc.date).toLocaleDateString()}
                        </p>
                        <div className="mt-2 flex gap-2">
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              handleDownload(doc.url, doc.title);
                            }}
                            className="text-blue-600 hover:text-blue-800"
                          >
                            <IconDownload className="h-5 w-5" />
                          </button>
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              handleDocumentClick(doc);
                            }}
                            className="text-blue-600 hover:text-blue-800"
                          >
                            <IconEye className="h-5 w-5" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        );

      case "cronologia":
        return (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-xl shadow-lg overflow-hidden"
          >
            <div className="p-6 border-b border-gray-200 flex items-center gap-3">
              <IconTimeline className="w-7 h-7 text-blue-700" />
              <h2 className="text-xl font-semibold text-blue-900">Cronología</h2>
            </div>
            <div className="p-8">
              <div className="relative border-l-4 border-blue-200 ml-6">
                {timeline.map((item, idx) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, x: 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    className="mb-12 flex items-start group"
                  >
                    <span className={`absolute -left-8 flex items-center justify-center w-14 h-14 rounded-full shadow-lg border-4 border-white z-10 ${item.color} group-hover:scale-110 transition-transform duration-300`}>
                      {item.icon}
                    </span>
                    <div className="ml-8">
                      <h3 className="text-lg font-bold text-blue-900 mb-1 flex items-center gap-2">{item.title}</h3>
                      <p className="text-blue-700 mb-1">{item.description}</p>
                      <span className="text-xs text-gray-400">{item.date}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-4">
              <button
                onClick={toggleSidebar}
                className="text-blue-600 hover:text-blue-800"
              >
                {isSidebarOpen ? <IconX className="h-6 w-6" /> : <IconMenu2 className="h-6 w-6" />}
              </button>
              <h1 className="text-2xl font-bold text-blue-900">Portal MG Consultores</h1>
            </div>
            <div className="flex space-x-4">
              <Link
                to="/"
                className="flex items-center px-4 py-2 text-sm font-medium text-blue-600 hover:text-blue-800"
              >
                <IconHome className="h-5 w-5 mr-2" />
                Volver al Sitio
              </Link>
              <button
                onClick={handleRefresh}
                className="flex items-center px-4 py-2 text-sm font-medium text-blue-600 hover:text-blue-800"
              >
                <IconRefresh className="h-5 w-5 mr-2" />
                Actualizar
              </button>
              <button
                onClick={handleLogout}
                className="flex items-center px-4 py-2 text-sm font-medium text-red-600 hover:text-red-800"
              >
                <IconLogout className="h-5 w-5 mr-2" />
                Cerrar Sesión
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="flex">
        {/* Sidebar */}
        <motion.aside
          initial={{ width: isSidebarOpen ? 240 : 0 }}
          animate={{ width: isSidebarOpen ? 240 : 0 }}
          transition={{ duration: 0.3 }}
          className="bg-white shadow-lg h-[calc(100vh-4rem)] overflow-hidden"
        >
          <nav className="p-4 space-y-2">
            <button
              onClick={() => setActiveSection("reports")}
              className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                activeSection === "reports"
                  ? "bg-blue-100 text-blue-900"
                  : "text-gray-600 hover:bg-gray-100"
              }`}
            >
              <IconChartBar className="h-5 w-5" />
              <span>Reportes</span>
            </button>
            <button
              onClick={() => setActiveSection("documents")}
              className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                activeSection === "documents"
                  ? "bg-blue-100 text-blue-900"
                  : "text-gray-600 hover:bg-gray-100"
              }`}
            >
              <IconFileText className="h-5 w-5" />
              <span>Documentos</span>
            </button>
            <button
              onClick={() => setActiveSection("cronologia")}
              className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${activeSection === "cronologia" ? "bg-blue-100 text-blue-900" : "text-gray-600 hover:bg-gray-100"}`}
            >
              <IconTimeline className="h-5 w-5" />
              <span>Cronología</span>
            </button>
          </nav>
        </motion.aside>

        {/* Main Content Area */}
        <main className="flex-1 p-8">
          {renderContent()}
        </main>
      </div>

      {/* PDF Preview Modal */}
      <AnimatePresence>
        {selectedDocument && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
            onClick={handleClosePreview}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-xl shadow-2xl w-full max-w-4xl h-[80vh] flex flex-col"
              onClick={e => e.stopPropagation()}
            >
              <div className="p-4 border-b border-gray-200 flex justify-between items-center">
                <h3 className="text-lg font-semibold text-blue-900">
                  {selectedDocument.title}
                </h3>
                <button
                  onClick={handleClosePreview}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <IconX className="h-6 w-6" />
                </button>
              </div>
              <div className="flex-1 p-4">
                <iframe
                  src={selectedDocument.url}
                  className="w-full h-full rounded-lg"
                  title={selectedDocument.title}
                />
              </div>
              <div className="p-4 border-t border-gray-200 flex justify-end">
                <button
                  onClick={() => handleDownload(selectedDocument.url, selectedDocument.title)}
                  className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  <IconDownload className="h-5 w-5 mr-2" />
                  Descargar PDF
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Portal; 