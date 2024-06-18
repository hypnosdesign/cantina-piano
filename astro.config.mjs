import { defineConfig } from 'astro/config';

//https://www.npmjs.com/package/astro-purgecss
import purgecss from "astro-purgecss";

// https://astro.build/config
export default defineConfig({
  integrations: [
    purgecss({
      variables: true,
      keyframes: false, 
      safelist: {
        greedy: [/*astro*/]
      },
      content: [
        process.cwd() + '/src/**/*.{astro}' // Watching astro and vue sources (for SSR, read the note below)
      ],
    })
  ]
});