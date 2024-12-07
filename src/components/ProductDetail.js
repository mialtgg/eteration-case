import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductDetail = ({ products, onAddToCart }) => {
  const { id } = useParams(); // URL'deki id parametresini alıyoruz
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const foundProduct = products.find((prod) => prod.id === id);
    setProduct(foundProduct); // Ürün ID'sine göre detayları buluyoruz
  }, [id, products]);

  if (!product) return <p>Ürün bulunamadı!</p>;

  return (
    <div>
      <h1>{product.name}</h1>
      <img src={product.image} alt={product.name} style={{ width: "200px" }} />
      <p>{product.price}₺</p>
      <p>{product.description}</p>

      {/* Sepete Ekleme Butonu */}
      <button onClick={() => onAddToCart(product)} className="btn btn-primary">
        Sepete Ekle
      </button>
    </div>
  );
};

export default ProductDetail;
