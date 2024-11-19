// Biblioteca
import { IoPricetagsOutline } from "react-icons/io5";

export const SideNav = () => {
  return (
    <div className="relative flex flex-col h-screen w-full max-w-[20rem] p-4 bg-white text-gray-700 shadow-xl">
      {/* Título */}
      <div className="mb-4 p-4">
        <h5 className="text-xl font-semibold text-gray-900">Catálogos</h5>
      </div>

      <nav className="flex flex-col gap-2 p-2">
        <div
          role="button"
          className="flex items-center gap-4 w-full px-3 py-2 rounded-lg bg-blue-50 border-l-4 border-blue-500 text-blue-900 font-semibold cursor-pointer"
        >
          <IoPricetagsOutline className="h-5 w-5" />
          Produtos
        </div>

        {/* <div
          role="button"
          aria-selected="false"
          className="flex items-center gap-4 w-full px-3 py-2 rounded-lg text-gray-700 hover:bg-gray-100 hover:text-blue-900 cursor-pointer"
        >
          <IoPricetagsOutline className="h-5 w-5" />
          Outros
        </div> */}
      </nav>
    </div>
  );
};
