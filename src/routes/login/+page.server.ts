import { fail, redirect } from '@sveltejs/kit';
import { superValidate } from 'sveltekit-superforms';
import { zod } from 'sveltekit-superforms/adapters';
import { loginSchema } from '$lib/utils/validation';
import { loginUser } from '$lib/utils/auth';
import type { Actions } from './$types';

export const actions: Actions = {
	default: async ({ request }) => {
		const form = await superValidate(request, zod(loginSchema));

		if (!form.valid) {
			return fail(400, { form });
		}

		try {
			const result = await loginUser(form.data);
			
			if (result.error) {
				return fail(400, {
					form,
					error: result.error
				});
			}

			// Successful login - redirect to dashboard
			throw redirect(303, '/dashboard');
		} catch (error) {
			// If it's a redirect, re-throw it
			if (error instanceof Response) {
				throw error;
			}

			// Handle other errors
			console.error('Login error:', error);
			return fail(500, {
				form,
				error: 'An unexpected error occurred. Please try again.'
			});
		}
	}
};

