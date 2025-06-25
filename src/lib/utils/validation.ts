import { z } from 'zod';
import type { RegistrationFormData, FormErrors } from './types';

/**
 * Zod schema for login form validation
 */
export const loginSchema = z.object({
  email: z.string().email('Please enter a valid email address'),
  password: z.string().min(1, 'Password is required')
});

/**
 * Zod schema for registration form validation
 */
export const registrationSchema = z.object({
  fullName: z.string().min(2, 'Full name must be at least 2 characters').trim(),
  businessName: z.string().min(2, 'Business name must be at least 2 characters').trim(),
  email: z.string().email('Please enter a valid email address'),
  password: z.string().min(8, 'Password must be at least 8 characters')
    .regex(/[A-Z]/, 'Password must contain at least one uppercase letter')
    .regex(/[a-z]/, 'Password must contain at least one lowercase letter')
    .regex(/\d/, 'Password must contain at least one number')
});

/**
 * Validate email format using regex
 */
export const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

/**
 * Validate password strength
 * Requirements: At least 8 characters, 1 uppercase, 1 lowercase, 1 number
 */
export const isValidPassword = (password: string): boolean => {
  const minLength = password.length >= 8;
  const hasUppercase = /[A-Z]/.test(password);
  const hasLowercase = /[a-z]/.test(password);
  const hasNumber = /\d/.test(password);
  
  return minLength && hasUppercase && hasLowercase && hasNumber;
};

/**
 * Get password strength description
 */
export const getPasswordStrength = (password: string): string => {
  if (password.length === 0) return '';
  if (password.length < 8) return 'Too short (minimum 8 characters)';
  if (!/[A-Z]/.test(password)) return 'Add an uppercase letter';
  if (!/[a-z]/.test(password)) return 'Add a lowercase letter';
  if (!/\d/.test(password)) return 'Add a number';
  return 'Strong password';
};

/**
 * Validate registration form data
 */
export const validateRegistrationForm = (data: RegistrationFormData): FormErrors => {
  const errors: FormErrors = {};

  // Full name validation
  if (!data.fullName.trim()) {
    errors.fullName = 'Full name is required';
  } else if (data.fullName.trim().length < 2) {
    errors.fullName = 'Full name must be at least 2 characters';
  }

  // Business name validation
  if (!data.businessName.trim()) {
    errors.businessName = 'Business name is required';
  } else if (data.businessName.trim().length < 2) {
    errors.businessName = 'Business name must be at least 2 characters';
  }

  // Email validation
  if (!data.email.trim()) {
    errors.email = 'Email address is required';
  } else if (!isValidEmail(data.email)) {
    errors.email = 'Please enter a valid email address';
  }

  // Password validation
  if (!data.password) {
    errors.password = 'Password is required';
  } else if (!isValidPassword(data.password)) {
    errors.password = 'Password must be at least 8 characters with uppercase, lowercase, and number';
  }

  return errors;
};

/**
 * Check if form has any validation errors
 */
export const hasFormErrors = (errors: FormErrors): boolean => {
  return Object.keys(errors).length > 0;
};

