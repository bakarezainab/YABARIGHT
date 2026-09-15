// Email validation
export const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

// Password validation - minimum 8 chars, at least one number
export const validatePassword = (password: string): boolean => {
  return password.length >= 8 && /\d/.test(password);
};

// Product name validation
export const validateProductName = (name: string): boolean => {
  return name.trim().length >= 3 && name.trim().length <= 100;
};

// Price validation - must be positive number
export const validatePrice = (price: number): boolean => {
  return price > 0 && !isNaN(price);
};

// Quantity validation - must be positive integer
export const validateQuantity = (quantity: number): boolean => {
  return Number.isInteger(quantity) && quantity > 0;
};

// Phone number validation (Nigerian format)
export const validatePhoneNumber = (phone: string): boolean => {
  const phoneRegex = /^(\+234|0)[0-9]{10}$/;
  return phoneRegex.test(phone.replace(/\s/g, ''));
};

// Address validation
export const validateAddress = (address: string): boolean => {
  return address.trim().length >= 5 && address.trim().length <= 200;
};

// Rating validation (1-5)
export const validateRating = (rating: number): boolean => {
  return rating >= 1 && rating <= 5 && Number.isInteger(rating);
};
