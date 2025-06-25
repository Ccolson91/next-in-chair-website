import { supabase } from './supabase';
import type { RegistrationFormData, RegistrationResponse, LoginFormData, LoginResponse, Tenant } from './types';

/**
 * Login an existing user
 */
export const loginUser = async (formData: LoginFormData): Promise<LoginResponse> => {
  try {
    console.log('loginUser called with:', formData.email);
    
    // Step 1: Sign in with Supabase Auth
    const { data: authData, error: authError } = await supabase.auth.signInWithPassword({
      email: formData.email,
      password: formData.password
    });

    console.log('Login auth result:', { authData, authError });

    if (authError) {
      console.log('Login error occurred:', authError);
      return {
        success: false,
        error: authError.message
      };
    }

    if (!authData.user) {
      return {
        success: false,
        error: 'Failed to sign in'
      };
    }

    // Step 2: Get tenant information
    const tenant = await getTenantByUserId(authData.user.id);

    return {
      success: true,
      user: authData.user,
      tenant: tenant
    };

  } catch (error) {
    console.error('Unexpected error in loginUser:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'An unexpected error occurred'
    };
  }
};

/**
 * Register a new user and create their tenant record
 */
export const registerUser = async (formData: RegistrationFormData): Promise<RegistrationResponse> => {
  try {
    console.log('registerUser called with:', formData);
    
    // Step 1: Register user with Supabase Auth
    console.log('Attempting Supabase auth signup...');
    const { data: authData, error: authError } = await supabase.auth.signUp({
      email: formData.email,
      password: formData.password
    });

    console.log('Supabase auth result:', { authData, authError });

    if (authError) {
      console.log('Auth error occurred:', authError);
      return {
        success: false,
        error: authError.message
      };
    }

    if (!authData.user) {
      console.log('No user returned from auth');
      return {
        success: false,
        error: 'Failed to create user account'
      };
    }

    console.log('User created successfully:', authData.user.id);

    // Step 2: Create tenant record in database
    const tenantData: Tenant = {
      user_id: authData.user.id,
      business_name: formData.businessName,
      full_name: formData.fullName
    };

    console.log('Creating tenant record:', tenantData);
    const { data: tenantResult, error: tenantError } = await supabase
      .from('tenants')
      .insert(tenantData)
      .select()
      .single();

    console.log('Tenant creation result:', { tenantResult, tenantError });

    if (tenantError) {
      console.log('Tenant creation error:', tenantError);
      return {
        success: false,
        error: `Failed to create business profile: ${tenantError.message}`
      };
    }

    console.log('Registration completed successfully');
    return {
      success: true,
      user: authData.user,
      tenant: tenantResult
    };

  } catch (error) {
    console.error('Unexpected error in registerUser:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'An unexpected error occurred'
    };
  }
};

/**
 * Get tenant information for a user
 */
export const getTenantByUserId = async (userId: string): Promise<Tenant | null> => {
  try {
    const { data, error } = await supabase
      .from('tenants')
      .select('*')
      .eq('user_id', userId)
      .single();

    if (error) {
      console.error('Error fetching tenant:', error);
      return null;
    }

    return data;
  } catch (error) {
    console.error('Error fetching tenant:', error);
    return null;
  }
};

