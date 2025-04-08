<!-- src/routes/devblog/+page.svelte -->
<script>
	export let data;
	const { posts } = data;
  import { base } from '$app/paths';

</script>

<h1>Devblog</h1>

<ul>
	{#each posts as post}
		<li>
      <a href={`${base}/devblog/${post.slug}`}>
				<strong>{post.title}</strong> — {post.date}
			</a>
		</li>
	{/each}
</ul>
