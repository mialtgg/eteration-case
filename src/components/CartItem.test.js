import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import CartItem from "./CartItem";

describe("CartItem Component", () => {
  const mockOnRemove = jest.fn();
  const mockOnUpdateQuantity = jest.fn();
  const item = {
    id: 1,
    name: "Item 1",
    price: 50,
    quantity: 2
  };

  beforeEach(() => {
    render(
      <CartItem
        item={item}
        onRemove={mockOnRemove}
        onUpdateQuantity={mockOnUpdateQuantity}
      />
    );
  });

  // Test 1: Verify if item name and price are displayed
  describe("Display of item details", () => {
    it("should display the correct item name", () => {
      expect(screen.getByText(item.name)).toBeInTheDocument();
    });

    it("should display the correct item price", () => {
      expect(screen.getByText(`${item.price}₺`)).toBeInTheDocument();
    });
  });

  // Test 2: Verify if decrease button works
  describe("Decrease quantity functionality", () => {
    it("should decrease quantity correctly", () => {
      fireEvent.click(screen.getAllByText("-")[0]); // Butonları getAllByText ile seçiyoruz
      expect(mockOnUpdateQuantity).toHaveBeenCalledWith(item.id, "decrease");
    });

    it("should remove item if quantity is 1", () => {
      const itemWithOneQuantity = { ...item, quantity: 1 };
      render(
        <CartItem
          item={itemWithOneQuantity}
          onRemove={mockOnRemove}
          onUpdateQuantity={mockOnUpdateQuantity}
        />
      );
      fireEvent.click(screen.getAllByText("-")[0]); // Butonları getAllByText ile seçiyoruz
      expect(mockOnRemove).toHaveBeenCalledWith(itemWithOneQuantity.id);
    });
  });

  // Test 3: Verify if increase button works
  describe("Increase quantity functionality", () => {
    it("should increase quantity correctly", () => {
      fireEvent.click(screen.getAllByText("+")[0]); // "+" butonlarını getAllByText ile seçiyoruz
      expect(mockOnUpdateQuantity).toHaveBeenCalledWith(item.id, "increase");
    });
  });
});
