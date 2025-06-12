import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { IconUser, IconLock } from "@tabler/icons-react";

const Login: React.FC = () => {
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({ username: "", password: "" });
  const [error, setError] = useState("");

  // Demo credentials
  const DEMO_USERNAME = "demo@mgconsultores.com";
  const DEMO_PASSWORD = "demo123";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (credentials.username === DEMO_USERNAME && credentials.password === DEMO_PASSWORD) {
      // Store authentication state
      localStorage.setItem("isAuthenticated", "true");
      navigate("/portal");
    } else {
      setError("Credenciales inválidas. Usa las credenciales de demostración.");
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCredentials(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-8">
        <div className="flex justify-end mb-4">
          <Link to="/" className="flex items-center text-blue-700 hover:underline">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12h18M3 12l6-6m-6 6l6 6" /></svg>
            Volver al Sitio
          </Link>
        </div>
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-blue-900 mb-2">Portal MG Consultores</h1>
          <p className="text-blue-600">Ingresa tus credenciales para acceder</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="username" className="block text-sm font-medium text-blue-900 mb-2">
              Usuario
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <IconUser className="h-5 w-5 text-blue-500" />
              </div>
              <input
                id="username"
                name="username"
                type="email"
                value={credentials.username}
                onChange={handleInputChange}
                className="block w-full pl-10 pr-3 py-2 border border-blue-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white text-gray-900"
                placeholder="demo@mgconsultores.com"
                required
              />
            </div>
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-blue-900 mb-2">
              Contraseña
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <IconLock className="h-5 w-5 text-blue-500" />
              </div>
              <input
                id="password"
                name="password"
                type="password"
                value={credentials.password}
                onChange={handleInputChange}
                className="block w-full pl-10 pr-3 py-2 border border-blue-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white text-gray-900"
                placeholder="demo123"
                required
              />
            </div>
          </div>

          {error && (
            <div className="text-red-500 text-sm text-center">{error}</div>
          )}

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors duration-200"
          >
            Iniciar Sesión
          </button>
        </form>

        <div className="mt-6 text-center text-sm text-blue-600">
          <p>Credenciales de demostración:</p>
          <p>Usuario: demo@mgconsultores.com</p>
          <p>Contraseña: demo123</p>
        </div>
      </div>
    </div>
  );
};

export default Login; 