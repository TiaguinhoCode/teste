// Utils
import { formatCurrency } from "./../../utils/mask/formatCurrency";

// Biblioteca
import { Link } from "react-router-dom";

export const Table = ({ data, setIsOpen }) => {
  return (
    <table className="w-full border-separate border-spacing-y-2">
      <thead>
        <tr className="text-gray-600 text-sm font-semibold">
          <th className="pb-4 text-left">Imagem / Descrição</th>
          <th className="pb-4 text-center">Unidade</th>
          <th className="pb-4 text-center">Referencia</th>
          <th className="pb-4 text-center">Marca</th>
          <th className="pb-4 text-center">Valor</th>
          <th className="pb-4 text-center">Estoque</th>
          <th className="pb-4 text-center">Ativo?</th>
          <th className="pb-4 text-center">Ações</th>
        </tr>
      </thead>
      <tbody className="text-gray-800">
        {data.map((product) => (
          <tr
            key={product._id}
            className={`${
              product.isActive ? "text-gray-800" : "text-red-600"
            } hover:bg-gray-100 rounded-lg transition duration-200 ease-in-out shadow`}
          >
            <td className="p-4">
              <div className="flex items-center">
                <img
                  src={product.urlImage}
                  alt="Produto"
                  className="w-12 h-12 object-cover rounded-full mr-4"
                />
                <div>
                  <p
                    className={`font-semibold ${
                      product.isActive ? "text-blue-600" : "text-red-600"
                    } hover:underline`}
                  >
                    {product.description}
                  </p>
                </div>
              </div>
            </td>
            <td className="p-4 text-center font-semibold">{product.unid}</td>
            <td className="p-4 text-center">{product.ref}</td>
            <td className="p-4 text-center">{product.brand}</td>
            <td className="p-4 text-center font-semibold">
              {formatCurrency(product.value)}
            </td>
            <td className="p-4 text-center">{product.stock}</td>
            <td className="p-4 text-center">
              {product.isActive ? "Sim" : "Não"}
            </td>
            <td className="p-4 text-center">
              <Link to={{ pathname: `/produto/edit/${product._id}` }}>
                <button
                  onClick={() => setIsOpen(true)}
                  className="text-blue-500 hover:text-blue-700 transition-colors duration-150"
                >
                  Editar
                </button>
              </Link>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
