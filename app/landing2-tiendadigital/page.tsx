export default function Landing() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
      
      {/* Hero Section */}
      <section className="h-screen flex flex-col justify-center items-center text-center px-6">
        <h1 className="text-5xl font-bold mb-4">TuNegocioDigital</h1>
        <p className="text-lg text-gray-300 max-w-2xl">
          Plataforma digital para puntos de venta. Construida con ReactJS, Context API, Node.js, GraphQL, MongoDB y Tailwind.
        </p>
        <div className="mt-6">
          <a
            href="https://tunegociodigital.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-blue-600 rounded-lg shadow-lg hover:bg-blue-700 transition"
          >
            Ver Proyecto
          </a>
        </div>
      </section>

      {/* Preview Section */}
      <section className="py-20 px-6 bg-gray-900 text-center">
        <h2 className="text-3xl font-semibold mb-8">Vista previa</h2>
        <div className="max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-lg">
          <iframe
            src="https://tunegociodigital.vercel.app/"
            className="w-full h-[500px] border-0"
            title="TuNegocioDigital Preview"
          ></iframe>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6">
        <h2 className="text-3xl font-semibold text-center mb-12">Características</h2>
        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          <div className="p-6 bg-gray-800 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-bold mb-3">Tecnologías</h3>
            <p className="text-gray-400">
              ReactJS, Context API, Node.js, GraphQL, MongoDB, TailwindCSS, Jest/React Testing Library.
            </p>
          </div>
          <div className="p-6 bg-gray-800 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-bold mb-3">Arquitectura</h3>
            <p className="text-gray-400">
              Estructura por componentes, integración frontend-backend, pruebas unitarias y despliegue escalable.
            </p>
          </div>
          <div className="p-6 bg-gray-800 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-bold mb-3">Infraestructura</h3>
            <p className="text-gray-400">
              Deploy en Vercel y Render, base de datos en Mongo Atlas. Preparado para producción.
            </p>
          </div>
        </div>
      </section>

      {/* New Section: Módulos del Sistema */}
      <section className="py-20 px-6 bg-gray-900">
        <h2 className="text-3xl font-semibold text-center mb-12">Módulos del Sistema</h2>
        <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto text-center">
          <div className="p-6 bg-gray-800 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="font-bold text-lg mb-2">📦 Inventario</h3>
            <p className="text-gray-400">Control de productos, stock en tiempo real y alertas de bajo inventario.</p>
          </div>
          <div className="p-6 bg-gray-800 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="font-bold text-lg mb-2">💳 Ventas</h3>
            <p className="text-gray-400">Registro de ventas rápidas, múltiples métodos de pago y gestión de caja.</p>
          </div>
          <div className="p-6 bg-gray-800 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="font-bold text-lg mb-2">📊 Reportes</h3>
            <p className="text-gray-400">Generación de reportes dinámicos y estadísticas detalladas.</p>
          </div>
          <div className="p-6 bg-gray-800 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="font-bold text-lg mb-2">👥 Usuarios</h3>
            <p className="text-gray-400">Roles y permisos para administrar empleados y accesos.</p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-6">
        <h2 className="text-3xl font-semibold text-center mb-8">Sobre el Proyecto</h2>
        <p className="max-w-3xl mx-auto text-center text-gray-300">
          TuNegocioDigital fue diseñado como una solución para pequeños y medianos negocios,
          ofreciendo un sistema de punto de venta moderno, rápido y seguro. Incluye gestión de
          productos, ventas, reportes y escalabilidad para adaptarse a diferentes tipos de comercios.
        </p>
      </section>

      {/* New Section: Testimonios */}
      <section className="py-20 px-6 bg-gray-900">
        <h2 className="text-3xl font-semibold text-center mb-12">Testimonios</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="p-6 bg-gray-800 rounded-xl shadow hover:shadow-lg transition">
            <p className="text-gray-300 italic">Gracias a TuNegocioDigital ahora controlo mejor mi stock y mis ventas.</p>
            <h4 className="mt-4 font-bold">— Ana, dueña de minimercado</h4>
          </div>
          <div className="p-6 bg-gray-800 rounded-xl shadow hover:shadow-lg transition">
            <p className="text-gray-300 italic">Me facilitó mucho generar reportes y tomar decisiones rápidas.</p>
            <h4 className="mt-4 font-bold">— Carlos, restaurante</h4>
          </div>
          <div className="p-6 bg-gray-800 rounded-xl shadow hover:shadow-lg transition">
            <p className="text-gray-300 italic">Una plataforma simple y muy intuitiva para mis empleados.</p>
            <h4 className="mt-4 font-bold">— Sofía, farmacia</h4>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 text-center">
        <h2 className="text-3xl font-bold mb-6">¿Querés ver más proyectos?</h2>
        <div className="flex justify-center gap-4">
          <a
            href="https://github.com/leandasilva/tunegociodigital"
            className="px-8 py-4 bg-blue-600 rounded-lg text-lg shadow hover:bg-blue-700 transition"
          >
            Ir a mi Repositorio
          </a>
          <a
            href="mailto:leandasilva19@gmail.com"
            className="px-8 py-4 bg-gray-700 rounded-lg text-lg shadow hover:bg-gray-600 transition"
          >
            Contactar
          </a>
        </div>
      </section>

    </div>
  );
}
