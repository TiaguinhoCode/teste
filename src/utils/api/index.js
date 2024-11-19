// Biblioteca
import axios from "axios";

// React
import { useState, useEffect } from "react";

export const ProductDatabase = (url, page = 1, size, filters) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [total, setTotal] = useState(0); // Total de produtos

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        // Verifica se o filtro é "todos"
        let apiUrl = `https://api.catalogo.website/${url}?page=${page}&size=${size}`;

        if (
          filters === "Todos" ||
          filters === "Peining" ||
          filters === "Devia" ||
          filters === "Kimaster" ||
          filters === "Hrebos" ||
          filters === "B-Max"
        ) {
          // Se for 'todos', faz a requisição com o limit
          apiUrl = `https://api.catalogo.website/${url}?limit=${total}`;
        }

        const resp = await axios.get(apiUrl);
        
        setData(resp.data);
        setTotal(resp.data.total); // Obtém o total de produtos da API
      } catch (err) {
        console.log("Erro na requisição", err);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [url, page, size, filters, total]); // Incluindo filters e total na dependência

  return { data, loading, total };
};
