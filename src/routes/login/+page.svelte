<script lang="ts">
  import { enhance } from '$app/forms';
  import { goto } from '$app/navigation';
  import type { ActionData } from './$types';

  // Props from server
  export let form: ActionData;

  // Form data
  let formData = {
    email: '',
    password: ''
  };

  // Form state
  let isLoading = false;
  let showPassword = false;

  /**
   * Toggle password visibility
   */
  const togglePasswordVisibility = () => {
    showPassword = !showPassword;
  };
</script>

<svelte:head>
  <title>Login - Next in Chair</title>
  <meta name="description" content="Sign in to your Next in Chair account and access your salon's marketing dashboard." />
</svelte:head>

<div class="min-h-screen salon-bg-elegant flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
  <div class="max-w-md w-full space-y-8">
    <!-- Header -->
    <div class="text-center">
      <a href="/" class="inline-block mb-8">
        <img src="/NIC_Logo.png" alt="Next in Chair Logo" class="h-12 mx-auto" />
      </a>
      <h2 class="text-3xl font-bold salon-heading">Welcome Back</h2>
      <p class="mt-2 salon-subheading">Sign in to your salon's marketing dashboard</p>
    </div>

    <!-- Login Form -->
    <form 
      method="POST" 
      class="mt-8 space-y-6" 
      use:enhance={() => {
        isLoading = true;
        return async ({ result, update }) => {
          isLoading = false;
          if (result.type === 'redirect') {
            goto(result.location);
          } else {
            await update();
          }
        };
      }}
    >
      <div class="space-y-4">
        <!-- Email Field -->
        <div>
          <label for="email" class="block text-sm font-medium salon-heading mb-2">
            Email Address
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={formData.email}
            class="appearance-none relative block w-full px-3 py-3 border border-gray-600 placeholder-gray-400 salon-body-text rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500 focus:z-10 bg-gray-800/50 backdrop-blur-sm transition-all duration-200"
            placeholder="Enter your email address"
            disabled={isLoading}
          />
          {#if form?.form?.errors?.email}
            <p class="mt-1 text-sm text-red-400">{form.form.errors.email[0]}</p>
          {/if}
        </div>

        <!-- Password Field -->
        <div>
          <label for="password" class="block text-sm font-medium salon-heading mb-2">
            Password
          </label>
          <div class="relative">
            <input
              id="password"
              name="password"
              type={showPassword ? 'text' : 'password'}
              required
              value={formData.password}
              class="appearance-none relative block w-full px-3 py-3 pr-10 border border-gray-600 placeholder-gray-400 salon-body-text rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500 focus:z-10 bg-gray-800/50 backdrop-blur-sm transition-all duration-200"
              placeholder="Enter your password"
              disabled={isLoading}
            />
            <button
              type="button"
              class="absolute inset-y-0 right-0 pr-3 flex items-center"
              on:click={togglePasswordVisibility}
              disabled={isLoading}
            >
              {#if showPassword}
                <svg class="h-5 w-5 text-gray-400 hover:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L3 3m6.878 6.878L21 21"></path>
                </svg>
              {:else}
                <svg class="h-5 w-5 text-gray-400 hover:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                </svg>
              {/if}
            </button>
          </div>
          
          {#if form?.form?.errors?.password}
            <p class="mt-1 text-sm text-red-400">{form.form.errors.password[0]}</p>
          {/if}
        </div>
      </div>

      <!-- Remember Me & Forgot Password -->
      <div class="flex items-center justify-between">
        <div class="flex items-center">
          <input
            id="remember-me"
            name="remember-me"
            type="checkbox"
            class="h-4 w-4 text-pink-600 focus:ring-pink-500 border-gray-600 rounded bg-gray-800"
          />
          <label for="remember-me" class="ml-2 block text-sm salon-body-text">
            Remember me
          </label>
        </div>

        <div class="text-sm">
          <a href="#forgot-password" class="font-medium salon-text-warm hover:underline transition-colors duration-200">
            Forgot your password?
          </a>
        </div>
      </div>

      <!-- General Error Message -->
      {#if form?.error}
        <div class="rounded-lg bg-red-900/50 border border-red-500/50 p-4">
          <p class="text-sm text-red-300">{form.error}</p>
        </div>
      {/if}

      <!-- Submit Button -->
      <div>
        <button
          type="submit"
          disabled={isLoading}
          class="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-lg text-white salon-button-primary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
        >
          {#if isLoading}
            <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
              <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Signing In...
          {:else}
            Sign In
          {/if}
        </button>
      </div>

      <!-- Sign Up Link -->
      <div class="text-center">
        <p class="salon-text-muted">
          Don't have an account?
          <a href="/register" class="font-medium salon-text-warm hover:underline transition-colors duration-200">
            Create your account
          </a>
        </p>
      </div>
    </form>

    <!-- Social Login Options (Optional) -->
    <div class="mt-6">
      <div class="relative">
        <div class="absolute inset-0 flex items-center">
          <div class="w-full border-t border-gray-600"></div>
        </div>
        <div class="relative flex justify-center text-sm">
          <span class="px-2 salon-bg-elegant salon-text-muted">Or continue with</span>
        </div>
      </div>

      <div class="mt-6 grid grid-cols-2 gap-3">
        <button
          type="button"
          class="w-full inline-flex justify-center py-2 px-4 border border-gray-600 rounded-lg shadow-sm bg-gray-800/50 text-sm font-medium salon-body-text hover:bg-gray-700/50 transition-colors duration-200"
          disabled
        >
          <svg class="w-5 h-5" viewBox="0 0 24 24">
            <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
            <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
            <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
            <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
          </svg>
          <span class="ml-2">Google</span>
        </button>

        <button
          type="button"
          class="w-full inline-flex justify-center py-2 px-4 border border-gray-600 rounded-lg shadow-sm bg-gray-800/50 text-sm font-medium salon-body-text hover:bg-gray-700/50 transition-colors duration-200"
          disabled
        >
          <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
          </svg>
          <span class="ml-2">Facebook</span>
        </button>
      </div>
    </div>
  </div>
</div>

