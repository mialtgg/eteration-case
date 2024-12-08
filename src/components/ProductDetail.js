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

  // Ürün açıklamasını kısaltma
  const shortDescription = product.description.length > 150
    ? product.description.slice(0, 150) + '...'
    : product.description;

  return (
    <div className="container mt-4">
      <div className="row d-flex justify-content-center">
        {/* Kartın genişliğini artırdık: col-md-10 */}
        <div className="col-md-10">
          <div className="card shadow-sm">
            <div className="row no-gutters">
              {/* Sol taraf: Ürün Resmi */}
              <div className="col-md-6 d-flex justify-content-center">
  <div className="d-flex justify-content-center align-items-center w-100">
    <img
      src={product.image}
      alt={product.name}
      className="card-img img-fluid ml-3"
    />
  </div>
</div>



              {/* Sağ taraf: Ürün Detayları */}
              <div className="col-md-6 d-flex flex-column justify-content-between p-4">
                <div>
                  <h1 className="card-title">{product.name}</h1>
                  <p className="text-danger h4">{product.price.toLocaleString('tr-TR', { style: 'currency', currency: 'TRY' })}₺</p> {/* Formatted price */}
                  <p className="short-description">{shortDescription}</p> {/* Add class to description */}
                </div>
                <button
                  onClick={() => onAddToCart(product)}
                  className="btn btn-primary mt-3"
                >
                  Sepete Ekle
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Add your logic for Total Price and Checkout button here */}
    </div>
  );
};

export default ProductDetail;