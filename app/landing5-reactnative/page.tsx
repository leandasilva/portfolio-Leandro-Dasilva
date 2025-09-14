export default function PostsLanding() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
      {/* Hero Section */}
      <section className="h-screen flex flex-col justify-center items-center text-center px-6">
        <h1 className="text-5xl font-bold mb-4">Posts App</h1>
        <p className="text-lg text-gray-300 max-w-2xl">
          Aplicación móvil desarrollada en React Native para crear, ver y eliminar publicaciones con imágenes.  
          Ejemplo de arquitectura full-stack y diseño mobile-first.
        </p>
        <div className="mt-6 flex gap-4">
          <a
            href="https://react-native-alpha-two.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-blue-600 rounded-lg shadow-lg hover:bg-blue-700 transition"
          >
            Ver Proyecto
          </a>
          <a
            href="https://github.com/leandasilva"
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
            src="https://react-native-alpha-two.vercel.app/"
            className="w-full h-[500px] border-0"
            title="Posts App Preview"
          ></iframe>
        </div>
      </section>

      {/* Características Principales */}
      <section className="py-20 px-6">
        <h2 className="text-3xl font-semibold text-center mb-12">
          Características principales
        </h2>
        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          <div className="p-6 bg-gray-800 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-bold mb-3">CRUD de Posts</h3>
            <p className="text-gray-400">
              Crear, listar, editar y eliminar posts con imágenes desde la app móvil.
            </p>
          </div>
          <div className="p-6 bg-gray-800 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-bold mb-3">UI Responsive</h3>
            <p className="text-gray-400">
              Interfaces optimizadas para dispositivos móviles, tablets y adaptables a diferentes resoluciones.
            </p>
          </div>
          <div className="p-6 bg-gray-800 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-bold mb-3">Integración Backend</h3>
            <p className="text-gray-400">
              API REST para manejar posts, junto con almacenamiento de imágenes y base de datos.
            </p>
          </div>
        </div>
      </section>

      {/* Stack Tecnológico */}
      <section className="py-20 px-6 bg-gray-900">
        <h2 className="text-3xl font-semibold text-center mb-12">
          Stack Tecnológico
        </h2>
        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {[
            { tech: 'React Native', desc: 'Framework principal para la app móvil.' },
            { tech: 'React Native Paper', desc: 'Componentes UI elegantes.' },
            { tech: 'Redux Toolkit', desc: 'Gestión de estado global.' },
            { tech: 'Node.js + Express', desc: 'Backend API para posts e imágenes.' },
            { tech: 'MongoDB', desc: 'Base de datos para almacenar los posts.' },
            { tech: 'TailwindCSS', desc: 'Estilos rápidos para la landing page.' },
            { tech: 'Vercel', desc: 'Hosting de la landing y front-end.' },
            { tech: 'Expo', desc: 'Desarrollo móvil y pruebas.' }
          ].map(({ tech, desc }) => (
            <div
              key={tech}
              className="bg-gray-800 p-6 rounded-xl shadow hover:shadow-lg transition"
            >
              <h3 className="font-bold text-lg mb-2">{tech}</h3>
              <p className="text-gray-400 text-sm">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Sobre la App */}
      <section className="py-20 px-6 bg-gray-50 text-gray-900">
        <h2 className="text-3xl font-semibold text-center mb-8">
          Sobre la App
        </h2>
        <p className="max-w-3xl mx-auto text-center text-gray-700">
          Posts App es una aplicación móvil en React Native que permite crear, visualizar y eliminar publicaciones con imágenes. Funciona con una API REST, almacenamiento en base de datos, y tiene un diseño limpio pensado para dispositivos móviles.
        </p>
      </section>

      {/* Call To Action */}
      <section className="py-20 text-center bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
        <h2 className="text-3xl font-bold mb-6">
          Probá Posts App ahora
        </h2>
        <div className="flex justify-center gap-4">
          <a
            href="https://react-native-alpha-two.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-white text-blue-600 rounded-lg shadow hover:bg-gray-100 transition"
          >
            🚀 Ver Proyecto
          </a>
          <a
            href="https://github.com/leandasilva"
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
        <p className="text-gray-400 mb-6">
          ¿Querés saber más o colaborar en proyectos?
        </p>
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
