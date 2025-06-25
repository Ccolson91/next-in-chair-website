<script lang="ts">
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';
	import { supabase } from '$lib/utils/supabase';
	import type { User } from '@supabase/supabase-js';

	let user: User | null = null;
	let loading = true;

	onMount(async () => {
		// Check if user is authenticated
		const { data: { user: currentUser } } = await supabase.auth.getUser();
		
		if (!currentUser) {
			// Redirect to home if not authenticated
			goto('/');
			return;
		}

		user = currentUser;
		loading = false;
	});
</script>

<svelte:head>
	<title>Dashboard - Next In Chair</title>
	<meta name="description" content="Your Next In Chair dashboard - manage your salon's marketing system" />
</svelte:head>

{#if loading}
	<div class="min-h-screen bg-black flex items-center justify-center">
		<div class="text-center">
			<div class="animate-spin rounded-full h-12 w-12 border-b-2 border-pink-500 mx-auto mb-4"></div>
			<p class="text-white">Loading your dashboard...</p>
		</div>
	</div>
{:else if user}
	<div class="min-h-screen bg-black">
		<!-- Header -->
		<header class="bg-gray-900 border-b border-gray-800">
			<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div class="flex justify-between items-center h-16">
					<div class="flex items-center">
						<img src="/NIC_Logo.png" alt="Next In Chair" class="h-8 w-auto" />
						<span class="ml-3 text-xl font-semibold text-white">Dashboard</span>
					</div>
					<div class="flex items-center space-x-4">
						<span class="text-gray-300">Welcome back!</span>
						<button 
							on:click={() => supabase.auth.signOut().then(() => goto('/'))}
							class="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors"
						>
							Sign Out
						</button>
					</div>
				</div>
			</div>
		</header>

		<!-- Main Content -->
		<main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
			<div class="mb-8">
				<h1 class="text-3xl font-bold text-white mb-2">Your Marketing System</h1>
				<p class="text-gray-400">Manage your salon's automated marketing tools and campaigns</p>
			</div>

			<!-- Dashboard Cards -->
			<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
				<!-- Website Card -->
				<div class="bg-gray-900 rounded-lg p-6 border border-gray-800">
					<div class="flex items-center mb-4">
						<div class="bg-pink-500 rounded-lg p-2">
							<svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9"></path>
							</svg>
						</div>
						<h3 class="ml-3 text-lg font-semibold text-white">Your Website</h3>
					</div>
					<p class="text-gray-400 mb-4">Your professional salon website is ready to launch</p>
					<button class="w-full bg-pink-600 hover:bg-pink-700 text-white py-2 px-4 rounded-md font-medium transition-colors">
						Launch Website
					</button>
				</div>

				<!-- Email Campaigns Card -->
				<div class="bg-gray-900 rounded-lg p-6 border border-gray-800">
					<div class="flex items-center mb-4">
						<div class="bg-purple-500 rounded-lg p-2">
							<svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
							</svg>
						</div>
						<h3 class="ml-3 text-lg font-semibold text-white">Email Campaigns</h3>
					</div>
					<p class="text-gray-400 mb-4">Automated email sequences to retain clients</p>
					<button class="w-full bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded-md font-medium transition-colors">
						View Campaigns
					</button>
				</div>

				<!-- Analytics Card -->
				<div class="bg-gray-900 rounded-lg p-6 border border-gray-800">
					<div class="flex items-center mb-4">
						<div class="bg-green-500 rounded-lg p-2">
							<svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
							</svg>
						</div>
						<h3 class="ml-3 text-lg font-semibold text-white">Analytics</h3>
					</div>
					<p class="text-gray-400 mb-4">Track your marketing performance and ROI</p>
					<button class="w-full bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-md font-medium transition-colors">
						View Analytics
					</button>
				</div>
			</div>

			<!-- Quick Stats -->
			<div class="bg-gray-900 rounded-lg p-6 border border-gray-800">
				<h2 class="text-xl font-semibold text-white mb-4">Quick Stats</h2>
				<div class="grid grid-cols-1 md:grid-cols-4 gap-4">
					<div class="text-center">
						<div class="text-2xl font-bold text-pink-500">0</div>
						<div class="text-gray-400 text-sm">New Clients This Month</div>
					</div>
					<div class="text-center">
						<div class="text-2xl font-bold text-purple-500">0</div>
						<div class="text-gray-400 text-sm">Email Opens</div>
					</div>
					<div class="text-center">
						<div class="text-2xl font-bold text-green-500">0</div>
						<div class="text-gray-400 text-sm">Website Visits</div>
					</div>
					<div class="text-center">
						<div class="text-2xl font-bold text-yellow-500">$0</div>
						<div class="text-gray-400 text-sm">Revenue Generated</div>
					</div>
				</div>
			</div>
		</main>
	</div>
{/if}

