# Portfolio Website - Elvina Pramesti

Personal portfolio website for System Analyst position.

## Tech Stack

- Next.js 16 (App Router)
- TypeScript
- Tailwind CSS v4
- Framer Motion
- Lucide React & React Icons
- next-themes (Dark/Light mode)

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Customization

Update personal information in `src/data/site.ts`:
- Email, LinkedIn, GitHub, WhatsApp links
- Resume URL

Add your profile photo in `src/components/sections/about.tsx`

Add certificate URLs in `src/data/certifications.ts`

Place your CV at `public/resume.pdf`

## Deploy to Vercel

```bash
npm run build
```

Push to GitHub and import to [Vercel](https://vercel.com)

## Project Structure

```
src/
├── app/              # Next.js pages & routes
├── components/       # UI components & sections
├── data/             # Content data (projects, skills, etc.)
├── lib/              # Utilities
└── providers/        # Theme provider
```
