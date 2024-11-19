// React
import React, { useState } from "react";

// Biblioca
import axios from "axios";

export const Upload = ({ imageName, upload }) => {
  const [isUploading, setIsUploading] = useState(false);

  const handleFileChange = async (e) => {
    const file = e.target.files[0];

    upload(file.name);
    setIsUploading(true);

    try {
      const formData = new FormData();
      formData.append("file", file);

      const headers = {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      };

      const response = await axios.post(
        "https://api.catalogo.website/v1/api/products/upload",
        formData,
        headers
      );

      const imageUrl = response.data.Location;

      upload(imageUrl);
    } catch (error) {
      console.error("Erro ao simular upload:", error);
      alert("Erro ao simular upload. Tente novamente.");
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <div className="max-w-full border border-gray-400 mx-auto p-6 rounded-lg shadow-lg bg-white">
      <label className="block mb-3 text-lg font-semibold text-gray-800">
        Upload de Arquivo
      </label>

      <div className="flex flex-col items-center">
        <label
          htmlFor="file-upload"
          className="cursor-pointer inline-block px-6 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition duration-200 ease-in-out"
        >
          Escolher Arquivo
        </label>
        <input
          id="file-upload"
          type="file"
          name="file"
          accept="image/*"
          onChange={handleFileChange}
          className="hidden"
        />

        <p className="mt-2 text-sm text-gray-500">
          {imageName ? imageName : "Nenhuma imagem"}
        </p>

        {isUploading && (
          <div className="mt-3 flex items-center space-x-2 text-blue-500">
            <svg
              fill="none"
              className="w-5 h-5 animate-spin"
              viewBox="0 0 32 32"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                clipRule="evenodd"
                d="M15.165 8.53a.5.5 0 01-.404.58A7 7 0 1023 16a.5.5 0 011 0 8 8 0 11-9.416-7.874.5.5 0 01.58.404z"
                fill="currentColor"
                fillRule="evenodd"
              />
            </svg>
            <p>Fazendo upload...</p>
          </div>
        )}
      </div>
    </div>
  );
};
