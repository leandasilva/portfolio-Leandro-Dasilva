"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AgregarFrasePage() {
  const [texto, setTexto] = useState("");
  const router = useRouter();

  const guardarFrase = () => {
    const data = localStorage.getItem("frases");
    const frases = data ? JSON.parse(data) : [];
    frases.push(texto);
    localStorage.setItem("frases", JSON.stringify(frases));
    router.push("/");
  };


  return (
    <main className="min-h-screen bg-gradient-to-br from-[#1a1a2e] via-[#533483] to-[#0f3460] flex justify-center items-center">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          guardarFrase();
        }}
        className="bg-gray-200 p-8 rounded-lg shadow-md w-full max-w-md"
      >
        <h2 className="text-2xl text-black font-bold mb-4">Agregar Frase</h2>

        <textarea
          value={texto}
          onChange={(e) => setTexto(e.target.value)}
          placeholder="Escribí una frase aquí..."
          rows={5}
          className="w-full text-black border p-2 rounded mb-4 resize-none"
          required
        />

        <button
          type="submit"
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition w-full"
        >
          Guardar Frase
        </button>
      </form>
    </main>
  );
}
