<script lang="ts">
  import { enhance } from '$app/forms';
  import { goto } from '$app/navigation';
  import { getPasswordStrength } from '$lib/utils/validation';
  import type { ActionData } from './$types';

  // Props from server
  export let form: ActionData;

  // Form state
  let isLoading = false;
  let showPassword = false;
  let passwordValue = '';

  // Reactive password strength indicator
  $: passwordStrength = getPasswordStrength(passwordValue);

  /**
   * Toggle password visibility
   */
  const togglePasswordVisibility = () => {
    showPassword = !showPassword;
  };
</script>

<svelte:head>
  <title>Register - Next in Chair</title>
  <meta name="description" content="Create your Next in Chair account and start growing your salon business today." />
</svelte:head>

<div class="min-h-screen salon-bg-elegant flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
  <div class="max-w-md w-full space-y-8">
    <!-- Header -->
    <div class="text-center">
      <a href="/" class="inline-block mb-8">
        <img src="/NIC_Logo.png" alt="Next in Chair Logo" class="h-12 mx-auto" />
      </a>
      <h2 class="text-3xl font-bold salon-heading">Create Your Account</h2>
      <p class="mt-2 salon-subheading">Start growing your salon business today</p>
    </div>

    <!-- Registration Form -->
    <form 
      method="POST" 
      action="?/default"
      class="mt-8 space-y-6" 
      use:enhance={() => {
        isLoading = true;
        console.log('Form submission started');
        return async ({ result, update }) => {
          console.log('Form result:', result);
          isLoading = false;
          if (result.type === 'redirect') {
            console.log('Redirecting to:', result.location);
            goto(result.location);
          } else if (result.type === 'failure') {
            console.log('Form failed:', result.data);
            await update();
          } else {
            await update();
          }
        };
      }}
    >
      <div class="space-y-4">
        <!-- Full Name Field -->
        <div>
          <label for="fullName" class="block text-sm font-medium salon-heading mb-2">
            Full Name
          </label>
          <input
            id="fullName"
            name="fullName"
            type="text"
            required
            class="appearance-none relative block w-full px-3 py-3 border border-gray-600 placeholder-gray-400 salon-body-text rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500 focus:z-10 bg-gray-800/50 backdrop-blur-sm transition-all duration-200"
            placeholder="Enter your full name"
            disabled={isLoading}
          />
          {#if form?.form?.errors?.fullName}
            <p class="mt-1 text-sm text-red-400">{form.form.errors.fullName[0]}</p>
          {/if}
        </div>

        <!-- Business Name Field -->
        <div>
          <label for="businessName" class="block text-sm font-medium salon-heading mb-2">
            Business Name
          </label>
          <input
            id="businessName"
            name="businessName"
            type="text"
            required
            class="appearance-none relative block w-full px-3 py-3 border border-gray-600 placeholder-gray-400 salon-body-text rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500 focus:z-10 bg-gray-800/50 backdrop-blur-sm transition-all duration-200"
            placeholder="Enter your salon/business name"
            disabled={isLoading}
          />
          {#if form?.form?.errors?.businessName}
            <p class="mt-1 text-sm text-red-400">{form.form.errors.businessName[0]}</p>
          {/if}
        </div>

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
              bind:value={passwordValue}
              class="appearance-none relative block w-full px-3 py-3 pr-10 border border-gray-600 placeholder-gray-400 salon-body-text rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500 focus:z-10 bg-gray-800/50 backdrop-blur-sm transition-all duration-200"
              placeholder="Create a strong password"
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
          
          <!-- Password Strength Indicator -->
          {#if passwordValue && passwordStrength}
            <p class="mt-1 text-sm" class:text-green-400={passwordStrength === 'Strong password'} class:text-yellow-400={passwordStrength !== 'Strong password' && passwordStrength !== ''}>
              {passwordStrength}
            </p>
          {/if}
          
          {#if form?.form?.errors?.password}
            <p class="mt-1 text-sm text-red-400">{form.form.errors.password[0]}</p>
          {/if}
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
            Creating Account...
          {:else}
            Create Account
          {/if}
        </button>
      </div>

      <!-- Sign In Link -->
      <div class="text-center">
        <p class="salon-text-muted">
          Already have an account?
          <a href="/login" class="font-medium salon-text-warm hover:underline transition-colors duration-200">
            Sign in here
          </a>
        </p>
      </div>
    </form>
  </div>
</div>

