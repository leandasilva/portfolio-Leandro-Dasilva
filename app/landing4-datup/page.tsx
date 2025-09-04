export default function FrasesCardsLanding() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">

      {/* Hero Section */}
      <section className="h-screen flex flex-col justify-center items-center text-center px-6">
        <h1 className="text-5xl font-bold mb-4">Truckers Talent - Datup</h1>
        <p className="text-lg text-gray-300 max-w-2xl">
          Proyecto fullstack en desarrollo que marcó mi primera experiencia como freelancer, demostrando conocimientos en diseño de interfaces modernas y arquitectura fullstack.
        </p>
        <div className="mt-6 flex gap-4">
          <a
            href="https://plankton-app-65mdw.ondigitalocean.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-blue-600 rounded-lg shadow-lg hover:bg-blue-700 transition"
          >
            Ver Demo
          </a>
        </div>
      </section>

      {/* Preview Section */}
      <section className="py-20 px-6 bg-gray-900 text-center">
        <h2 className="text-3xl font-semibold mb-8">Vista previa</h2>
        <div className="max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-2xl border border-gray-700">
          <iframe
            src="https://plankton-app-65mdw.ondigitalocean.app/"
            className="w-full h-[500px] border-0"
            title="Frases Cards Preview"
          ></iframe>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6">
        <h2 className="text-3xl font-semibold text-center mb-12">Características principales</h2>
        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          <div className="p-6 bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl transition">
            <h3 className="text-xl font-bold mb-3">Busqueda y oferta de empleo</h3>
            <p className="text-gray-400">Permite agregar y eliminar publicaciones de empleos generar usuarios perfiles tanto empresas como usuarios que solicitan job's de manera dinámica con una UI responsiva.</p>
          </div>
          <div className="p-6 bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl transition">
            <h3 className="text-xl font-bold mb-3">UI Moderna</h3>
            <p className="text-gray-400">Diseño limpio e interactivo con TailwindCSS y arquitectura de componentes reutilizables.</p>
          </div>
          <div className="p-6 bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl transition">
            <h3 className="text-xl font-bold mb-3">Fullstack & Testing</h3>
            <p className="text-gray-400">Backend con Node.js y NestJS, base de datos en PostgreSQL y pruebas en frontend/backend con Jest/RTL.</p>
          </div>
        </div>
      </section>

      {/* Tecnologías utilizadas */}
      <section className="py-20 px-6 bg-gray-900">
        <h2 className="text-3xl font-semibold text-center mb-8">Stack Tecnológico</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-5xl mx-auto text-center">
          {[
            'ReactJS', 'Redux', 'NestJS', 'Node.js', 'TailwindCSS','AWS', 
            'PostgreSQL', 'Jest', 'EC2', 'S3', 'Docker', 'GitHub Actions','Figma'
          ].map((tech) => (
            <div
              key={tech}
              className="bg-gray-800 p-4 rounded-xl shadow hover:shadow-lg transition font-medium"
            >
              {tech}
            </div>
          ))}
        </div>
      </section>

      {/* About / Valor Agregado */}
      <section className="py-20 px-6 bg-gray-50 text-gray-900">
        <h2 className="text-3xl font-semibold text-center mb-8">Sobre el Proyecto</h2>
        <p className="max-w-3xl mx-auto text-center text-gray-700 mb-6">
          Datup empresa organizador de esta pasantía con un plazo de 3 meses, fue mi primera experiencia como freelancer y me permitió trabajar en equipo con otros desarrolladores y diseñadores,
          enriqueciendo mi perspectiva sobre el desarrollo de software. Aprendí a comunicarme efectivamente, a gestionar tareas y a adaptarme
          a diferentes estilos de trabajo.
        </p>
        <p className="max-w-3xl mx-auto text-center text-gray-700">
          Este proyecto no solo fortaleció mis habilidades técnicas, sino que también me enseñó la importancia de la colaboración
          y la flexibilidad en un entorno profesional.
        </p>
      </section>

      {/* Metodología y herramientas */}
      <section className="py-20 px-6 bg-gray-900 text-white">
        <h2 className="text-3xl font-semibold text-center mb-8">Metodología y Herramientas</h2>
        <p className="max-w-3xl mx-auto text-center text-gray-300 mb-12">
          El trabajo se organizó con metodologías ágiles como <span className="font-semibold">Kanban</span> y <span className="font-semibold">Scrum</span>.
          Usamos herramientas de gestión y comunicación como <span className="font-semibold">Trello</span>, 
          <span className="font-semibold"> GitHub Projects</span>, grupos de <span className="font-semibold">Discord</span> y <span className="font-semibold">WhatsApp</span> 
          para asegurar coordinación y eficiencia en el desarrollo.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {['Kanban', 'Scrum', 'Trello', 'GitHub Projects', 'Discord', 'WhatsApp'].map((item) => (
            <div
              key={item}
              className="bg-gray-800 p-4 rounded-xl shadow text-center hover:shadow-lg transition font-medium"
            >
              {item}
            </div>
          ))}
        </div>
      </section>

      {/* Call To Action */}
      <section className="py-20 text-center bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
        <h2 className="text-3xl font-bold mb-6">Probá Truckers Talent ahora</h2>
        <div className="flex justify-center gap-4">
          <a
            href="https://plankton-app-65mdw.ondigitalocean.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-white text-blue-600 rounded-lg shadow hover:bg-gray-100 transition"
          >
            🚀 Ver Demo
          </a>
        </div>
      </section>

    </div>
  );
}
