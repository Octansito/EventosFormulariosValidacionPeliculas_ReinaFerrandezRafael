import { useRef, useState } from "react";

function PeliculaNoControlado() {
  const nombreRef = useRef(null);
  const directorRef = useRef(null);
  const clasificacionRef = useRef(null);
  const recaudacionRef = useRef(null);
  const notaRef = useRef(null);
  const carteleraRef = useRef(null);
  const [error, setError] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    const nombre = nombreRef.current.value;
    const director = directorRef.current.value;
    const clasificacion = clasificacionRef.current.value;
    const recaudacion = recaudacionRef.current.value;
    const nota = notaRef.current.value;
    const cartelera = carteleraRef.current.value;

    if (nombre.trim().length < 5) {
      setError("Error al introducir el nombre");
      return;
    }
    if (director.trim().length < 5) {
      setError("Error al introducir el director");
      return;
    }
    if (Number(nota) < 1 || Number(nota) > 10) {
      setError("Nota no válida");
      return;
    }
    if (!cartelera.startsWith("http")) {
      setError("URL no válida");
      return;
    }
    setError("");
    console.log("Datos: ", {
      nombre,
      director,
      clasificacion,
      recaudacion,
      nota,
      cartelera,
    });
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-xl shadow-2xl w-full max-w-md"
      >
        <div className="text-2xl font-bold mb-6 text-gray-800 border-b pb-2">
          Formulario NO Controlado &quot;
        </div>

        <div className="mb-4">
          <label
            htmlFor="nombre"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Nombre:
          </label>
          <input
            id="nombre"
            type="text"
            ref={nombreRef}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-150 ease-in-out"
          />
        </div>

        <div className="mb-6">
          <label
            htmlFor="director"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Director:
          </label>
          <input
            id="director"
            type="text"
            ref={directorRef}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-150 ease-in-out"
          />
        </div>

        <div className="mb-6">
          <label
            htmlFor="clasificacion"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Clasificacion:
          </label>
          <input
            id="clasificacion"
            type="text"
            ref={clasificacionRef}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-150 ease-in-out"
          />
        </div>

        <div className="mb-6">
          <label
            htmlFor="recaudacion"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Recaudacion:
          </label>
          <input
            id="recaudacion"
            type="text"
            ref={recaudacionRef}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-150 ease-in-out"
          />
        </div>

        <div className="mb-6">
          <label
            htmlFor="nota"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Nota:
          </label>
          <input
            id="nota"
            type="number"
            ref={notaRef}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-150 ease-in-out"
          />
        </div>

        <div className="mb-6">
          <label
            htmlFor="cartelera"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Cartelera:
          </label>
          <input
            id="cartelera"
            type="url"
            ref={carteleraRef}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-150 ease-in-out"
          />
        </div>
        <div>
          {error && (
            <p className="text-red-700 bg-red-100 px-3 py-2 rounded-lg mt-2">
              {error}
            </p>
          )}
        </div>

        {/**Boton enviar */}
        <div>
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-indigo-700 focus:outline-none focus:ring-4 focus:ring-indigo-500 focus:ring-opacity-50 transition duration-150 ease-in-out"
          >
            Enviar
          </button>
        </div>
      </form>
    </div>
  );
}

export default PeliculaNoControlado;
