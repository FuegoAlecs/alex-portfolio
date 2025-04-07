# Alex Fuego Portfolio

A modern, futuristic Web3 portfolio showcasing my projects, skills, and creative work. Built with Next.js, Three.js, and Tailwind CSS.

## Features

- 🎨 Futuristic Web3 design with dynamic animations
- 🎮 Interactive 3D mascot using Three.js
- 📱 Fully responsive layout
- ⚡ Smooth scroll behavior
- 🎯 Project showcase with filtering
- 📊 Skills visualization
- 📬 Contact form
- 📰 Newsletter subscription

## Tech Stack

- **Framework:** Next.js 14
- **Styling:** Tailwind CSS
- **3D Graphics:** Three.js
- **Animations:** Framer Motion
- **Type Safety:** TypeScript
- **Deployment:** Vercel

## Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/FuegoAlecs/alex-portfolio.git
   ```

2. Install dependencies:
   ```bash
   cd alex-portfolio
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
alex-portfolio/
├── app/
│   └── page.tsx           # Main page component
├── components/
│   ├── Navigation.tsx     # Navigation bar
│   ├── Projects.tsx       # Projects showcase
│   ├── Skills.tsx         # Skills section
│   ├── Contact.tsx        # Contact form
│   ├── Footer.tsx         # Footer section
│   ├── GridBackground.tsx # Background grid
│   └── Mascot.tsx         # 3D mascot
├── public/
│   └── mascot.glb         # 3D model file
└── styles/
    └── globals.css        # Global styles
```

## Customization

1. Update the content in each component to match your information
2. Modify the color scheme in `tailwind.config.ts`
3. Replace the 3D model in `public/mascot.glb` with your own
4. Add your own projects to the `Projects` component
5. Update social media links in the `Footer` component

## Deployment

The portfolio is configured for deployment on Vercel:

1. Push your changes to GitHub
2. Connect your repository to Vercel
3. Deploy with the following settings:
   - Framework Preset: Next.js
   - Build Command: `next build`
   - Output Directory: `.next`

## Contributing

Feel free to submit issues and enhancement requests!

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

- Twitter: [@FuegoAlec](https://twitter.com/FuegoAlec)
- Telegram: [@FuegoAlec](https://t.me/FuegoAlec)
