# PrintCraft Design Studio

A modern, full-stack web application for creating and printing custom designs including banners, leaflets, and posters. Built with React, TypeScript, and Express.js.

![PrintCraft Design Studio](https://img.shields.io/badge/PrintCraft-Design%20Studio-blue?style=for-the-badge)
![Version](https://img.shields.io/badge/version-1.0.0-green?style=for-the-badge)
![License](https://img.shields.io/badge/license-MIT-orange?style=for-the-badge)

## ✨ Features

- 🎨 **AI-Powered Design Creation** - Input your ideas and generate professional designs instantly
- 🖼️ **Professional Templates** - Extensive library of templates for banners, leaflets, and posters  
- ⚡ **Real-time Design Canvas** - Live preview with instant updates as you customize
- 🎯 **Intuitive Editor** - Drag-and-drop interface with advanced customization tools
- 🌈 **Advanced Styling** - Color palettes, typography controls, and visual effects
- 📱 **Responsive Design** - Works seamlessly across desktop, tablet, and mobile devices
- ✨ **Beautiful Animations** - Smooth transitions and interactive UI elements
- 🖨️ **Print-Ready Output** - Generate high-resolution PDFs ready for professional printing
- 📦 **Order Management** - Complete print ordering and fulfillment system

## 🚀 Live Demo

[View Live Demo](https://printcraft-design-studio.vercel.app) _(Coming Soon)_

## 🛠️ Tech Stack

### Frontend
- **React 18** with TypeScript for type-safe development
- **Vite** for lightning-fast development and optimized builds
- **Tailwind CSS** with shadcn/ui component library for modern styling
- **Framer Motion** for smooth animations and transitions

### Backend
- **Node.js** with Express.js framework
- **TypeScript** for full-stack type safety
- **RESTful API** design with comprehensive error handling
- **Session-based authentication** (ready for implementation)

### Development
- **ESBuild** for fast JavaScript bundling
- **PostCSS** with Autoprefixer for CSS processing
- **TypeScript** compilation with strict type checking
- **Hot Module Replacement** for instant development feedback

## 📦 Installation

### Prerequisites
- Node.js 18.x or higher
- npm or yarn package manager
- PostgreSQL database (optional - defaults to in-memory storage)

### Quick Start

```bash
# Clone the repository
git clone https://github.com/yourusername/printcraft-design-studio.git
cd printcraft-design-studio

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:5000](http://localhost:5000) to view the application.

### Environment Setup (Optional)

Create a `.env` file in the root directory:

```env
NODE_ENV=development
PORT=5000
DATABASE_URL=postgresql://username:password@localhost:5432/printcraft
```

## 🏗️ Project Structure

```
printcraft-design-studio/
├── 📁 client/                 # Frontend React application
│   ├── 📁 src/
│   │   ├── 📁 components/     # Reusable UI components
│   │   │   ├── 📁 design/     # Design-specific components
│   │   │   ├── 📁 layout/     # Layout components
│   │   │   └── 📁 ui/         # shadcn/ui components
│   │   ├── 📁 pages/          # Page components
│   │   ├── 📁 hooks/          # Custom React hooks
│   │   ├── 📁 lib/            # Utility functions
│   │   └── 📄 index.css       # Global styles and animations
│   └── 📄 index.html          # HTML entry point
├── 📁 server/                 # Backend Express application
│   ├── 📄 index.ts           # Server entry point
│   ├── 📄 routes.ts          # API route definitions
│   ├── 📄 storage.ts         # Data storage layer
│   └── 📄 vite.ts            # Vite development middleware
├── 📁 shared/                # Shared TypeScript types
│   └── 📄 schema.ts          # Database schema and validation
└── 📄 package.json           # Project configuration
```

## 🎯 API Endpoints

### Templates
```http
GET    /api/templates              # Get all templates
GET    /api/templates?category=X   # Filter by category
GET    /api/templates/:id          # Get specific template
```

### Designs  
```http
POST   /api/designs               # Create new design
GET    /api/designs               # Get all user designs
GET    /api/designs/:id           # Get specific design
PUT    /api/designs/:id           # Update design
DELETE /api/designs/:id           # Delete design
POST   /api/designs/:id/pdf       # Generate PDF
```

### Print Orders
```http
POST   /api/print-orders          # Create print order
GET    /api/print-orders          # Get order history
GET    /api/print-orders/:id      # Get order details
```

## 🎨 Features Showcase

### Template Gallery
- Categorized templates (banners, leaflets, posters)
- Hover effects with smooth animations
- One-click template selection
- Special paper airplane animation on featured templates

### Design Studio
- Live canvas with real-time updates
- Advanced color picker and typography controls
- Element positioning and sizing tools
- Undo/redo functionality
- Export to high-resolution PDF

### Interactive Animations
- Gradient-animated hero section
- Paper airplane transformation effects
- Smooth slide-in and bounce animations
- 3D hover effects and card tilts
- Glowing buttons and pulsing elements

## 🚀 Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm start        # Start production server
npm run check    # TypeScript type checking
npm run preview  # Preview production build
```

## 🌐 Deployment

### Vercel (Recommended)
1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel` in project directory
3. Follow the prompts to deploy

### Other Platforms
- **Netlify**: Connect your GitHub repository
- **Railway**: Import from GitHub with auto-deploy
- **Render**: Connect repository with build command `npm run build`
- **Heroku**: Use Node.js buildpack with start script

### Environment Variables for Production
```env
NODE_ENV=production
DATABASE_URL=your_production_database_url
PORT=3000
```

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Commit your changes: `git commit -am 'Add new feature'`
4. Push to the branch: `git push origin feature-name`
5. Submit a pull request

### Development Guidelines
- Follow TypeScript best practices
- Use Tailwind CSS for styling
- Write descriptive commit messages
- Add tests for new features
- Update documentation as needed

## 🙏 Acknowledgments

- [shadcn/ui](https://ui.shadcn.com/) for the beautiful component library
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework
- [Lucide React](https://lucide.dev/) for the icon library
- [Unsplash](https://unsplash.com/) for template preview images

## 📧 Contact

For questions, suggestions, or support:
- Create an issue in this repository
- Email: [your-email@example.com](mailto:your-email@example.com)

---

<div align="center">
  <p>Built with ❤️ for designers and print enthusiasts by Me</p>
  <p>⭐ Star this repository if you find it helpful!</p>
</div>
