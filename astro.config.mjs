import { defineConfig } from 'astro/config';
import image from "@astrojs/image";
{
  site: 'https://colinthedev.github.io/astro-snipcart-demo/';
}
{
  base: '/root'; // '/root'

}


// https://astro.build/config
export default defineConfig({// trailingSlash: 'always'

  integrations: [image()]
});