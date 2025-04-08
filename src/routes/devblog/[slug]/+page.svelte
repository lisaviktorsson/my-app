<!-- src/routes/devblog/[slug]/+page.svelte -->
<script>
	import { onMount } from 'svelte';
	import { error } from '@sveltejs/kit';

	export let data;
	let Content;

	onMount(async () => {
		try {
			const module = await import(`../${data.slug}.svx`);
			Content = module.default;
		} catch (err) {
			throw error(500, 'Failed to load post');
		}
	});
</script>

<svelte:head>
	<title>{data.metadata.title}</title>
</svelte:head>

{#if Content}
	<article>
		<h1>{data.metadata.title}</h1>
		<p><em>{data.metadata.date}</em></p>
		<Content />
	</article>
{:else}
	<p>Loading post...</p>
{/if}
