import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://a1asphaltshreveport.com',
  integrations: [sitemap()],
});
