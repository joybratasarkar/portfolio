# Joybrata Sarkar - Portfolio Website

A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS. Features a clean design, dark mode support, and smooth animations to showcase professional work and skills.

## ✨ Features

- **Responsive Design**: Optimized for all devices (mobile, tablet, desktop)
- **Dark/Light Mode**: Toggle between themes with system preference detection
- **Modern Stack**: Built with Next.js 14, TypeScript, and Tailwind CSS
- **Performance Optimized**: Fast loading with Next.js optimizations
- **SEO Friendly**: Proper meta tags and structured data
- **Smooth Animations**: CSS animations and transitions
- **Contact Form**: Interactive contact form with validation
- **Project Showcase**: Featured projects with filtering capabilities

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📁 Project Structure

```
portfolio/
├── src/
│   ├── app/
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── components/
│   │   ├── About.tsx
│   │   ├── Contact.tsx
│   │   ├── Hero.tsx
│   │   ├── Navigation.tsx
│   │   ├── Projects.tsx
│   │   └── ThemeProvider.tsx
│   └── styles/
│       └── globals.css
├── public/
│   └── manifest.json
├── tailwind.config.js
├── next.config.js
├── tsconfig.json
└── package.json
```

## 🛠️ Built With

- **[Next.js](https://nextjs.org/)** - React framework for production
- **[TypeScript](https://www.typescriptlang.org/)** - Type safety
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS framework
- **[React](https://reactjs.org/)** - UI library

## 📝 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🎨 Customization

### Colors
Update the color scheme in `tailwind.config.js`:

```javascript
theme: {
  extend: {
    colors: {
      primary: {
        // Your custom colors
      }
    }
  }
}
```

### Content
- Update personal information in `src/components/Hero.tsx`
- Modify skills and experience in `src/components/About.tsx`  
- Add your projects in `src/components/Projects.tsx`
- Update contact details in `src/components/Contact.tsx`

### SEO
Update metadata in `src/app/layout.tsx`:

```typescript
export const metadata = {
  title: 'Your Name - Portfolio',
  description: 'Your description',
  // ... other metadata
}
```

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to [Vercel](https://vercel.com)
3. Deploy automatically on every push

### Other Platforms

- **Netlify**: Connect GitHub repo and deploy
- **GitHub Pages**: Use `next export` for static export
- **AWS/DigitalOcean**: Deploy using Docker or static hosting

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Contact

Joybrata Sarkar - [joybrata.sarkar@example.com](mailto:joybrata.sarkar@example.com)

Project Link: [https://github.com/yourusername/portfolio](https://github.com/yourusername/portfolio)

---

⭐ Don't forget to star this repo if you found it helpful!