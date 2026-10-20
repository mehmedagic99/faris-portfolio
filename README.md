# Faris — YouTube Thumbnail Portfolio

A responsive Next.js portfolio for custom YouTube thumbnail design.

## Run locally (important)

This is a Next.js + React app, not a static HTML website. Do not open `app/page.tsx` directly and do not use VS Code Live Server. Those methods do not run React hydration, so buttons, menus, filters, modals, and client-side interactions will not work.

1. Install Node.js LTS from https://nodejs.org/.
2. Open the project folder itself in VS Code.
3. Open Terminal → New Terminal.
4. Run `npm install` and wait for it to finish.
5. Run `npm run dev`.
6. Open the exact local URL printed in the terminal (usually `http://localhost:3000`). Keep the terminal running while testing.

The hero thumbnail animation now moves more noticeably. If all animations still appear disabled, check your operating system/browser accessibility setting for “Reduce motion”; this site respects that preference.

## Before publishing

- Set the final production domain in the site's metadata configuration and add a canonical URL once the domain is known.
- Connect Google Search Console and submit a sitemap for the production domain.
- Add your Meta Pixel ID and configure a conversion event for successful contact clicks/submissions. Do not track a click as a completed lead unless it genuinely represents one.
- Test the live site with PageSpeed Insights on mobile and desktop.
- Publish only genuine client reviews and keep channel names/subscriber counts current.

## Included improvements

- Responsive desktop and mobile navigation.
- Updated dark visual system with blue accents and reduced-motion support.
- WebP image assets and responsive Next.js image sizing.
- SEO title, description, keywords, robots directives, Open Graph and Twitter metadata.
- A generated `/robots.txt` route.
- Removed draft testimonial cards so unapproved review copy is not presented as real client feedback.
