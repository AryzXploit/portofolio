# Muhammad Arya - Cybersecurity Portfolio

Dark-themed hacker vibes portfolio built with Next.js 14 and Tailwind CSS.

## Features

- 🌙 Dark hacker theme with Matrix rain effect
- 📱 Fully responsive design
- ⚡ Static export for Netlify deployment
- 📬 Contact form with Discord webhook
- 🔒 Client-side rate limiting (3 messages per hour)
- 🎨 Smooth animations with Framer Motion

## Pages

- **Home** - Hero section with typing animation
- **About** - Personal info and timeline
- **Skills** - Technical skills with progress bars
- **Achievements** - Hall of Fame, CVEs, CTF achievements
- **Contact** - Form with Discord webhook integration

## Setup

1. Install dependencies:
```bash
npm install
```

2. Configure Discord webhook:
```bash
cp .env.example .env.local
# Edit .env.local and add your Discord webhook URL
```

3. Run development server:
```bash
npm run dev
```

4. Build for production:
```bash
npm run build
```

## Discord Webhook Setup

1. Go to your Discord server
2. Server Settings > Integrations > Webhooks
3. Create new webhook
4. Copy webhook URL
5. Add to `.env.local` as `NEXT_PUBLIC_DISCORD_WEBHOOK`

## Deploy to Netlify

### Option 1: Netlify CLI
```bash
npm install -g netlify-cli
netlify login
netlify init
netlify deploy --prod
```

### Option 2: Git Integration
1. Push to GitHub
2. Connect repo to Netlify
3. Set environment variable `NEXT_PUBLIC_DISCORD_WEBHOOK`
4. Deploy!

## Tech Stack

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- Framer Motion
- Lucide Icons

## License

MIT
