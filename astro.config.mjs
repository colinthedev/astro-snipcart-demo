import { defineConfig } from 'astro/config';

{
	site: 'https://colinthedev.github.io/astro-snipcart-demo/'
}

{
	base: '/root'
	// '/root'
}

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  integrations: [react()]
});