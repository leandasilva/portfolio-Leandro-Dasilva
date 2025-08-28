"use client";

import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";

export default function FraseGrid() {
  const [frases, setFrases] = useState<string[]>([]);
  const [busqueda, setBusqueda] = useState("");
  const [filtradas, setFiltradas] = useState<string[]>([]);
  const router = useRouter();

  useEffect(() => {
    const data = localStorage.getItem("frases");
    if (data) {
      const lista = JSON.parse(data);
      setFrases(lista);
      setFiltradas(lista);
    }
  }, []);

  useEffect(() => {
    const timeout = setTimeout(() => {
      const resultado = frases.filter((f) =>
        f.toLowerCase().includes(busqueda.toLowerCase())
      );
      setFiltradas(resultado);
    }, 300);

    return () => clearTimeout(timeout);
  }, [busqueda, frases]);

  // 🔥 Confirmación con SweetAlert2
  const eliminarFrase = async (index: number) => {
    const fraseSeleccionada = frases[index];

    const resultado = await Swal.fire({
      title: "¿Desea eliminar esta frase?",
      text: `"${fraseSeleccionada}"`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Sí, eliminar",
      cancelButtonText: "Cancelar",
    });

    if (resultado.isConfirmed) {
      const nuevas = frases.filter((_, i) => i !== index);
      setFrases(nuevas);
      localStorage.setItem("frases", JSON.stringify(nuevas));

      const nuevasFiltradas = nuevas.filter((f) =>
        f.toLowerCase().includes(busqueda.toLowerCase())
      );
      setFiltradas(nuevasFiltradas);

      await Swal.fire({
        title: "Eliminada",
        text: "La frase ha sido eliminada.",
        icon: "success",
        timer: 1500,
        showConfirmButton: false,
      });
    }
  };

  const irAAgregarFrase = () => {
    router.push("/componentes/agregarfrase");
  };

  return (
    <div className="p-4 mt-6">
      <div className="flex items-center justify-between mb-12">
       <button
          onClick={irAAgregarFrase}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
        >
          Agregar Frase
        </button>

        <div className="flex-1 flex text-black justify-center">
          <input
            type="text"
            placeholder="Buscar frase..."
            value={busqueda}
            onChange={(e) => setBusqueda(e.target.value)}
            className="p-2 rounded bg-white w-full max-w-md"
          />
        </div>

        <div className="w-[120px]" />
      </div>

      {filtradas.length === 0 ? (
        <p className="text-center text-black">No se encontraron frases.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {filtradas.map((texto, index) => (
            <div
              key={index}
              className="relative border p-4 rounded-lg shadow-md bg-white"
            >
              <p className="text-gray-700 mb-3">{texto}</p>

              <button
                onClick={() => eliminarFrase(index)}
                className="absolute top-2 right-2 text-red-600 hover:text-red-800 font-bold text-lg"
                title="Eliminar"
              >
                ✕
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
