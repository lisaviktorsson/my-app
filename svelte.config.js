import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';
import remarkGithub from 'remark-github';
import remarkAbbr from 'remark-abbr';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';


/** @type {import('@sveltejs/kit').Config} */
const config = {

	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: [vitePreprocess(), ],

	kit: {
		adapter: adapter({
			pages: 'docs',
			assets: 'docs',
			fallback: null
		}),
		
		
	},

	extensions: ['.svelte'],
	
	
};

export default config;

