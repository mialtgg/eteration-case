import React, { useState, useEffect } from "react";
import ProductCard from "./ProductCard";
import Pagination from "./Pagination";

const ProductList = ({ products: initialProducts, onAddToCart }) => {
  const [fetchedProducts, setFetchedProducts] = useState(initialProducts); // Props'tan gelen veriyi alıyoruz
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Pagination için state
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12; // Her sayfada gösterilecek ürün sayısı

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
        setFetchedProducts(data); // Veriyi burada kaydediyoruz
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    if (!initialProducts || initialProducts.length === 0) {
      fetchProducts(); // Eğer dışarıdan veri gelmediyse, API'den veri çekiyoruz
    } else {
      setFetchedProducts(initialProducts); // Props'tan gelen veriyi state'e kaydediyoruz
      setLoading(false); // Veri zaten geldiği için loading'i false yapıyoruz
    }
  }, [initialProducts]); // Eğer props değişirse yeniden çalışacak

  if (loading) return <p>Yükleniyor...</p>;
  if (error) return <p>Hata: {error}</p>;

  // Pagination işlemleri
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentProducts = fetchedProducts.slice(indexOfFirstItem, indexOfLastItem);

  // Sayfa değişim fonksiyonu
  const handlePageChange = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      <div className="row" style={{ marginTop: "20px", marginBottom: "40px" }}>
        {currentProducts.map((product) => (
          <div className="col-md-3 mb-4" key={product.id}>
            <ProductCard product={product} onAddToCart={onAddToCart} />
          </div>
        ))}
      </div>
      {/* Pagination */}
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
