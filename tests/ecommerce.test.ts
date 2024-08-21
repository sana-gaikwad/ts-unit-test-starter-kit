import { describe, it, expect, beforeEach } from "vitest";
import {
  addProduct,
  addToCart,
  applyShippingDiscount,
  calculateTotal,
  clearCart,
} from "../src/ecommerce";

describe("E-commerce System", () => {
  beforeEach(() => {
    addProduct("Soap", 100, 10);
    addProduct("Shampoo", 200, 5);
    clearCart();
  });

  it("should calculate price of all products", () => {
    // Arrange
    addToCart("Soap", 2);
    addToCart("Shampoo", 2);
    //Act
    const sum = calculateTotal();
    //Assert
    expect(sum).toBe(600);
  });

  it("should add items to cart", () => {
    //Arrange
    let cart = {};
    //Act
    cart = addToCart("Soap", 2);
    //Assert
    expect(cart["Soap"]).toBe(2);
  });

  it("should apply a shipping discount if the total cost is above $500", () => {
    // Arrange
    addToCart("Soap", 2);
    addToCart("Shampoo", 2);
    //Act
    const sum = calculateTotal();
    //Assert
    expect(applyShippingDiscount(sum)).toBe(590);
  });

  it("should not apply a shipping discount if the total cost is less than $500", () => {
    // Arrange
    addToCart("Soap", 1);
    addToCart("Shampoo", 1);
    //Act
    const sum = calculateTotal(); // 300
    //Assert
    expect(applyShippingDiscount(sum)).toBe(300);
  });
});
