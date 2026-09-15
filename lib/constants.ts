// App Configuration
export const APP_NAME = process.env.NEXT_PUBLIC_APP_NAME || 'YABARIGHT';
export const APP_TAGLINE = 'Look Good. Spend Smart. Shop Right.';
export const APP_DESCRIPTION =
  'The digital home of affordable fashion. Buy and sell quality thrift clothes, bags, and shoes online.';

// Product Categories
export const PRODUCT_CATEGORIES = [
  'Clothing',
  'Bags',
  'Shoes',
  'Accessories',
  'Designer Items',
  'Vintage',
];

// Product Conditions
export const PRODUCT_CONDITIONS = [
  { value: 'NEW', label: 'New' },
  { value: 'LIKE_NEW', label: 'Like New' },
  { value: 'GOOD', label: 'Good' },
  { value: 'FAIR', label: 'Fair' },
  { value: 'POOR', label: 'Poor' },
];

// Common Sizes
export const CLOTHING_SIZES = [
  'XS',
  'S',
  'M',
  'L',
  'XL',
  'XXL',
  'XXXL',
  'One Size',
];

export const SHOE_SIZES = [
  '35',
  '36',
  '37',
  '38',
  '39',
  '40',
  '41',
  '42',
  '43',
  '44',
  '45',
];

// Payment Methods
export const PAYMENT_METHODS = [
  { value: 'stripe', label: 'Credit/Debit Card' },
  { value: 'bank_transfer', label: 'Bank Transfer' },
  { value: 'wallet', label: 'Wallet' },
];

// Order Status
export const ORDER_STATUSES = [
  { value: 'PENDING', label: 'Pending', color: 'bg-yellow-100 text-yellow-800' },
  {
    value: 'CONFIRMED',
    label: 'Confirmed',
    color: 'bg-blue-100 text-blue-800',
  },
  { value: 'SHIPPED', label: 'Shipped', color: 'bg-purple-100 text-purple-800' },
  {
    value: 'DELIVERED',
    label: 'Delivered',
    color: 'bg-green-100 text-green-800',
  },
  {
    value: 'CANCELLED',
    label: 'Cancelled',
    color: 'bg-red-100 text-red-800',
  },
];

// Commission Rate (Platform takes 15% by default)
export const PLATFORM_COMMISSION_RATE = 0.15;

// Pagination
export const ITEMS_PER_PAGE = 12;
export const ORDERS_PER_PAGE = 10;

// File Upload
export const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB
export const ALLOWED_IMAGE_TYPES = [
  'image/jpeg',
  'image/png',
  'image/webp',
];

// Regex Patterns
export const PATTERNS = {
  email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  password: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d@$!%*?&]{8,}$/,
  phone: /^(\+234|0)[0-9]{10}$/,
};

// Default Image URLs
export const DEFAULT_IMAGES = {
  avatar:
    'https://api.dicebear.com/7.x/avataaars/svg?seed=Felix',
  product:
    'https://images.unsplash.com/photo-1505761671905-60a2880eae38?w=500&h=500&fit=crop',
  shop:
    'https://images.unsplash.com/photo-1556740738-b6a63e27c547?w=500&h=500&fit=crop',
};

// Error Messages
export const ERROR_MESSAGES = {
  INVALID_EMAIL: 'Please enter a valid email address',
  INVALID_PASSWORD:
    'Password must be at least 8 characters with uppercase, lowercase, and numbers',
  WEAK_PASSWORD: 'Password is too weak',
  EMAIL_TAKEN: 'This email is already registered',
  USER_NOT_FOUND: 'User not found',
  INVALID_CREDENTIALS: 'Invalid email or password',
  NOT_AUTHENTICATED: 'You must be logged in',
  NOT_AUTHORIZED: 'You do not have permission for this action',
  PRODUCT_NOT_FOUND: 'Product not found',
  ORDER_NOT_FOUND: 'Order not found',
  CART_EMPTY: 'Your cart is empty',
  INSUFFICIENT_STOCK: 'Insufficient stock available',
  PAYMENT_FAILED: 'Payment processing failed',
  SERVER_ERROR: 'An unexpected error occurred',
};

// Success Messages
export const SUCCESS_MESSAGES = {
  ACCOUNT_CREATED: 'Account created successfully',
  LOGGED_IN: 'Logged in successfully',
  LOGOUT: 'Logged out successfully',
  PASSWORD_RESET: 'Password reset successfully',
  PROFILE_UPDATED: 'Profile updated successfully',
  PRODUCT_CREATED: 'Product created successfully',
  PRODUCT_UPDATED: 'Product updated successfully',
  PRODUCT_DELETED: 'Product deleted successfully',
  ADDED_TO_CART: 'Added to cart',
  ORDER_CREATED: 'Order created successfully',
  ORDER_CANCELLED: 'Order cancelled successfully',
};
