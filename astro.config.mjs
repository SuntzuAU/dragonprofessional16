import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  output: 'static',
  site: 'https://dragonprofessional16.com.au',
  trailingSlash: 'never',
  build: {
    format: 'file'
  },
  integrations: [sitemap({
    filter: (page) => !page.includes('/404') && !page.includes('/placeholder') && !/\/(privacy|terms|dragon-medical-1)\/?$/.test(page)
  })]
});
