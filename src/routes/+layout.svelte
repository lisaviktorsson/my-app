<script>
	import '../app.postcss';
	import { AppShell, AppBar } from '@skeletonlabs/skeleton';

	// Highlight JS
	import hljs from 'highlight.js/lib/core';
	import 'highlight.js/styles/github-dark.css';
	import { storeHighlightJs } from '@skeletonlabs/skeleton';
	import xml from 'highlight.js/lib/languages/xml'; // for HTML
	import css from 'highlight.js/lib/languages/css';
	import javascript from 'highlight.js/lib/languages/javascript';
	import typescript from 'highlight.js/lib/languages/typescript';

	hljs.registerLanguage('xml', xml); // for HTML
	hljs.registerLanguage('css', css);
	hljs.registerLanguage('javascript', javascript);
	hljs.registerLanguage('typescript', typescript);
	storeHighlightJs.set(hljs);

	// Floating UI for Popups
	import { computePosition, autoUpdate, flip, shift, offset, arrow } from '@floating-ui/dom';
	import { storePopup } from '@skeletonlabs/skeleton';
	storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow });

	// Dynamic routes
	const routes = import.meta.glob('./**/+page.svelte', { eager: true });
	const navRoutes = Object.keys(routes)
		.map(path => {
			// Extract route name from path: './(routename)/+page.svelte' -> 'routename'
			const match = path.match(/\.\/([^/]+)\/\+page\.svelte/);
			return match ? match[1] : null;
		})
		.filter(route => route !== null)
		.sort();
</script>







<!-- App Shell -->
<AppShell>
	<svelte:fragment slot="header">
		<!-- App Bar -->
		<AppBar>
			<svelte:fragment slot="lead">

				<strong class="text-xl uppercase">Tester</strong>
			</svelte:fragment>
			<svelte:fragment slot="trail">
					{#each navRoutes as route}
		<a class="btn btn-sm variant-ghost-surface"
		
		href="/{route}" >
			{route.charAt(0).toUpperCase() + route.slice(1)}
		</a>
	{/each}
			
			</svelte:fragment>
		</AppBar>
	</svelte:fragment>
	<!-- Page Route Content -->
	<slot />
</AppShell>


<style>
	/* App Shell overrides */
	:global(.app-bar) {
		height: 8vh;

	}
</style>
