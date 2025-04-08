// src/routes/devblog/+page.server.js
export async function load() {
	const postFiles = import.meta.glob('./*.svx');
	const entries = Object.entries(postFiles);

	const posts = await Promise.all(
		entries.map(async ([path, resolver]) => {
			const { metadata } = await resolver();
			const slug = path.split('/').pop().replace('.svx', '');
			return { slug, ...metadata };
		})
	);

	posts.sort((a, b) => new Date(b.date) - new Date(a.date)); // optional

	return { posts };
}
