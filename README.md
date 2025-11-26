# Design System Documentation Site

A modern, clean documentation site built with Next.js, TypeScript, Tailwind CSS, and shadcn/ui.

## Features

- 📱 Responsive layout with sidebar navigation
- 🌓 Dark mode support with theme toggle
- 📖 Optimized typography for reading documentation
- 🎨 Clean, minimal design focused on content
- ⚡ Built with Next.js App Router for optimal performance

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build

```bash
npm run build
```

### Start Production Server

```bash
npm start
```

## Project Structure

```
.
├── app/
│   ├── layout.tsx          # Root layout with header and sidebar
│   ├── page.tsx            # Home page
│   ├── docs/
│   │   └── page.tsx        # Sample docs page
│   └── globals.css         # Global styles and Tailwind directives
├── components/
│   ├── ui/
│   │   └── button.tsx      # shadcn/ui button component
│   ├── header.tsx          # Top header component
│   ├── sidebar.tsx         # Left sidebar navigation
│   ├── theme-toggle.tsx    # Theme switcher component
│   └── theme-provider.tsx  # Theme provider wrapper
├── lib/
│   └── utils.ts            # Utility functions (cn helper)
├── tailwind.config.ts      # Tailwind configuration
├── components.json          # shadcn/ui configuration
└── package.json
```

## Customization

### Adding New Pages

1. Create a new file in `app/docs/` (or appropriate directory)
2. Add the route to the navigation in `components/sidebar.tsx`

### Styling

- Global styles: `app/globals.css`
- Tailwind config: `tailwind.config.ts`
- Component styles: Use Tailwind classes directly or extend in `globals.css`

### Theme

The theme system uses `next-themes` and CSS variables. Customize colors in `app/globals.css` under the `:root` and `.dark` selectors.

## License

MIT

