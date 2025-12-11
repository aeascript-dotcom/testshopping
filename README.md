# 🏭 Lighting Factory Outlet Online

> Direct-from-factory lighting marketplace eliminating middlemen with transparent factory pricing

[![Next.js](https://img.shields.io/badge/Next.js-15-black)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.7-blue)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38bdf8)](https://tailwindcss.com/)

## 🌟 Overview

A modern, conversion-optimized e-commerce web application built for "Lighting Factory Outlet Online" - a Thai factory outlet that brings transparent factory pricing directly to retail customers and trade professionals.

### 🎯 Core Concept

Think **IKEA Outlet + Factory Direct Model** for lighting:
- Direct factory prices without intermediary markups
- Group-buying pools for volume discounts
- Transparent cost breakdowns
- Professional trade programs
- Made-to-order project services

---

## ✨ Key Features

### 🏭 Factory-Direct Branding
- **Savings Calculator**: Real-time animated display showing retail vs factory pricing
- **Price Transparency**: Full breakdown (Retail → Contractor → Factory)
- **Factory Badges**: Visual indicators on all products
- **Trust Signals**: Certifications, warranties, and customer reviews

### 👥 Lighting Pool (Group-Buying)
- Collaborative purchasing to unlock volume pricing
- Real-time progress bars and participant counters
- Tiered pricing (e.g., 6, 12, 24 unit thresholds)
- 24-72 hour pool windows
- Join pool or buy immediately options

### 📦 Weekly Factory Clearance
- Storytelling approach to overstock sales
- Countdown timers for urgency
- Reason badges (Production Surplus, Design Update, Project Surplus)
- Limited quantity indicators

### 💼 PRO Trade Program
**Two Tiers:**
1. **PRO Electrician** - Individual contractors (10% extra discount)
2. **PRO Business** - Companies & project managers (15% extra discount)

**Benefits:**
- Instant quotation builder
- Project tracking dashboard
- Flexible delivery scheduling
- Extended payment terms (NET 15/30)
- Dedicated account managers

### 🏗️ Made-to-Project Service
- Custom project submissions
- Bulk order quotations
- Project specification uploads
- Timeline and budget planning

---

## 🛠️ Tech Stack

| Layer | Technology |
|-------|-----------|
| **Framework** | Next.js 15 (App Router) |
| **Language** | TypeScript 5.7 |
| **Styling** | Tailwind CSS 3.4 |
| **Icons** | Lucide React |
| **Deployment** | Vercel (recommended) |

### Future Integrations
- **Database**: PostgreSQL with Prisma
- **Auth**: NextAuth.js
- **Real-time**: Pusher or Socket.io for pool updates
- **Payment**: Stripe or Omise (Thai payment gateway)
- **File Upload**: AWS S3 or Cloudinary

---

## 🚀 Quick Start

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Open browser
# Navigate to http://localhost:3000
```

### Build for Production

```bash
npm run build
npm start
```

---

## 📁 Project Structure

```
testshopping/
├── app/                          # Next.js App Router
│   ├── layout.tsx               # Root layout (Header + Footer)
│   ├── page.tsx                 # Homepage
│   ├── products/page.tsx        # Product catalog
│   ├── pro/page.tsx             # PRO program
│   └── globals.css              # Global styles
├── components/
│   ├── home/                    # Homepage sections
│   │   ├── HeroSection.tsx
│   │   ├── LightingPoolSection.tsx
│   │   ├── FactoryClearanceSection.tsx
│   │   └── ...
│   ├── layout/                  # Layout components
│   │   ├── Header.tsx
│   │   └── Footer.tsx
│   ├── pool/                    # Pool components
│   ├── clearance/               # Clearance components
│   ├── products/                # Product components
│   └── shared/                  # Shared components
├── types/index.ts               # TypeScript definitions
├── tailwind.config.ts           # Tailwind configuration
└── SETUP.md                     # Detailed setup guide
```

---

## 🎨 Design Highlights

### Visual Identity
- **Primary Color**: Factory Orange (`#FF6B35`)
- **Typography**: Inter font family
- **Aesthetic**: Industrial-modern (Costco meets Apple Store)

### Custom Animations
- Animated savings counters
- Smooth pool progress bars
- Hover effects on product cards
- Pulsing badges for urgency

### Mobile-First Responsive
- Touch-friendly interactions
- Collapsible mobile menu
- Optimized card layouts
- Progressive enhancement

---

## 📊 Implementation Status

### ✅ Phase 1 (MVP) - COMPLETED

- [x] Factory branding and savings calculator
- [x] Homepage with all key sections
- [x] Lighting Pool system UI
- [x] Weekly factory clearance section
- [x] PRO program pages
- [x] Product catalog with filters
- [x] Transparent pricing displays
- [x] Responsive design
- [x] Trust signals and testimonials

### 🔄 Phase 2 (In Progress)

- [ ] Backend API routes
- [ ] Database schema and integration
- [ ] Shopping cart functionality
- [ ] User authentication
- [ ] Checkout and payment processing
- [ ] Real-time WebSocket for pools
- [ ] PRO registration and verification
- [ ] Quotation builder
- [ ] Made-to-project portal

### 🔮 Phase 3 (Future)

- [ ] Advanced AR room visualizer
- [ ] Lighting calculator tool
- [ ] Product comparison feature
- [ ] Admin dashboard
- [ ] Analytics and reporting
- [ ] Email/SMS notifications
- [ ] Mobile app (React Native)
- [ ] Multi-language support

---

## 💡 Unique Selling Points

1. **Price Transparency**: Full cost breakdown showing exactly why prices are lower
2. **Group-Buying Pools**: Innovative collaborative purchasing model
3. **Storytelling Sales**: Factory clearance with authentic backstories
4. **PRO Program**: Comprehensive tools for trade professionals
5. **Factory Trust**: Direct connection to manufacturing source

---

## 🎯 Target Audience

| Segment | Description | Key Features |
|---------|-------------|--------------|
| **Retail Customers** | Homeowners seeking value | Pools, Clearance, Savings Calculator |
| **Electricians** | Individual contractors | PRO Electrician tier, Quotation tools |
| **Contractors** | Construction companies | PRO Business tier, Project tracking |
| **Business Buyers** | Hotels, restaurants, offices | Bulk orders, Custom projects |

---

## 📈 Conversion Optimization

- **Urgency**: Countdown timers, stock indicators, pool deadlines
- **Social Proof**: Participant avatars, testimonials, review counts
- **Value Communication**: Savings calculator on every page
- **Trust Building**: Factory tours, certifications, warranties
- **Easy Actions**: Sticky CTAs, one-click pool joining

---

## 🔒 Security & Privacy

- HTTPS encryption
- Secure payment processing
- GDPR-compliant data handling
- User authentication with NextAuth
- Environment variable protection

---

## 📚 Documentation

- **[SETUP.md](./SETUP.md)** - Detailed setup and configuration guide
- **[types/index.ts](./types/index.ts)** - Complete TypeScript definitions
- Component documentation inline in source files

---

## 🤝 Contributing

This is a proprietary project for Lighting Factory Outlet Online.

---

## 📄 License

Proprietary - All rights reserved © 2024 Lighting Factory Outlet Online

---

## 📞 Contact

For business inquiries or technical support:
- **Website**: (Coming soon)
- **Email**: info@lightingfactory.th
- **Phone**: +66 2 XXX XXXX

---

## 🙏 Acknowledgments

Built with:
- [Next.js](https://nextjs.org/) - React framework
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS
- [Lucide](https://lucide.dev/) - Beautiful icons
- [TypeScript](https://www.typescriptlang.org/) - Type safety

---

**Made with ❤️ for transparent factory-direct shopping**