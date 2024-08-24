import { defineConfig } from 'astro/config';

{
  site: 'https://colinthedev.github.io/astro-snipcart-demo/';
}
{
  base: '/root'; // '/root'
}


// https://astro.build/config
export default defineConfig({
	image: {
		domains: ["astro.build"],
	}
});