# Lighting Factory Outlet Online - Setup Guide

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ and npm
- Git

### Installation

1. **Install Dependencies**
```bash
npm install
```

2. **Run Development Server**
```bash
npm run dev
```

3. **Open Browser**
Navigate to [http://localhost:3000](http://localhost:3000)

---

## 📁 Project Structure

```
testshopping/
├── app/                    # Next.js App Router pages
│   ├── layout.tsx         # Root layout with header/footer
│   ├── page.tsx           # Homepage
│   ├── products/          # Product pages
│   │   └── page.tsx
│   └── pro/               # PRO program pages
│       └── page.tsx
├── components/            # React components
│   ├── home/             # Homepage sections
│   │   ├── HeroSection.tsx
│   │   ├── LightingPoolSection.tsx
│   │   ├── FactoryClearanceSection.tsx
│   │   ├── FactoryStory.tsx
│   │   ├── ShopByUseSection.tsx
│   │   ├── ProProgramCTA.tsx
│   │   └── TrustSignals.tsx
│   ├── layout/           # Layout components
│   │   ├── Header.tsx
│   │   └── Footer.tsx
│   ├── pool/             # Pool-related components
│   │   └── PoolCard.tsx
│   ├── clearance/        # Clearance components
│   │   └── ClearanceCard.tsx
│   ├── products/         # Product components
│   │   ├── ProductCard.tsx
│   │   ├── ProductGrid.tsx
│   │   └── ProductFilters.tsx
│   └── shared/           # Shared components
│       └── SavingsCalculator.tsx
├── types/                # TypeScript type definitions
│   └── index.ts
├── public/               # Static assets
├── tailwind.config.ts    # Tailwind CSS configuration
├── next.config.js        # Next.js configuration
└── package.json          # Project dependencies
```

---

## 🎨 Key Features Implemented

### ✅ Phase 1 (MVP) - COMPLETED

1. **Factory Branding**
   - Savings Calculator widget with animated counters
   - Factory price badges on all products
   - Transparent pricing breakdown (Retail → Contractor → Factory)
   - "Why We're Cheaper" explanations

2. **Lighting Pool System**
   - Pool cards with real-time progress bars
   - Participant avatars and counters
   - Time remaining indicators
   - Join Pool vs Buy Now options
   - Mock real-time updates (ready for WebSocket integration)

3. **Weekly Factory Clearance**
   - Countdown timers
   - Reason badges (Surplus, Design Change, Project Surplus)
   - Stock level indicators
   - Urgency messaging

4. **PRO Program**
   - Two-tier system (Electrician & Business)
   - Benefits showcase
   - Pricing comparison
   - Registration CTAs

5. **Product Catalog**
   - Product grid with filters
   - Product cards with transparent pricing
   - Category browsing
   - Wishlist functionality

6. **Homepage Sections**
   - Hero with factory messaging
   - Active pools showcase
   - Factory clearance section
   - Factory story/transparency
   - Shop by use case
   - PRO program CTA
   - Trust signals & certifications

---

## 🔧 Configuration

### Tailwind CSS Custom Colors

```javascript
colors: {
  factory: {
    orange: '#FF6B35',    // Primary brand color
    steel: '#4A5568',     // Secondary
    concrete: '#E2E8F0',  // Backgrounds
    warning: '#F59E0B',   // Alerts
    success: '#10B981',   // Success states
  },
}
```

### Custom Animations

- `counter` - Animated number counting
- `pulse-slow` - Slow pulsing effect
- `pool-progress` - Smooth progress bar transitions

---

## 📋 Next Steps (Phase 2)

### 1. Backend Integration
- [ ] Set up database (PostgreSQL recommended)
- [ ] Create API routes in `app/api/`
- [ ] Implement authentication (NextAuth.js)
- [ ] Real-time WebSocket for pools

### 2. E-commerce Features
- [ ] Shopping cart functionality
- [ ] Checkout process
- [ ] Payment integration (Stripe/Omise)
- [ ] Order management

### 3. PRO Features
- [ ] Registration form with verification
- [ ] Quotation builder
- [ ] Project tracking dashboard
- [ ] Document upload

### 4. Made-to-Project Portal
- [ ] Project submission form
- [ ] File upload (specifications, images)
- [ ] Quote generation
- [ ] Progress tracking

### 5. Smart Features
- [ ] Lighting calculator (lumens/room size)
- [ ] Product comparison tool
- [ ] Wishlist with price alerts
- [ ] AR room visualizer

### 6. Admin Panel
- [ ] Product management
- [ ] Pool management
- [ ] Order processing
- [ ] PRO account approvals
- [ ] Analytics dashboard

---

## 🛠️ Development Commands

```bash
# Development
npm run dev          # Start dev server

# Production
npm run build        # Build for production
npm start            # Start production server

# Linting
npm run lint         # Run ESLint
```

---

## 🎯 API Routes to Create

```
app/api/
├── products/
│   ├── route.ts              # GET all products
│   └── [id]/route.ts         # GET single product
├── pools/
│   ├── route.ts              # GET active pools
│   ├── join/route.ts         # POST join pool
│   └── [id]/route.ts         # GET pool details
├── clearance/
│   └── route.ts              # GET clearance items
├── cart/
│   ├── route.ts              # GET/POST cart
│   └── add/route.ts          # POST add to cart
├── orders/
│   └── route.ts              # GET/POST orders
├── pro/
│   ├── register/route.ts     # POST PRO registration
│   └── verify/route.ts       # POST verification
├── quotations/
│   ├── route.ts              # GET/POST quotations
│   └── [id]/route.ts         # GET/PUT quotation
└── projects/
    ├── route.ts              # GET/POST projects
    └── [id]/route.ts         # GET project details
```

---

## 🔐 Environment Variables

Create `.env.local`:

```env
# Database
DATABASE_URL="postgresql://..."

# Authentication
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="your-secret-key"

# Payment
STRIPE_SECRET_KEY="sk_test_..."
STRIPE_PUBLISHABLE_KEY="pk_test_..."

# Email
SMTP_HOST="smtp.example.com"
SMTP_PORT="587"
SMTP_USER="your-email"
SMTP_PASSWORD="your-password"

# File Upload
AWS_S3_BUCKET="your-bucket"
AWS_ACCESS_KEY_ID="your-key"
AWS_SECRET_ACCESS_KEY="your-secret"

# Real-time
PUSHER_APP_ID="your-app-id"
PUSHER_KEY="your-key"
PUSHER_SECRET="your-secret"
```

---

## 📦 Recommended Additional Packages

```bash
# State Management
npm install zustand

# Forms
npm install react-hook-form zod

# Authentication
npm install next-auth

# Database
npm install prisma @prisma/client
npm install -D prisma

# Real-time
npm install pusher pusher-js

# File Upload
npm install react-dropzone

# Charts
npm install recharts

# Date handling
npm install date-fns

# Icons (already included)
npm install lucide-react
```

---

## 🎨 Design System

### Typography
- **Headings**: Font weight 700 (bold)
- **Body**: Font weight 400 (normal)
- **CTA Buttons**: Font weight 600 (semibold)

### Spacing
- Section padding: `py-16` (4rem)
- Container max-width: `container mx-auto`
- Card padding: `p-6` or `p-8`

### Colors
- **Primary CTA**: `bg-factory-orange`
- **Secondary CTA**: `bg-gray-100`
- **Success**: `bg-green-600`
- **Warning**: `bg-amber-500`
- **Pool**: `bg-blue-600`

---

## 🚢 Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Import project to Vercel
3. Configure environment variables
4. Deploy

```bash
npm install -g vercel
vercel
```

### Docker

```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

---

## 📊 Performance Optimization

- [ ] Image optimization with Next.js Image
- [ ] Lazy loading for product grids
- [ ] CDN for static assets
- [ ] Database query optimization
- [ ] Redis caching for pools
- [ ] Progressive Web App (PWA)

---

## 🧪 Testing

```bash
# Unit tests
npm install -D jest @testing-library/react @testing-library/jest-dom

# E2E tests
npm install -D playwright
```

---

## 📱 Mobile Optimization

All components are built mobile-first with Tailwind's responsive breakpoints:
- `sm:` - 640px+
- `md:` - 768px+
- `lg:` - 1024px+
- `xl:` - 1280px+

---

## 🆘 Support

For issues or questions:
1. Check the component documentation
2. Review the type definitions in `/types`
3. Consult Next.js and Tailwind CSS docs

---

## 📄 License

Proprietary - Lighting Factory Outlet Online
