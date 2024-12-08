import React, { useState, useEffect } from "react";
import ProductCard from "./ProductCard";
import Pagination from "./Pagination";

const ProductList = ({ products: initialProducts, onAddToCart }) => {
  const [fetchedProducts, setFetchedProducts] = useState(initialProducts);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(
          "https://5fc9346b2af77700165ae514.mockapi.io/products"
        );
        if (!response.ok) {
          throw new Error("Veriler alınamadı!");
        }
        const data = await response.json();
        setFetchedProducts(data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    if (!initialProducts || initialProducts.length === 0) {
      fetchProducts();
    } else {
      setFetchedProducts(initialProducts);
      setLoading(false);
    }
  }, [initialProducts]);

  if (loading) return <p>Yükleniyor...</p>;
  if (error) return <p>Hata: {error}</p>;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentProducts = fetchedProducts.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="container">
      <div className="row justify-content-center" style={{ marginTop: "20px", marginBottom: "40px" }}>
        {currentProducts.map((product) => (
          <div className="col-md-3 mb-4" key={product.id}>
            <ProductCard product={product} onAddToCart={onAddToCart} />
          </div>
        ))}
      </div>
      <Pagination
        itemsPerPage={itemsPerPage}
        totalItems={fetchedProducts.length}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default ProductList;
