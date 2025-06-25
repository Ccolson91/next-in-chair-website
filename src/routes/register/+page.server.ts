import { fail, redirect } from '@sveltejs/kit';
import { superValidate } from 'sveltekit-superforms';
import { zod } from 'sveltekit-superforms/adapters';
import { registrationSchema } from '$lib/utils/validation';
import { registerUser } from '$lib/utils/auth';
import type { Actions } from './$types';

export const actions: Actions = {
	default: async ({ request }) => {
		console.log('Registration action called');
		
		const form = await superValidate(request, zod(registrationSchema));
		console.log('Form validation result:', form.valid, form.data);

		if (!form.valid) {
			console.log('Form validation failed:', form.errors);
			return fail(400, { form });
		}

		try {
			console.log('Attempting to register user with data:', form.data);
			const result = await registerUser(form.data);
			console.log('Registration result:', result);
			
			if (result.error) {
				console.log('Registration failed with error:', result.error);
				return fail(400, {
					form,
					error: result.error
				});
			}

			console.log('Registration successful, redirecting to dashboard');
			// Successful registration - redirect to dashboard
			throw redirect(303, '/dashboard');
		} catch (error) {
			// If it's a redirect, re-throw it
			if (error instanceof Response) {
				console.log('Throwing redirect response');
				throw error;
			}

			// Handle other errors
			console.error('Registration error:', error);
			return fail(500, {
				form,
				error: 'An unexpected error occurred. Please try again.'
			});
		}
	}
};

