# ChainSquad GmbH Website

Professional landing page for ChainSquad GmbH - German technology consultancy specializing in Web3, blockchain, and AI development.

## Features

- **Light Theme**: Professional, clean design with light theme as default
- **Dark Mode**: Toggle between light and dark themes
- **Responsive Design**: Fully responsive across all devices
- **Modern Stack**: Built with Next.js 16, React 19, and Tailwind CSS v3
- **Professional Colors**: Blue/slate color palette (no Solana colors)
- **Roboto Mono Typography**: Clean, technical font style

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Styling**: Tailwind CSS v3
- **Icons**: Lucide React
- **Language**: TypeScript

## Getting Started

### Installation

```bash
# Install dependencies
npm install
```

### Development

```bash
# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

```bash
# Build for production
npm run build

# Start production server
npm start
```

## Project Structure

```
chainsquad-website/
├── src/
│   ├── app/
│   │   ├── globals.css       # Global styles and theme configuration
│   │   ├── layout.tsx         # Root layout with metadata
│   │   └── page.tsx           # Main landing page
│   └── components/
│       ├── Header.tsx         # Navigation header
│       ├── Footer.tsx         # Site footer
│       └── ThemeToggle.tsx    # Light/dark theme toggle
├── public/                    # Static assets
├── tailwind.config.js         # Tailwind CSS configuration
├── tsconfig.json              # TypeScript configuration
└── next.config.js             # Next.js configuration
```

## Customization

### Colors

The color scheme is defined in `src/app/globals.css`. Currently configured with professional blue/slate tones:

- **Primary**: Blue (221.2°, 83.2%, 53.3%)
- **Background**: Pure white for light mode
- **Text**: Dark gray for readability

To change colors, modify the CSS variables in `:root` (light theme) and `.dark` (dark theme).

### Content

Edit `src/app/page.tsx` to update:

- Hero section text
- About section
- Services offered
- Portfolio projects
- Contact information

### Contact Information

Update the contact details in `src/components/Footer.tsx` and throughout `src/app/page.tsx`.

## Deployment

### GitHub Pages (Recommended)

The site is configured for GitHub Pages deployment with automated workflows.

**Quick Setup:**
1. Create a GitHub repository
2. Push your code
3. Enable GitHub Pages (Settings → Pages → GitHub Actions)
4. Automatic deployment on every push

**Full guide:** See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed instructions.

### Other Platforms

#### Static Export (Any Static Host)

The project is configured for static export. The built files are in the `out/` directory:

```bash
npm run build
# Static files are in out/ directory
```

You can deploy to:
- **Netlify**: Drag and drop the `out/` folder
- **Vercel**: `vercel --prod` (set output directory to `out`)
- **Surge.sh**: `surge out/ your-domain.com`
- **AWS S3/CloudFront**: Upload `out/` to S3 bucket
- **Cloudflare Pages**: Upload `out/` folder

#### Standard Next.js Deployment

For platforms with full Next.js support (Vercel, Netlify with Next.js plugin):

1. Remove `output: 'export'` from `next.config.js`
2. Deploy normally

**Note**: This project is optimized for static export (GitHub Pages, Netlify static, etc.)

## License

ISC

---

**ChainSquad GmbH** - Turning cutting-edge technology into production reality
