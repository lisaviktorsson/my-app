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
	preprocess: [preprocess(), vitePreprocess(), ],

	kit: {
		adapter: adapter({
			pages: 'docs',
			assets: 'docs',
		}),
		
		
	},prerender: {
			default: true
	},
	vitePlugin: {
		
			inspector: {
				toggleKeyCombo: 'meta-shift',
				holdMode: true,
				showToggleButton: 'always',
				toggleButtonPos: 'bottom-right'
			}
		
	},

	extensions: ['.svelte', '.md', '.svx'],
	remarkPlugins: [
		[
			remarkGithub,
			{
				// Use your own repository
				repository: 'https://github.com/williamviktorsson/williamviktorsson.github.io.git'
			}
		],
		remarkAbbr
	],
	rehypePlugins: [
		rehypeSlug,
		[
			rehypeAutolinkHeadings,
			{
				behavior: 'wrap'
			}
		]
	]

};

export default config;

