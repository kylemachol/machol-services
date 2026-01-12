# Machol Services Project Rules

## Package Manager
- **Always use `pnpm`** for package management
- Do not use npm or yarn

## Tech Stack
- Next.js 15 (App Router)
- TypeScript
- Tailwind CSS
- Lucide React for icons
- Deploy to Cloudflare Workers

## Brand Colors
- Primary Blue: #0080C6
- Dark Blue: #002A5C
- Yellow: #FFC20E

## Cloudflare Workers Deployment Notes

### Build & Deploy
- Use `@opennextjs/cloudflare` (NOT deprecated `@cloudflare/next-on-pages`)
- `pnpm build:cloudflare` → `pnpm deploy`
- wrangler.jsonc uses Workers format: `main: ".open-next/worker.js"` + `assets`
- NOT Pages format (`pages_build_output_dir`)

### Custom Domain Setup
- Routes in wrangler.jsonc tell Worker to handle domain traffic
- DNS records STILL required: A record `@` → `192.0.2.1` (proxied), CNAME `www` → root (proxied)
- 192.0.2.1 is dummy IP - traffic goes to Worker when proxied (orange cloud)
- API token needs `Zone:DNS:Edit` permission for DNS changes
- Zone ID: `364bda1b719da237f03ea06c38fae6da`

### Wrangler OAuth
- Config at: `~/Library/Preferences/.wrangler/config/default.toml`
- Default scopes only have `zone:read`, not DNS write
