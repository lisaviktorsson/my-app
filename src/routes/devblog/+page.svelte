<!-- src/routes/devblog/+page.svelte -->
<script>
	export let data;
	const { posts } = data;
</script>

<h1>Devblog</h1>

<ul>
	{#each posts as post}
		<li>
			<a href={`/devblog/${post.slug}`}>
				<strong>{post.title}</strong> — {post.date}
			</a>
		</li>
	{/each}
</ul>
