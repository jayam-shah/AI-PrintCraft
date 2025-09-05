# PrintCraft Design Studio

A professional web application for creating and printing custom designs including banners, leaflets, and posters. The application features an intuitive design studio where users can start with professionally crafted templates or create from scratch, customize their designs with advanced controls, and place print orders. Built with modern React frontend using TypeScript, Express.js backend, and PostgreSQL database with Drizzle ORM.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Framework**: React 18 with TypeScript and Vite for fast development and building
- **Routing**: Wouter for lightweight client-side routing
- **UI Framework**: Tailwind CSS with shadcn/ui component library for consistent, accessible design
- **State Management**: TanStack Query (React Query) for server state management with optimistic updates
- **Forms**: React Hook Form with Zod validation for type-safe form handling
- **Build Tool**: Vite with custom configuration for development and production builds

## Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **API Design**: RESTful API with clear endpoint structure (/api/templates, /api/designs, /api/print-orders)
- **Database Integration**: Drizzle ORM with PostgreSQL for type-safe database operations
- **Development Setup**: Hot reload in development with Vite middleware integration
- **Error Handling**: Centralized error handling middleware with proper HTTP status codes

## Data Storage Solutions
- **Primary Database**: PostgreSQL with Drizzle ORM for schema management and migrations
- **Schema Design**: 
  - Templates table for design templates with categories and metadata
  - Designs table for user-created designs with customization data
  - Print orders table for managing print requests and fulfillment
- **Data Validation**: Zod schemas for runtime type checking and API validation
- **Development Fallback**: In-memory storage implementation for development without database setup

## Authentication and Authorization
- **Current State**: Basic structure in place but not fully implemented
- **Session Management**: Express session configuration with PostgreSQL session store
- **Frontend State**: User authentication hooks and components prepared for integration

## Design System and UI Components
- **Component Library**: Comprehensive shadcn/ui components covering forms, navigation, feedback, and layout
- **Theming**: CSS custom properties with support for light/dark themes
- **Typography**: Multiple font families (Inter, DM Sans, Fira Code, Geist Mono) for different use cases
- **Responsive Design**: Mobile-first approach with Tailwind CSS responsive utilities
- **Accessibility**: Radix UI primitives ensure keyboard navigation and screen reader support

## Design Creation Workflow
- **Multi-step Process**: Idea input → Template selection → Design customization → Print ordering
- **Real-time Preview**: Live design canvas that updates as users modify text, colors, and layout
- **Template System**: Categorized templates (banners, leaflets, posters) with predefined layouts
- **Customization Options**: Text editing, color schemes, font selection, and size options

## External Dependencies

### Core Framework Dependencies
- React ecosystem (React 18, React DOM, React Router via Wouter)
- TypeScript for type safety across the entire application
- Vite for development server and production builds

### UI and Styling
- Tailwind CSS for utility-first styling approach
- Radix UI primitives for accessible, unstyled components
- Lucide React for consistent iconography
- Class Variance Authority for component variant management

### Database and Backend
- Neon Database serverless PostgreSQL for scalable database hosting
- Drizzle ORM for type-safe database operations and schema management
- Express.js with standard middleware for HTTP server functionality

### State Management and Data Fetching
- TanStack React Query for server state management and caching
- React Hook Form for performant form handling
- Zod for runtime schema validation

### Development and Build Tools
- ESBuild for fast JavaScript bundling
- PostCSS with Autoprefixer for CSS processing
- TSX for TypeScript execution in development

### Optional Integrations
- Development environment optimization plugins
- Runtime error handling for enhanced debugging experience