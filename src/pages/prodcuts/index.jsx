// React
import { useState, useEffect, useMemo } from "react";

// Componentes
import { Table } from "../../components/table";
import { TableHeader } from "../../components/table/header";
import { Modal } from "../../components/modal";

// Utils
import { InfiniteScroll } from "../../utils/infiniteScroll";
import { ProductDatabase } from "./../../utils/api/index";

export const ProductsPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [products, setProducts] = useState([]);
  const [searchParams, setSearchParams] = useState("");
  const [size, ] = useState(10);
  const [filters, setFilters] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const url = `v1/api/products`;

  const { data, loading, total } = ProductDatabase(
    url,
    currentPage,
    size,
    filters
  );

  const fetchMore = () => {
    if (!loading && filters === "" && products.length < total) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  useEffect(() => {
    if (data) {
      setProducts((prevData) => {
        const newProducts = data.content.filter(
          (product) =>
            !prevData.some(
              (existingProduct) => existingProduct._id === product._id
            )
        );
        return [...prevData, ...newProducts];
      });
    }
  }, [data]);

  const filteredProducts = useMemo(() => {
    let result = products;

    // Aplicar filtro de "brand" se existir
    if (filters !== "Todos" && filters !== "") {
      result = result.filter((product) =>
        product.brand.toLowerCase().includes(filters.toLowerCase())
      );
    }

    // Aplicar busca por texto (searchParams) se existir
    if (searchParams.trim() !== "") {
      result = result.filter((product) =>
        product.description.toLowerCase().includes(searchParams.toLowerCase())
      );
    }

    return result;
  }, [products, filters, searchParams]);

  return (
    <>
      <Modal isOpen={isOpen} isClose={setIsOpen} />
      <div className="w-full">
        <section className="w-full block">
          <h1 className="text-3xl font-bold text-gray-800 mb-10">
            Produtos Catálogos
          </h1>
        </section>

        <TableHeader
          setFilters={setFilters}
          filters={filters}
          searchParams={searchParams}
          setSearchParams={setSearchParams}
        />

        <main className="flex rounded-lg bg-white p-6 shadow-md">
          <div className="flex-auto py-8 px-6">
            <div className="overflow-auto h-[480px]">
              {loading ? (
                <p>Carregando...</p>
              ) : (
                <Table data={filteredProducts} setIsOpen={setIsOpen} />
              )}
              {filters === "" && products.length < total && (
                <InfiniteScroll fetchMore={fetchMore} />
              )}
            </div>
          </div>
        </main>
      </div>
    </>
  );
};
