import { getProductById, checkStock } from './product.js';

let cartItems = [];

export function addToCart(productId, quantity) {
  const product = getProductById(productId);
  if (!product) return "Product not found";

  if (!checkStock(productId, quantity)) {
    return "Not enough stock available";
  }

  const existingItem = cartItems.find(item => item.productId === productId);

  if (existingItem) {
    if (!checkStock(productId, existingItem.quantity + quantity)) {
      return "Not enough stock to update quantity";
    }
    existingItem.quantity += quantity;
  } else {
    cartItems.push({ productId, quantity });
  }

  return "Item added to cart successfully";
}

export function removeFromCart(productId) {
  cartItems = cartItems.filter(item => item.productId !== productId);
  return "Item removed from cart";
}

export function updateQuantity(productId, newQuantity) {
  const item = cartItems.find(i => i.productId === productId);
  if (!item) return "Item not found in cart";

  if (!checkStock(productId, newQuantity)) {
    return "Not enough stock available";
  }

  item.quantity = newQuantity;
  return "Quantity updated successfully";
}

export function getCartItems() {
  return cartItems.map(item => {
    const product = getProductById(item.productId);
    return {
      ...product,
      quantity: item.quantity,
      total: product.price * item.quantity
    };
  });
}

export function getCartTotal() {
  return getCartItems().reduce((sum, item) => sum + item.total, 0);
}

export function clearCart() {
  cartItems = [];
}