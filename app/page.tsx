import React from "react";
import Link from "next/link";
import { FaLinkedin, FaGithub } from "react-icons/fa";
export default function Home() {
  const proyectos = [
    {
      titulo: "Tu Negocio Digital",
      descripcion: "Proyecto personal con React, Node.js y MongoDB",
      href: "/landing2-tiendadigital",
    },
    {
      titulo: "Frases Cards",
      descripcion: "App con React + Redux + Node.js + PostgreSQL",
      href: "/landing1-frases",
    },
    {
      titulo: "Datup (En desarrollo)",
      descripcion: "Proyecto en el que trabajo en remoto actualmente",
      href: "/landing4-datup",
    },
    {
      titulo: "Contaduría General de Corrientes - React",
      descripcion: "Portfolio personal con React + Tailwind",
      href: "/landing5-contaduria-react",
    },
    {
      titulo: "React Native - Proyecto en desarrollo",
      descripcion: "Portfolio personal con React Native + Tailwind",
      href: "/",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1a1a2e] via-[#533483] to-[#0f3460] text-white p-6 flex flex-col">
      <h1 className="text-4xl font-extrabold text-center mb-8">
        Portfolio de Leandro Da Silva
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto flex-1">
        {proyectos.map((p, index) => (
          <Link
            key={index}
            href={p.href}
            className="bg-[#16213e] rounded-2xl shadow-lg p-6 hover:scale-105 transform transition duration-300 block"
          >
            <h2 className="text-xl font-bold mb-2">{p.titulo}</h2>
            <p className="text-sm text-gray-300">{p.descripcion}</p>
          </Link>
        ))}
      </div>

      {/* Footer con estilo moderno */}
      <footer className="mt-12 text-center text-gray-300 border-t border-gray-600 pt-6">
        <p className="text-lg font-semibold mb-3">Leandro Da Silva</p>
        <div className="flex justify-center gap-6">
          <a
            href="https://www.linkedin.com/in/leandro-da-silva/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-700 hover:bg-blue-600 transition transform hover:scale-105 shadow-lg"
          >
            <FaLinkedin className="text-white" /> LinkedIn
          </a>
          <a
            href="https://github.com/leandro-da-silva"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-800 hover:bg-gray-700 transition transform hover:scale-105 shadow-lg"
          >
            <FaGithub className="text-white" /> GitHub
          </a>
        </div>
        <p className="mt-4 text-gray-500 text-sm">© {new Date().getFullYear()} Leandro Da Silva. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}
