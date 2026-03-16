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

## PRICING AND PRODUCT DATA - CRITICAL
All product prices, cart URLs, info URLs, schema data, features, and FAQs live in ONE place only: `src/site.config.json` under the `products` array.

NEVER hardcode prices, cart links, or product data anywhere else. NEVER update a product page file directly to change a price.

If asked to update a price or cart link:
1. Read `src/site.config.json` first
2. Update ONLY the relevant field in the `products` array
3. The `[product].astro` template reads from config at build time - all pages update automatically
4. The Product schema (JSON-LD) is also generated from config - it stays in sync automatically

Cart URL format:
- Direct purchase: `https://www.voicerecognition.com.au/cart/add?id=VARIANT_ID&quantity=1`
- Subscription with selling plan: `https://www.voicerecognition.com.au/cart/add?id=VARIANT_ID&selling_plan=PLAN_ID&quantity=1`

Known variant IDs (verify on VRA before using):
- Dragon Pro 16 perpetual: 44931726508278
- Dragon Pro 16 upgrade: 44931746595062
- Dragon Pro 16 subscription: 46140825338102 (selling_plan: 7531921654)
- Dragon Pro 16 student: 47759915122934
- Enterprise: enquiry page only, no cart
