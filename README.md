# Hosting an Astro + Snipcart site on github pages

#### The reason for hosting this on GH pages is to be able to test/interact with Snipcarts product backend and import products from the frontend by using its fetching functionality.

#### *Also note: Snipcart is not functional threw GH pages due to the API key not being exposed om the frontend for security reasons.

<hr>

Resources:
- [Create a GH Pages](https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site)
- [Deploy Guide](https://docs.astro.build/en/guides/deploy/)



In order to compile i also had to create a .ts file and include this bit of code in the tsconfig.json file:

    {
      "compilerOptions": {
        // Enable top-level await, and other modern ESM features.
        "target": "ESNext",
        "module": "ESNext",
        // Enable node-style module resolution, for things like npm package imports.
        "moduleResolution": "node",
        // Enable JSON imports.
        "resolveJsonModule": true,
        // Enable stricter transpilation for better output.
        "isolatedModules": true,
        // Add type definitions for our Vite runtime.
        "types": ["vite/client"]
      },
      "compileOnSave": false,
      "exclude": [
        "src",
        "wwwroot"
      ],
      "include": [
        "required.ts"
      ]
    }

More specifically the part that was added was the arrays after the first object.

<hr>

### Notes
- When making the GH pages the GH pages branch has to be set to 'gh-pages' not main
- In snipcart backend there are two thins you need to do besides getting your API key:
  - You need to set your domain and sub-domain
  - - ![This is an image](assets/readme/snipcart-domain.png)
  - You need to fetch products from gh pages url
  - - ![This is an image](assets/readme/snipcart-fetch.png)





