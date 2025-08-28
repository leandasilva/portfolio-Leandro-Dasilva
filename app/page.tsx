import React from "react";

export default function Home() {
  const proyectos = [
    {
      titulo: "Tu Negocio Digital",
      descripcion: "Proyecto personal con React, Node.js y MongoDB",
      url: "https://tunegociodigital.vercel.app/",
    },
    {
      titulo: "Frases Cards",
      descripcion: "App con React + Redux + Node.js + MongoDB",
      url: "https://frases-cards.vercel.app/",
    },
    {
      titulo: "Contaduría General de Corrientes",
      descripcion: "Página institucional en la que participé en mi trabajo actual",
      url: "https://www.cgpcorrientes.gob.ar/",
    },
    {
      titulo: "Datup (En desarrollo)",
      descripcion: "Proyecto en el que trabajo en remoto actualmente",
      url: "https://plankton-app-65mdw.ondigitalocean.app/",
    },
    {
      titulo: "Mi Portafolio",
      descripcion: "Portfolio personal con React + Tailwind",
      url: "https://leandrodasilva.vercel.app/",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1a1a2e] via-[#533483] to-[#0f3460] text-white p-6">
      <h1 className="text-4xl font-extrabold text-center mb-8">
        Portfolio de Leandro Da Silva
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {proyectos.map((p, index) => (
          <a
            key={index}
            href={p.url}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#16213e] rounded-2xl shadow-lg p-6 hover:scale-105 transform transition duration-300"
          >
            <h2 className="text-xl font-bold mb-2">{p.titulo}</h2>
            <p className="text-sm text-gray-300">{p.descripcion}</p>
          </a>
        ))}
      </div>

      <div className="text-center mt-10">
        <p className="text-gray-300">
          🔧 Tecnologías: React, Redux, Node.js, MongoDB  
        </p>
        <p className="text-gray-300">
          🧪 Testing: Jest, Cypress
        </p>
      </div>
    </div>
  );
}
