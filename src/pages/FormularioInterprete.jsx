{
  /**Formulario COntrolado + Select del Json */
}

import { useState } from "react";

function FormularioInterprete() {
  const [peliculaId, setPeliculaId] = useState("");
  const [nombre, setNombre] = useState("");
  const [fechaNacimiento, setFechaNacimiento] = useState("");
  const [biografia, setBiografia] = useState("");
  const [imagen, setImagen] = useState("");
  const [error, setError] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (!peliculaId) {
      setError("Debes seleccionar una película.");
      return;
    }
    if (nombre.trim().length < 5) {
      setError("El nombre debe tener al menos 5 caracteres.");
      return;
    }
    if (biografia.trim().length < 50) {
      setError("La biografía debe tener al menos 50 caracteres.");
      return;
    }
    if (!imagen.startsWith("http")) {
      setError("La imagen debe ser una URL válida.");
      return;
    }

    setError("");

    console.log("Nuevo intérprete:", {
      peliculaId,
      nombre,
      fechaNacimiento,
      biografia,
      imagen,
    });
  }
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-xl shadow-2xl w-full max-w-md"
      >
        <div className="text-2xl font-bold mb-6 text-gray-800 border-b pb-2">
          Formulario Adición Intérprete &quot;
        </div>
        <div>
          <label
            htmlFor="peliculaId"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Película:
          </label>
          <select
            value={peliculaId}
            onChange={(e) => setPeliculaId(e.target.value)}
            required
          >
            <option value="">-- Selecciona una película --</option>
            {peliculas.map((peli) => (
              <option key={peli.id} value={peli.id}>
                {peli.titulo}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label>Nombre:</label>
          <input
            type="text"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Fecha de nacimiento:</label>
          <input
            type="date"
            value={fechaNacimiento}
            onChange={(e) => setFechaNacimiento(e.target.value)}
          />
        </div>
        <div>
          <label>Biografía:</label>
          <textarea
            value={biografia}
            onChange={(e) => setBiografia(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Imagen (URL):</label>
          <input
            type="url"
            value={imagen}
            onChange={(e) => setImagen(e.target.value)}
            required
          />
        </div>
        <div>
          {error && (
            <p className="text-red-700 bg-red-100 px-3 py-2 rounded-lg mt-2">
              {error}
            </p>
          )}
        </div>
        <div>
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-indigo-700 focus:outline-none focus:ring-4 focus:ring-indigo-500 focus:ring-opacity-50"
          >
            Añadir Intérprete
          </button>
        </div>
      </form>
    </div>
  );
}

export default FormularioInterprete;
