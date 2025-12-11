# ⚡ Quick Start Guide

## Get Running in 3 Steps

### 1️⃣ Install Dependencies
```bash
npm install
```

### 2️⃣ Start Development Server
```bash
npm run dev
```

### 3️⃣ Open Browser
Navigate to **[http://localhost:3000](http://localhost:3000)**

---

## 🎉 That's It!

You should now see:
- 🏠 Homepage with all sections
- 🏭 Factory branding and savings calculator
- 👥 Active lighting pools
- 📦 Weekly clearance section
- 💼 PRO program information

---

## 📱 Pages to Explore

| URL | Description |
|-----|-------------|
| `/` | Homepage with all key sections |
| `/products` | Product catalog with filters |
| `/pro` | PRO program details |

---

## 🔧 Common Commands

```bash
# Development
npm run dev          # Start dev server (http://localhost:3000)

# Production
npm run build        # Build for production
npm start            # Start production server

# Code Quality
npm run lint         # Run ESLint
```

---

## 📖 Documentation

- **[README.md](./README.md)** - Full project overview
- **[SETUP.md](./SETUP.md)** - Detailed setup guide
- **[PROJECT_SUMMARY.md](./PROJECT_SUMMARY.md)** - What's been built
- **[ROADMAP.md](./ROADMAP.md)** - Implementation roadmap
- **[DEPLOYMENT.md](./DEPLOYMENT.md)** - Deployment guide
- **[API.md](./API.md)** - API documentation

---

## 🆘 Troubleshooting

### Port Already in Use
```bash
# Kill process on port 3000 (Mac/Linux)
lsof -ti:3000 | xargs kill -9

# Or use different port
npm run dev -- -p 3001
```

### Module Not Found
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

### TypeScript Errors
```bash
# Restart TypeScript server in VS Code
Cmd/Ctrl + Shift + P → "TypeScript: Restart TS Server"
```

---

## 🚀 Next Steps

1. ✅ Browse all pages in your browser
2. ✅ Check responsive design (resize browser)
3. ✅ Review components in `components/` folder
4. ✅ Read [ROADMAP.md](./ROADMAP.md) for Phase 2 tasks
5. ✅ Plan backend integration

---

## 💡 Tips

- Use browser DevTools to inspect components
- All components are in `components/` directory
- Pages are in `app/` directory (App Router)
- TypeScript types are in `types/index.ts`
- Custom styles are in `app/globals.css`

---

**Ready to build the future of factory-direct e-commerce! 🏭✨**
