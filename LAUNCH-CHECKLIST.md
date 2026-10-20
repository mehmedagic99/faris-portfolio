# Launch checklist — Faris portfolio

## Before publishing
- [ ] Add the production domain to `.env.local` and your hosting provider as `NEXT_PUBLIC_SITE_URL=https://your-real-domain.com`. Use your actual domain, not the example.
- [ ] Confirm the free-first-thumbnail offer, prices, delivery estimates, revision policy, project count, client count, and client review wording are all accurate and approved.
- [ ] Check every client name, avatar, subscriber count, and testimonial against the original source. Subscriber counts can change over time.
- [ ] Test the site at 320px, 375px, 390px, 768px, 1024px, and desktop widths.
- [ ] Test the contact modal, email-copy action, WhatsApp link, Fiverr link, menu, category filters, and carousel buttons on touch devices.
- [ ] Run `npm run build` and resolve any warnings/errors before deployment.

## Meta Ads tracking
- [ ] Create or select the Meta Pixel in Events Manager and add its real Pixel ID to the site. No Pixel ID is included in this project because none was supplied.
- [ ] Track `PageView` on page load and `Lead` only after a real enquiry is successfully submitted or the chosen lead action is completed. Do not count a button click as a submitted lead.
- [ ] Use Meta Events Manager's Test Events to verify events before spending on ads. If using a third-party form/email service, connect its successful submission event.
- [ ] Add a privacy notice and consent handling appropriate for your visitors and the tools you use.
- [ ] Use UTM parameters on Meta ad links so visits and leads can be compared by campaign and creative.

## Conversion testing
- [ ] Start with one main offer: “Get your first thumbnail free”. Make sure the ad promises the same thing as the landing page.
- [ ] Track qualified enquiries, not only clicks or page views.
- [ ] After you have enough traffic, test one change at a time (hero headline, CTA wording, offer framing, or form friction) and compare qualified leads.
