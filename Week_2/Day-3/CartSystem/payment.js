import { reduceStock } from './product.js';
import { getCartItems, getCartTotal, clearCart } from './cart.js';
import { applyDiscount } from './discount.js';

export function processPayment(paymentMethod, couponCode = null) {
  const items = getCartItems();
  if (items.length === 0) {
    return { status: 'failed', message: 'Cart is empty' };
  }

  if (!validatePaymentMethod(paymentMethod)) {
    return { status: 'failed', message: 'Invalid payment method' };
  }

  const subtotal = getCartTotal();
  const discountDetails = applyDiscount(subtotal, couponCode, items);

  const total = discountDetails.finalTotal;

  // Simulate payment success
  const status = 'success';

  // Reduce stock
  items.forEach(item => {
    reduceStock(item.id, item.quantity);
  });

  clearCart();

  return {
    orderId: generateOrderId(),
    items,
    subtotal,
    discount: discountDetails.discount,
    total,
    paymentMethod,
    status,
    message: "Order placed successfully"
  };
}

export function validatePaymentMethod(method) {
  const validMethods = ['card', 'upi', 'cod'];
  return validMethods.includes(method.toLowerCase());
}

function generateOrderId() {
  return 'ORD' + Date.now();
}