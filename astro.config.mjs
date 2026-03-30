import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  output: 'static',
  site: 'https://dragonprofessional16.com.au',
  build: {
    format: 'directory'
  },
  integrations: [sitemap({
    filter: (page) => !page.includes('/404') && !page.includes('/placeholder')
  })]
});
