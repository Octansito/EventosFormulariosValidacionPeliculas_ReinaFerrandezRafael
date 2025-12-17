import { NavLink } from "react-router-dom";

function Admin() {
  return (
    <>
      <section>
        <h2 className="text-xl font-semibold mb-4">Panel de Administración</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full mt-8">
          <NavLink to="/peliculacontrolado">
            <button
              type="button"
              className="w-full px-4 py-3 text-grey-600 border border-transparent rounded-lg bg-blue-50 hover:border-blue-500 hover:bg-blue-100 hover:text-blue-700 transition"
            >
              Añadir Película (Controlado)
            </button>
          </NavLink>
          <NavLink to="/peliculanocontrolado">
            <button
              type="button"
              className="w-full px-4 py-3 text-grey-600 border border-transparent rounded-lg bg-blue-50 hover:border-blue-500 hover:bg-blue-100 hover:text-blue-700 transition"
            >
              Añadir Película (No Controlado)
            </button>
          </NavLink>
          <NavLink to="/formulariointerprete">
            <button
              type="button"
              className="w-full px-4 py-3 text-grey-600 border border-transparent rounded-lg bg-blue-50 hover:border-blue-500 hover:bg-blue-100 hover:text-blue-700 transition"
            >
              Añadir Intérprete
            </button>
          </NavLink>
        </div>
      </section>
    </>
  );
}
export default Admin;
