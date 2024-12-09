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
    <li className="d-flex flex-column flex-sm-row justify-content-between align-items-center mb-3">
      <div className="d-flex flex-column text-center text-sm-start mb-2 mb-sm-0">
        {/* Name and Price Section */}
        <small className="text-secondary">{item.name}</small>
        <small className="text-primary">{item.price}₺</small>
      </div>

      {/* Quantity Control Section */}
      <div className="d-flex align-items-center ">
        {/* Decrease Button */}
        <button className="btn btn-sm btn-secondary" onClick={handleDecrease}>
          -
        </button>

        {/* Quantity Display with Blue Background */}
        <div className="btn btn-sm btn-primary" aria-label="Decrease quantity">{item.quantity}</div>

        {/* Increase Button */}
        <button className="btn btn-sm btn-secondary" onClick={handleIncrease} aria-label="Increase quantity">
          +
        </button>
      </div>
    </li>
  );
};

export default CartItem;
