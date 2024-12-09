import React, { useState, useEffect } from "react";
import ProductCard from "../components/ProductCard";
import Pagination from "../components/Pagination";
import { fetchProducts } from "../services/productService";  

const ProductList = ({ products: initialProducts, onAddToCart }) => {
  const [fetchedProducts, setFetchedProducts] = useState(initialProducts);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchProducts();  // Servisten veri alıyoruz
        setFetchedProducts(data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    if (!initialProducts || initialProducts.length === 0) {
      fetchData();  // Eğer başlangıçta ürünler yoksa, API'den çekiyoruz
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
