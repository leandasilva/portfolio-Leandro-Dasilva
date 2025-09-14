export default function FrasesCardsLanding() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">

      {/* Hero Section */}
      <section className="h-screen flex flex-col justify-center items-center text-center px-6">
        <h1 className="text-5xl font-bold mb-4">Frases Cards</h1>
        <p className="text-lg text-gray-300 max-w-2xl">
          Proyecto fullstack para demostrar mis conocimientos en diseño de interfaces modernas y arquitectura fullstack.
        </p>
        <div className="mt-6 flex gap-4">
          <a
            href="https://frases-cards.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-blue-600 rounded-lg shadow-lg hover:bg-blue-700 transition"
          >
            Ver Proyecto
          </a>
          <a
            href="https://github.com/leandasilva/frases-cards"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 border border-white rounded-lg hover:bg-white hover:text-black transition"
          >
            Ver Código
          </a>
        </div>
      </section>

      {/* Preview Section */}
      <section className="py-20 px-6 bg-gray-900 text-center">
        <h2 className="text-3xl font-semibold mb-8">Vista previa</h2>
        <div className="max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-lg">
          <iframe
            src="https://frases-cards.vercel.app/"
            className="w-full h-[500px] border-0"
            title="Frases Cards Preview"
          ></iframe>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6">
        <h2 className="text-3xl font-semibold text-center mb-12">Características principales</h2>
        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          <div className="p-6 bg-gray-800 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-bold mb-3">Gestión de frases</h3>
            <p className="text-gray-400">Permite agregar y eliminar frases de manera dinámica con UI responsiva.</p>
          </div>
          <div className="p-6 bg-gray-800 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-bold mb-3">UI Moderna</h3>
            <p className="text-gray-400">Diseño limpio y moderno con TailwindCSS y cards interactivas.</p>
          </div>
          <div className="p-6 bg-gray-800 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-bold mb-3">Fullstack & Testing</h3>
            <p className="text-gray-400">Backend con Node.js y NestJS, PostgreSQL; testing en API y frontend con Jest/RTL.</p>
          </div>
        </div>
      </section>

      {/* Tecnologías utilizadas */}
      <section className="py-20 px-6 bg-gray-900">
        <h2 className="text-3xl font-semibold text-center mb-12">Stack Tecnológico</h2>
        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {[
            { tech: 'ReactJS', desc: 'Construcción de la interfaz dinámica y modular.' },
            { tech: 'Redux', desc: 'Gestión del estado global de la aplicación.' },
            { tech: 'NestJS', desc: 'Backend robusto y escalable con arquitectura modular.' },
            { tech: 'Node.js', desc: 'Entorno de ejecución para el servidor backend.' },
            { tech: 'TailwindCSS', desc: 'Diseño rápido, responsivo y moderno.' },
            { tech: 'PostgreSQL', desc: 'Base de datos relacional confiable y potente.' },
            { tech: 'Jest', desc: 'Pruebas automatizadas en frontend y backend.' },
            { tech: 'Vercel', desc: 'Hosting del frontend, rápido y optimizado.' },
            { tech: 'Render', desc: 'Despliegue del backend y base de datos.' }
          ].map(({ tech, desc }) => (
            <div key={tech} className="bg-gray-800 p-6 rounded-xl shadow hover:shadow-lg transition">
              <h3 className="font-bold text-lg mb-2">{tech}</h3>
              <p className="text-gray-400 text-sm">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Módulos del Sistema */}
      <section className="py-20 px-6">
        <h2 className="text-3xl font-semibold text-center mb-12">Módulos del Sistema</h2>
        <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto text-center">
          <div className="p-6 bg-gray-800 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="font-bold text-lg mb-2">📝 CRUD de Frases</h3>
            <p className="text-gray-400">Agregar, listar y eliminar frases en tiempo real.</p>
          </div>
          <div className="p-6 bg-gray-800 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="font-bold text-lg mb-2">🌐 API REST</h3>
            <p className="text-gray-400">Endpoints seguros para gestionar frases desde el backend.</p>
          </div>
          <div className="p-6 bg-gray-800 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="font-bold text-lg mb-2">💾 Persistencia</h3>
            <p className="text-gray-400">Base de datos PostgreSQL con integridad y relaciones.</p>
          </div>
          <div className="p-6 bg-gray-800 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="font-bold text-lg mb-2">⚡ Testing</h3>
            <p className="text-gray-400">Pruebas unitarias y de integración para garantizar calidad.</p>
          </div>
        </div>
      </section>

      {/* About / Valor Agregado */}
      <section className="py-20 px-6 bg-gray-50 text-gray-900">
        <h2 className="text-3xl font-semibold text-center mb-8">Sobre el Proyecto</h2>
        <p className="max-w-3xl mx-auto text-center text-gray-700">
          Frases Cards es un mini proyecto creado para demostrar mi expertise en diseño UI y
          desarrollo fullstack. Incluye funcionalidades de agregar/eliminar frases, diseño responsivo,
          arquitectura por componentes y pruebas automatizadas en frontend y backend.
        </p>
      </section>

      {/* Call To Action */}
      <section className="py-20 text-center bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
        <h2 className="text-3xl font-bold mb-6">Probá Frases Cards ahora</h2>
        <div className="flex justify-center gap-4">
          <a
            href="https://frases-cards.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-white text-blue-600 rounded-lg shadow hover:bg-gray-100 transition"
          >
            🚀 Ver Proyecto
          </a>
          <a
            href="https://github.com/leandasilva/frases-cards"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 border border-white rounded-lg hover:bg-white hover:text-black transition"
          >
            📂 Ver Código
          </a>
        </div>
      </section>

      {/* Contacto */}
      <section className="py-20 px-6 bg-gray-900 text-center">
        <h2 className="text-3xl font-semibold mb-6">Contacto</h2>
        <p className="text-gray-400 mb-6">¿Querés saber más o colaborar en proyectos?</p>
        <a
          href="mailto:leandasilva19@gmail.com"
          className="px-8 py-4 bg-blue-600 rounded-lg text-lg shadow hover:bg-blue-700 transition"
        >
          ✉️ Contactar
        </a>
      </section>
    </div>
  );
}
