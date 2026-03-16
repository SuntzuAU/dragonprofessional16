# Build Rules - Architecture, Deployment, Images

## Astro (non-negotiable)
Static HTML, zero client-side JS. Fast Core Web Vitals = better ranking. No React/Vue.

## Architecture (reference: dragonprofessional16.com.au)
- Self-contained `index.astro`, no separate Nav component
- Content from `src/site.config.json`
- Product subpages: `[product].astro`
- Images from R2 via `PUBLIC_R2_BASE`
- Blog: `src/content/news/` (never `blog/`)

## CSS
Never use `var(--primary)` for background-color on dark sections in `[product].astro`. Use inline styles with frontmatter JS variables.

## Deployment
Cloudflare Pages. Both apex + www as custom domains. `PUBLIC_R2_BASE`: `https://pub-c7a09e1ddb7c45e6a38fcdca1e4b6897.r2.dev`

## Images - NEVER Autonomous
3 per post. Show prompts to owner. Wait for "go". Call Worker. Commit together.
```
POST https://master-image-generator.speech-recognition-cloud.workers.dev/generate
{ "prompt": "...", "name": "seo-slug-here" }
```

## Gotchas
No emoji in site.config.json. YAML needs spaces after colons. push_files can't touch .github/workflows/.
