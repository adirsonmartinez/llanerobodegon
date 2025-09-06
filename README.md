# Llanero Bodegón - Ecommerce Platform

Multi-tenant ecommerce platform with separate applications for customers, administrators, and delivery personnel.

## 🏗️ Architecture

This project uses a **Single Page Application (SPA)** architecture with three distinct applications:

- **Customer App** (`/app`) - Shopping interface for customers
- **Admin App** (`/admin`) - Management dashboard for administrators  
- **Delivery App** (`/delivery`) - Order management for delivery personnel

## 🛠️ Tech Stack

- **Framework**: Next.js 15.5.2 with App Router
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS 4
- **UI Components**: shadcn/ui
- **Icons**: Lucide React
- **Modals**: react-modal-sheet
- **Build**: Turbopack

## 📱 Applications

### Customer App (`/app`)
- **Inicio** - Home view with featured products
- **Buscar** - Product catalog and search  
- **Pedidos** - Order history and tracking
- **Cuenta** - User profile and settings

### Admin App (`/admin`)
- **Dashboard** - Analytics and overview
- **Productos** - Product management
- **Órdenes** - Order management
- **Configuración** - System settings

### Delivery App (`/delivery`)
- **Dashboard** - Delivery overview
- **Entregas** - Active deliveries
- **Mapa** - Route navigation
- **Perfil** - Delivery person profile

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd llanerobodegon

# Install dependencies
npm install

# Run development server
npm run dev
```

### Access Applications

- Customer App: http://localhost:3000/app
- Admin App: http://localhost:3000/admin  
- Delivery App: http://localhost:3000/delivery

## 📁 Project Structure

```
├── app/
│   ├── (app)/app/           # Customer application
│   ├── (admin)/admin/       # Admin application  
│   └── (delivery)/delivery/ # Delivery application
├── components/
│   ├── app/                 # Customer components
│   ├── admin/               # Admin components
│   └── delivery/            # Delivery components
├── lib/                     # Shared utilities
└── public/                  # Static assets
```

## 🔄 GitFlow Workflow

This project follows GitFlow methodology:

- **main** - Production ready code
- **develop** - Integration branch  
- **feature/** - New features
- **release/** - Release preparation
- **hotfix/** - Critical fixes

See [GITFLOW.md](./GITFLOW.md) for detailed commands.

## 🧩 Components

### Navigation Components
- `CustomerNavigation` - Bottom navigation for customer app
- `AdminNavigation` - Bottom navigation for admin app
- `DeliveryNavigation` - Bottom navigation for delivery app

### View Components
Each app has modular view components that render based on navigation state.

## 📦 Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build for production with Turbopack
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## 🎨 UI/UX Principles

- **Mobile-first** design approach
- **SPA navigation** for smooth user experience
- **Consistent UI** across all applications
- **Spanish language** for user interface
- **English code** for maintainability

## 📋 Development Status

- [x] Project structure and routing setup
- [x] Three SPA applications with navigation
- [x] shadcn/ui component library integration
- [x] GitFlow workflow configuration
- [ ] Authentication system
- [ ] Database integration
- [ ] API development  
- [ ] UI/UX design implementation

## 🤝 Contributing

1. Create a feature branch: `git checkout -b feature/feature-name`
2. Make your changes
3. Commit with conventional commits
4. Push and create a Pull Request

## 📄 License

This project is private and proprietary.
