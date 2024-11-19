// Biblioteca
import { IoCloseOutline } from "react-icons/io5";
import axios from "axios";

// React
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

// Utils
import { ProductDatabase } from "../../utils/api";
import { Upload } from "../upload";

// Componentes
import { Loading } from "./../loading/index";

export const Modal = ({ isOpen, isClose }) => {
  const { id } = useParams();

  const url = `v1/api/products/${id}`;
  const { data, loading } = ProductDatabase(url);
  const navigate = useNavigate();

  // Estado local para os valores do formulário
  const [formData, setFormData] = useState({
    unid: "",
    description: "",
    ref: "",
    stock: 0,
    value: "",
    brand: "",
    isActive: false,
    urlImage: "",
  });

  useEffect(() => {
    if (data) {
      setFormData({
        unid: data.unid || "",
        description: data.description || "",
        ref: data.ref || "",
        stock: data.stock || 0,
        value: data.value || "",
        brand: data.brand || "",
        isActive: data.isActive || false,
        urlImage: data.urlImage || "",
      });
    }
  }, [data]);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("Dados de formulario: ", formData);

    try {
      await axios.patch(
        `https://api.catalogo.website/v1/api/products/${id}`,
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
    } catch (err) {
      console.log("Error: ", err);
    }

    navigate(0);
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <div
      className={`fixed inset-0 ${
        isOpen ? "flex" : "hidden"
      } items-center justify-center bg-black bg-opacity-50`}
    >
      <div className="relative w-full max-w-3xl rounded-2xl bg-white shadow-lg">
        {/* Header */}
        <div className="flex items-center justify-between border-b p-5">
          <h2 className="text-lg font-semibold text-gray-800">
            Formulário de Edição
          </h2>
          <button
            type="button"
            className="text-gray-400 hover:text-gray-600"
            onClick={() => isClose(false)}
          >
            <IoCloseOutline className="h-6 w-6" />
          </button>
        </div>

        <div className="p-6">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
              <div>
                <label
                  htmlFor="unid"
                  className="block text-sm font-medium text-gray-700"
                >
                  Unidade:
                </label>
                <input
                  name="unid"
                  id="unid"
                  value={formData.unid}
                  disabled
                  className="mt-1 w-full rounded-lg border-gray-300 bg-gray-100 py-2 px-3 text-gray-600 focus:border-indigo-500 focus:ring-indigo-500 cursor-no-drop"
                />
              </div>
              <div>
                <label
                  htmlFor="description"
                  className="block text-sm font-medium text-gray-700"
                >
                  Descrição:
                </label>
                <input
                  name="description"
                  id="description"
                  type="text"
                  value={formData.description}
                  onChange={handleInputChange}
                  placeholder="Nome do produto"
                  className="mt-1 w-full rounded-lg border border-gray-400 bg-white py-2 px-3 text-gray-700 focus:border-indigo-500 focus:ring-indigo-500"
                />
              </div>
              <div>
                <label
                  htmlFor="ref"
                  className="block text-sm font-medium text-gray-700"
                >
                  Referência:
                </label>
                <input
                  name="ref"
                  id="ref"
                  value={formData.ref}
                  disabled
                  className="mt-1 w-full rounded-lg border-gray-300 bg-gray-100 py-2 px-3 text-gray-600 focus:border-indigo-500 focus:ring-indigo-500 cursor-no-drop"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
              <div>
                <label
                  htmlFor="stock"
                  className="block text-sm font-medium text-gray-700"
                >
                  Estoque:
                </label>
                <input
                  name="stock"
                  id="stock"
                  value={formData.stock}
                  disabled
                  className="mt-1 w-full rounded-lg border-gray-300 bg-gray-100 py-2 px-3 text-gray-600 focus:border-indigo-500 focus:ring-indigo-500 cursor-no-drop"
                />
              </div>
              <div>
                <label
                  htmlFor="value"
                  className="block text-sm font-medium text-gray-700"
                >
                  Valor:
                </label>
                <input
                  name="value"
                  id="value"
                  type="text"
                  value={formData.value}
                  onChange={handleInputChange}
                  placeholder="123,00"
                  className="mt-1 w-full rounded-lg border border-gray-400 bg-white py-2 px-3 text-gray-700 focus:border-indigo-500 focus:ring-indigo-500"
                />
              </div>
              <div>
                <label
                  htmlFor="brand"
                  className="block text-sm font-medium text-gray-700"
                >
                  Marca:
                </label>
                <input
                  name="brand"
                  id="brand"
                  value={formData.brand}
                  disabled
                  className="mt-1 w-full rounded-lg border-gray-300 bg-gray-100 py-2 px-3 text-gray-600 focus:border-indigo-500 focus:ring-indigo-500 cursor-no-drop"
                />
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <input
                type="checkbox"
                id="isActive"
                name="isActive"
                checked={formData.isActive}
                onChange={handleInputChange}
                className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
              />
              <label
                htmlFor="isActive"
                className="text-sm font-medium text-gray-700"
              >
                Ativo?
              </label>
            </div>

            <div>
              <Upload
                imageName={formData.urlImage}
                upload={(url) =>
                  setFormData((prevFormData) => ({
                    ...prevFormData,
                    urlImage: url, // Atualiza o valor de urlImage no formData
                  }))
                }
              />
            </div>

            <div className="text-right">
              <button
                type="submit"
                className="rounded-md bg-blue-600 py-2 px-6 text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                Envia
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
