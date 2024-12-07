import React from "react";
import CartItem from "./CartItem";

const Cart = ({ cart, onRemove, totalPrice, onUpdateQuantity }) => {
  return (
    <div className="border p-3">
      {/* Sepet Ürünleri */}
      <div className="cart-items mb-4 p-3 border">
        <h2>Sepet</h2>
        {cart.length === 0 ? (
          <p>Sepetiniz boş.</p>
        ) : (
          <ul className="list-group mb-3">
            {cart.map((item) => (
              <CartItem
                key={item.id}
                item={item}
                onRemove={onRemove}
                onUpdateQuantity={onUpdateQuantity}
              />
            ))}
          </ul>
        )}
      </div>

      {/* Ödeme Yap */}
      <div className="total-price p-3 border-top">
        <h5>Toplam Fiyat: {totalPrice}₺</h5>
        {cart.length > 0 && <button className="btn btn-success w-100">Ödeme Yap</button>}
      </div>
    </div>
  );
};

export default Cart;
