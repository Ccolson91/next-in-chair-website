/**
 * Database schema types for Supabase
 */
export interface Database {
  public: {
    Tables: {
      tenants: {
        Row: {
          id: string;
          user_id: string;
          business_name: string;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          user_id: string;
          business_name: string;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          user_id?: string;
          business_name?: string;
          created_at?: string;
          updated_at?: string;
        };
      };
    };
    Views: {};
    Functions: {};
    Enums: {};
  };
}

/**
 * Login form data structure
 */
export interface LoginFormData {
  email: string;
  password: string;
}

/**
 * Login response from authentication
 */
export interface LoginResponse {
  success: boolean;
  user?: any;
  tenant?: Tenant;
  error?: string;
}

/**
 * User registration form data
 */
export interface RegistrationFormData {
  fullName: string;
  businessName: string;
  email: string;
  password: string;
}

/**
 * Form validation errors
 */
export interface FormErrors {
  fullName?: string;
  businessName?: string;
  email?: string;
  password?: string;
  general?: string;
}

/**
 * Tenant record in the database
 */
export interface Tenant {
  id?: string;
  user_id: string;
  business_name: string;
  full_name?: string;
  created_at?: string;
}

/**
 * Registration response from Supabase
 */
export interface RegistrationResponse {
  success: boolean;
  user?: any;
  tenant?: Tenant;
  error?: string;
}

