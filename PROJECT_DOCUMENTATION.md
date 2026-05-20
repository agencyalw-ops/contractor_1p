# Kontraktor Bangunan - Premium Landing Page

## Project Overview

A premium multi-page landing page for **Kontraktor Bangunan**, a construction company based in Wonosobo, Indonesia. The website features an organic futurist aesthetic with AI-generated imagery, smooth parallax animations, and international design standards.

## Design Philosophy

**Organic Futurist Aesthetic** combining:
- Soft white/gray backgrounds (#F0EFEB)
- Natural moss/stone textures from AI-generated images
- 3D object focal points with CSS animations
- Editorial brutalist typography (Syne + Inter)
- Scroll-based parallax effects throughout
- Muted sage green accent color (#8AB87A)

## Tech Stack

- **Framework**: React 19 with Vite
- **Styling**: Tailwind CSS 4
- **Routing**: Wouter (client-side)
- **Typography**: Syne (display) + Inter (body)
- **Animations**: CSS keyframes + requestAnimationFrame
- **Deployment**: Vercel (configured via vercel.json)

## Project Structure

```
client/
├── src/
│   ├── components/
│   │   ├── Navigation.tsx       # Sticky header with nav links
│   │   ├── Hero.tsx             # Full-screen hero with 3D ring
│   │   ├── Process.tsx          # 3-column process cards
│   │   ├── Ticker.tsx           # Animated marquee section
│   │   ├── About.tsx            # Features + 3D leaf shape
│   │   ├── Stats.tsx            # Counter animations
│   │   ├── Mockup.tsx           # Phone/laptop mockups
│   │   ├── CTA.tsx              # Call-to-action section
│   │   └── Footer.tsx           # Footer with links
│   ├── pages/
│   │   ├── Home.tsx             # Landing page (all sections)
│   │   ├── Services.tsx         # Service offerings
│   │   ├── Projects.tsx         # Portfolio showcase
│   │   ├── About.tsx            # Company information
│   │   ├── Contact.tsx          # Contact form
│   │   └── NotFound.tsx         # 404 page
│   ├── hooks/
│   │   └── useParallax.ts       # Global parallax effect hook
│   ├── config/
│   │   └── content.ts           # Centralized content management
│   ├── App.tsx                  # Main router
│   ├── main.tsx                 # React entry point
│   └── index.css                # Global styles + animations
├── index.html                   # HTML template
└── public/                      # Static assets (favicon, robots.txt)

vercel.json                       # Vercel deployment config
```

## Key Features

### 1. **Centralized Content Management**
All copy, URLs, and CTA buttons are managed in `/client/src/config/content.ts`:
- All external links redirect to `https://alwgen.com`
- Easy to update text, images, and navigation links
- Consistent branding across all pages

### 2. **Parallax System**
Global parallax effects via `useParallax()` hook:
- `data-parallax="0.15"` → slow (background textures)
- `data-parallax="0.35"` → medium (cards, objects)
- `data-parallax="0.55"` → fast (watermark text)
- `data-parallax="-0.2"` → reverse (rises on scroll)

### 3. **AI-Generated Images**
Five high-quality images uploaded to Manus storage:
- `hero_construction.png` - Premium architecture in Wonosobo
- `mossy_rock_1.png` - Close-up moss texture
- `mossy_rock_2.png` - Natural stone with moss
- `nature_strip_1.png` - Vertical tropical plants
- `nature_strip_2.png` - Stone textures with mist

### 4. **Animations**
CSS keyframe animations with smooth transitions:
- `slideUp` - Entrance animation (0.8s)
- `slideLeft` - Feature cards (0.6s staggered)
- `rotate3d` - 3D ring rotation (8s infinite)
- `marquee` - Ticker text scroll (24s)
- `pulse` - Accent dot animation (2s)
- `float` - Subtle hover effect (3s)

### 5. **Responsive Design**
Mobile-first approach with breakpoints:
- Mobile: Full-width with padding
- Tablet (640px): Adjusted spacing
- Desktop (1024px): Max-width container (1280px)

### 6. **Multi-Page Structure**
- **Home** (`/`) - Landing page with all sections
- **Services** (`/services`) - Service offerings
- **Projects** (`/projects`) - Portfolio showcase
- **About** (`/about`) - Company information
- **Contact** (`/contact`) - Contact form

## Color System

| Color | Hex | Usage |
|-------|-----|-------|
| Background Primary | #F0EFEB | Main background |
| Background Card | #FFFFFF | Card backgrounds |
| Background Dark | #1A1A18 | Dark cards, nav |
| Text Primary | #1A1A18 | Headings, body text |
| Text Muted | #6B6A66 | Secondary text |
| Text on Dark | #F0EFEB | Text on dark bg |
| Accent Green | #8AB87A | Logo, highlights |
| Accent Green Dark | #3D6B2E | Hover states |
| Tag Background | #E8EDE4 | Pill tags |
| Border Soft | rgba(26,26,24,0.1) | Subtle borders |

## Typography

| Element | Font | Weight | Size | Usage |
|---------|------|--------|------|-------|
| Hero Title | Syne | 800 | clamp(38px, 7vw, 96px) | Main headlines |
| Sub Heading | Syne | 700 | clamp(18px, 3vw, 32px) | Section titles |
| Body Text | Inter | 400 | 13px | Descriptions |
| Nav Label | Inter | 500 | 12px | Navigation links |
| Card Label | Inter | 500 | 12px | Card titles |

## Development Workflow

### Install Dependencies
```bash
cd /home/ubuntu/kontraktor-bangunan
npm install
```

### Development Server
```bash
npm run dev
# Server runs at http://localhost:3000
```

### Type Checking
```bash
npm run check
```

### Build for Production
```bash
npm run build
# Output: dist/public (for Vercel)
```

### Preview Production Build
```bash
npm run preview
```

## Deployment

### Vercel Configuration
The project includes `vercel.json` with:
- Build command: `npm run build`
- Output directory: `dist/public`
- Framework: Vite
- Rewrites for client-side routing

### Deploy to Vercel
1. Push code to GitHub
2. Connect repository to Vercel
3. Vercel automatically detects `vercel.json`
4. Deploy on every push to main branch

### Custom Domain
1. In Vercel dashboard: Settings → Domains
2. Add custom domain
3. Update DNS records as instructed
4. Domain will be live within 24 hours

## Content Management

### Update Copy
Edit `/client/src/config/content.ts`:
```typescript
export const content = {
  nav: { ... },
  hero: { ... },
  process: { ... },
  // ... all sections
};
```

### Update Images
1. Generate new images with AI
2. Upload via: `manus-upload-file --webdev image.png`
3. Update URLs in `content.ts`

### Update External Links
All CTAs redirect to `https://alwgen.com` (defined in `EXTERNAL_LINK` constant).

To change:
1. Edit `EXTERNAL_LINK` in `/client/src/config/content.ts`
2. All buttons automatically update

## Performance Optimization

### Image Optimization
- AI-generated images optimized for web
- Lazy loading via native browser support
- Responsive images with proper sizing

### Animation Performance
- Only animating `transform` and `opacity` (GPU-accelerated)
- RequestAnimationFrame for smooth parallax
- Intersection Observer for lazy animations

### Bundle Size
- Tree-shaking enabled
- Unused Tailwind classes removed
- Minimal dependencies

## Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (iOS Safari 14+, Chrome Android)

## Accessibility

- Semantic HTML structure
- Proper heading hierarchy
- Color contrast meets WCAG AA
- Keyboard navigation support
- Focus indicators on interactive elements

## SEO

- Meta tags in `index.html`
- Semantic HTML
- Structured content
- Open Graph tags (can be added)
- Sitemap generation (recommended for production)

## Maintenance

### Regular Updates
- Update dependencies: `npm update`
- Check for security vulnerabilities: `npm audit`
- Monitor analytics via Manus dashboard

### Content Updates
- Update copy in `content.ts`
- Replace images via Manus upload
- Test all links before deploying

### Performance Monitoring
- Use Vercel Analytics
- Monitor Core Web Vitals
- Check lighthouse scores

## Support & Resources

- **Vite Documentation**: https://vitejs.dev
- **React Documentation**: https://react.dev
- **Tailwind CSS**: https://tailwindcss.com
- **Wouter Router**: https://github.com/molefrog/wouter

## License

© 2024 Kontraktor Bangunan — All Rights Reserved

---

**Last Updated**: May 2024
**Version**: 1.0.0
**Status**: Production Ready
