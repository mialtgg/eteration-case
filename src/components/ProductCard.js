import React from "react";
import { Link } from "react-router-dom"; // Link import edilmesi gerekiyor

const ProductCard = ({ product, onAddToCart }) => {
  return (
    <div className="card">
      {/* Ürün Resmi ve Detayı Tıklanabilir Yapmak İçin Link Ekliyoruz */}
      <Link to={`/product/${product.id}`} className="text-decoration-none">
        <img
          src={product.image}
          alt={product.name}
          className="card-img-top"
          style={{ height: "200px", objectFit: "cover" }}
        />
        <div className="card-body">
          <h5 className="card-title text-truncate">{product.name}</h5>
          <p className="card-text">{product.price}₺</p>
        </div>
      </Link>

      {/* Sepete Ekleme Butonu */}
      <button
        className="btn  btn-sm btn-primary"
        onClick={() => onAddToCart(product)}
      >
        Sepete Ekle
      </button>
    </div>
  );
};

export default ProductCard;
