// src/routes/devblog/[slug]/+page.server.js
import { error } from '@sveltejs/kit';


export const ssr = false;
export const prerender = false;


export async function load({ params }) {
	const modules = import.meta.glob('../*.svx');

	const match = Object.entries(modules).find(([path]) =>
		path.includes(`${params.slug}.svx`)
	);


	const postModule = await match[1]();
  console.log(postModule.metadata);
	return {
		slug: params.slug,
		metadata: postModule.metadata
	};
}
