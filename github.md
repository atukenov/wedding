repo: atukenov/wedding
branch: main

## Last sync
date: 2026-08-31T01:20:00Z

### Updated in this project
- Scaffolded Next.js 14 App Router site (TypeScript, no CSS framework)
- Built invitation page: hero video slot, countdown, details, dress code, organizers, RSVP
- Added /api/rsvp with optional Telegram delivery
- Design source: Wedding Invite Concepts.dc.html, option 2a

## Screen map
| Screen | Files |
| --- | --- |
| Invitation page | app/page.tsx, app/layout.tsx, app/globals.css |
| Hero + video slot | components/Hero.tsx, lib/wedding.ts |
| Countdown | components/Countdown.tsx |
| Details / dress code / organizers | components/Details.tsx, components/DressCode.tsx, components/Organizers.tsx |
| RSVP form + endpoint | components/Rsvp.tsx, app/api/rsvp/route.ts |
