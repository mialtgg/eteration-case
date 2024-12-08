import React from "react";
import CartItem from "./CartItem";

const Cart = ({ cart, onRemove, totalPrice, onUpdateQuantity }) => {
  return (
    
    <div className="p-2 mt-3">
      
      {/* Sepet Ürünleri */}
      <div className="cart-items mb-6 p-3 border">
    
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
      <div className="total-price p-3 border mt-2 d-flex flex-column" >
  <div className="w-100 text-start mb-2">
    <small>Total Price: <span className="fw-bold text-primary">{totalPrice}₺</span></small>
  </div>
  {cart.length > 0 && (
    <button className="btn btn-primary btn-sm w-100">Checkout</button>
  )}
</div>



     
      

    </div>
  );
};

export default Cart;
