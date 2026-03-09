# Dragon Professional 16 Australia

Gateway site for Dragon Professional 16 — dragonprofessional16.com.au

Built with Astro, deployed on Cloudflare Pages. Images served from Cloudflare R2.

## TODO before launch
- [ ] Upload logo to `public/logo.png`
- [ ] Add Dragon-specific ActiveCampaign form IDs to `src/site.config.json` form section
- [ ] Confirm Dragon brand hex colours and update `colours` in `src/site.config.json`
- [ ] Run image generator to populate `src/data/image-manifest.json`
- [ ] Add `.github/workflows/generate-images.yml` (copy from astro-gateway-master, set SITE_ID to dragonprofessional16)
- [ ] Set `PUBLIC_R2_BASE` in Cloudflare Pages environment settings
- [ ] Point dragonprofessional16.com.au DNS to Cloudflare Pages

## Cloudflare Pages environment variables
- `PUBLIC_R2_BASE` = `https://pub-c7a09e1ddb7c45e6a38fcdca1e4b6897.r2.dev`

## GitHub Actions secrets required
- `IMAGE_WORKER_URL`
- `R2_PUBLIC_BASE`
- `ADMIN_TOKEN` (if used)
