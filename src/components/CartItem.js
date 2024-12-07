import React from "react";

const CartItem = ({ item, onRemove, onUpdateQuantity }) => {
  const handleDecrease = () => {
    if (item.quantity === 1) {
      onRemove(item.id); // Remove item if quantity is 1
    } else {
      onUpdateQuantity(item.id, "decrease"); // Decrease quantity if greater than 1
    }
  };

  const handleIncrease = () => {
    onUpdateQuantity(item.id, "increase"); // Increase quantity
  };

  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      <div>
        <h6>{item.name}</h6>
        <small>
          {item.price}₺
        </small>
      </div>

      <div className="d-flex align-items-center">
        {/* Decrease Button */}
        <button
          className="btn btn-sm btn-secondary me-2"
          onClick={handleDecrease}
        >
          -
        </button>

        {/* Quantity Display with Blue Background */}
        <div
          className="quantity-display d-flex justify-content-center align-items-center"
          style={{
            backgroundColor: 'blue',
            color: 'white',
            width: '30px',
            height: '30px',            
            margin: '0 10px'
          }}
        >
          {item.quantity}
        </div>

        {/* Increase Button */}
        <button
          className="btn btn-sm btn-secondary me-2"
          onClick={handleIncrease}
        >
          +
        </button>
      </div>
    </li>
  );
};

export default CartItem;
