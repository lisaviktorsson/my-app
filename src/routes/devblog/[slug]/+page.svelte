<!-- src/routes/devblog/[slug]/+page.svelte -->
<script>
	import { onMount } from 'svelte';

	export let data;
	let Content;

	onMount(async () => {
		const module = await import(`../${data.slug}.svx`);
		Content = module.default;
	});
</script>

{#if Content}
	<article>
		<h1>{data.metadata.title}</h1>
		<p><em>{data.metadata.date}</em></p>
		<Content />
	</article>
{:else}
	<p>Loading post...</p>
{/if}
