import { 
  getAllProducts, 
  searchProducts, 
  getProductsByCategory 
} from './product.js';

import { 
  addToCart, 
  getCartItems, 
  getCartTotal, 
  updateQuantity,
  removeFromCart 
} from './cart.js';

import { processPayment } from './payment.js';

console.log('=== E-Commerce Store ===\n');

// 1. Browse all products
console.log('All Products:');
console.log(getAllProducts());

// 2. Search for products
console.log('\nSearching for "phone":');
console.log(searchProducts('phone'));

// 3. Filter by category
console.log('\nElectronics Category:');
console.log(getProductsByCategory('electronics'));

// 4. Add items to cart
console.log('\n=== Adding to Cart ===');
console.log(addToCart(1, 2));  // 2 Laptops
console.log(addToCart(3, 3));  // 3 Headphones
console.log(addToCart(1, 1));  // Add 1 more Laptop

// 5. View cart
console.log('\n=== Current Cart ===');
console.log(getCartItems());
console.log('Cart Total:', getCartTotal());

// 6. Update quantity
console.log('\n=== Updating Quantities ===');
console.log(updateQuantity(1, 2));  // Change laptop quantity to 2

// 7. Remove item
console.log('\n=== Removing Item ===');
console.log(removeFromCart(3));  // Remove headphones

// 8. View updated cart
console.log('\n=== Updated Cart ===');
console.log(getCartItems());
console.log('Cart Total:', getCartTotal());

// 9. Checkout with coupon
console.log('\n=== Checkout ===');
const order = processPayment('upi', 'WELCOME10');
console.log(order);