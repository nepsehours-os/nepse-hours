# NEPSE HOURS – Global Market AI

Autonomous financial intelligence engine. Live NEPSE, S&P500, and crypto predictions.  
No human intervention, no ads, no login. Fastest on 2G.

## Deploy

1. Push to `main` branch on GitHub.
2. Set up Cloudflare Worker with `worker/index.js`.
3. Add secrets: `ALPHA_VANTAGE_KEY`, `TELEGRAM_BOT_TOKEN`, `TELEGRAM_CHAT_ID`, `FB_PAGE_ACCESS_TOKEN`, `FB_PAGE_ID`.
4. Enable GitHub Pages (branch `gh-pages` or `main`).
5. Replace Worker URL in `src/index.html`.
