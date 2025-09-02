export default function FrasesCardsLanding() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">

      {/* Hero Section */}
      <section className="h-screen flex flex-col justify-center items-center text-center px-6">
        <h1 className="text-5xl font-bold mb-4">
        Contaduría General de la Provincia de Corrientes
        </h1>
        <p className="text-lg text-gray-300 max-w-2xl">
        Participé en el desarrollo fullstack del sitio utilizando React.js, Redux, Node.js, Express y PL/SQL.
        Implementé diseño responsivo con TailwindCSS, autenticación segura y gestión de sesiones.
        </p>

        <div className="mt-6 flex gap-4">
          <a
            href="https://www.cgpcorrientes.gob.ar/"
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
       <h2 className="text-3xl font-semibold mb-8">Vista previa del sitio</h2>
            <iframe
            src="https://www.cgpcorrientes.gob.ar/"
            className="w-full h-[500px] border-0"
            title="Contaduría Corrientes Preview"
            />
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
        <h2 className="text-3xl font-semibold text-center mb-8">Stack Tecnológico</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-5xl mx-auto text-center">
          {['ReactJS', 'Redux', 'Node.js', 'Express', 'PL/SQL', 'TailwindCSS', 'Jest', 'java', 'Oracle', 'GitLab', 'Spring Boot','Figma']
            .map((tech) => (
            <div key={tech} className="bg-gray-800 p-4 rounded-xl shadow font-medium">
              {tech}
            </div>
          ))}
        </div>
      </section>

      {/* About / Valor Agregado */}
      <section className="py-20 px-6 bg-gray-50 text-gray-900">
        <h2 className="text-3xl font-semibold text-center mb-8">Sobre el Proyecto</h2>
        <p className="max-w-3xl mx-auto text-center text-gray-700">
            Participé en el desarrollo completo del sitio, integrando el frontend en React.js con Redux
            y el backend en Node.js/Express y PL/SQL. Implementé funcionalidades críticas como gestión de usuarios,
            reportes financieros y autenticación segura, asegurando rendimiento y alta disponibilidad.
        </p>
      </section>

      {/* Call To Action */}
      <section className="py-20 text-center bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
        <h2 className="text-3xl font-bold mb-6">Probá Cgpc ahora</h2>
        <div className="flex justify-center gap-4">
          <a
            href="https://www.cgpcorrientes.gob.ar/"
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