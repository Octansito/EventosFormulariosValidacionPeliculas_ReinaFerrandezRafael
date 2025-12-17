import peliculas from "../data/peliculas";
import { useState } from "react";
{
  /**Formulario Controlado + JS */
}
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
      setError("Debes seleccionar una película");
      return;
    }
    if (nombre.trim().length < 5) {
      setError("El nombre debe tener al menos 5 caracteres");
      return;
    }
    if (biografia.trim().length < 50) {
      setError("La biografía debe tener al menos 50 caracteres");
      return;
    }
    if (!imagen.startsWith("http")) {
      setError("La imagen debe ser una URL válida");
      return;
    }

    setError("");
    console.log({
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
        <label htmlFor="peliculaId">Película:</label>
        <select
          id="peliculaId"
          name="peliculaId"
          value={peliculaId}
          onChange={(e) => setPeliculaId(e.target.value)}
          required
        >
          <option value="">Selecciona una película</option>
          {peliculas.map((peli) => (
            <option key={peli.id} value={peli.id}>
              {peli.nombre}
            </option>
          ))}
        </select>

        {/*NOMBRE*/}
        <label htmlFor="nombre">Nombre:</label>
        <input
          id="nombre"
          name="nombre"
          type="text"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-150 ease-in-out"
          required
        />

        {/*FECHA*/}
        <label htmlFor="fechaNacimiento">Fecha de nacimiento:</label>
        <input
          id="fechaNacimiento"
          name="fechaNacimiento"
          type="date"
          value={fechaNacimiento}
          onChange={(e) => setFechaNacimiento(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-150 ease-in-out"
        />

        {/*BIOGRAFÍA*/}
        <label htmlFor="biografia">Biografía:</label>
        <textarea
          id="biografia"
          name="biografia"
          value={biografia}
          onChange={(e) => setBiografia(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-150 ease-in-out"
          required
        />

        {/*IMAGEN*/}
        <label htmlFor="imagen">Imagen (URL):</label>
        <input
          id="imagen"
          name="imagen"
          type="url"
          value={imagen}
          onChange={(e) => setImagen(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-150 ease-in-out"
          required
        />
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
            className="w-full bg-indigo-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-indigo-700 focus:outline-none focus:ring-4 focus:ring-indigo-500 focus:ring-opacity-50 transition duration-150 ease-in-out"
          >
            Añadir intérprete
          </button>
        </div>
      </form>
    </div>
  );
}

export default FormularioInterprete;
