# Deployment Guide - Lighting Factory Outlet Online

## 🚀 Quick Deploy to Vercel (Recommended)

### Prerequisites
- GitHub account
- Vercel account (free tier available)

### Steps

1. **Push Code to GitHub**
```bash
git init
git add .
git commit -m "Initial commit - Lighting Factory MVP"
git branch -M main
git remote add origin https://github.com/yourusername/lighting-factory.git
git push -u origin main
```

2. **Deploy to Vercel**
- Go to [vercel.com](https://vercel.com)
- Click "Add New Project"
- Import your GitHub repository
- Configure project:
  - **Framework Preset**: Next.js
  - **Build Command**: `npm run build`
  - **Output Directory**: `.next`
  - **Install Command**: `npm install`

3. **Environment Variables**
Add these in Vercel dashboard under Settings → Environment Variables:
```
NEXTAUTH_URL=https://your-domain.vercel.app
NEXTAUTH_SECRET=your-generated-secret
DATABASE_URL=your-database-connection-string
# Add all from .env.example
```

4. **Deploy**
- Click "Deploy"
- Wait 2-3 minutes
- Your site will be live at `https://your-project.vercel.app`

---

## 🐳 Docker Deployment

### Dockerfile
```dockerfile
# Use official Node.js image
FROM node:18-alpine AS base

# Install dependencies only when needed
FROM base AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app

# Copy package files
COPY package.json package-lock.json ./
RUN npm ci

# Rebuild the source code only when needed
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Set environment variables
ENV NEXT_TELEMETRY_DISABLED 1

# Build
RUN npm run build

# Production image
FROM base AS runner
WORKDIR /app

ENV NODE_ENV production
ENV NEXT_TELEMETRY_DISABLED 1

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

ENV PORT 3000
ENV HOSTNAME "0.0.0.0"

CMD ["node", "server.js"]
```

### docker-compose.yml
```yaml
version: '3.8'

services:
  app:
    build: .
    ports:
      - "3000:3000"
    environment:
      - NODE_ENV=production
      - DATABASE_URL=${DATABASE_URL}
      - NEXTAUTH_URL=${NEXTAUTH_URL}
      - NEXTAUTH_SECRET=${NEXTAUTH_SECRET}
    depends_on:
      - db
      - redis

  db:
    image: postgres:15-alpine
    environment:
      - POSTGRES_USER=lightingfactory
      - POSTGRES_PASSWORD=${DB_PASSWORD}
      - POSTGRES_DB=lightingfactory
    volumes:
      - postgres_data:/var/lib/postgresql/data
    ports:
      - "5432:5432"

  redis:
    image: redis:7-alpine
    ports:
      - "6379:6379"
    volumes:
      - redis_data:/data

volumes:
  postgres_data:
  redis_data:
```

### Build and Run
```bash
# Build
docker-compose build

# Run
docker-compose up -d

# View logs
docker-compose logs -f app

# Stop
docker-compose down
```

---

## ☁️ AWS Deployment

### Using AWS Elastic Beanstalk

1. **Install EB CLI**
```bash
pip install awsebcli
```

2. **Initialize**
```bash
eb init -p node.js lighting-factory-app
```

3. **Create Environment**
```bash
eb create production-env
```

4. **Set Environment Variables**
```bash
eb setenv NEXTAUTH_URL=https://your-domain.com \
          NEXTAUTH_SECRET=your-secret \
          DATABASE_URL=your-db-url
```

5. **Deploy**
```bash
eb deploy
```

### Using AWS ECS (Fargate)

1. **Push Docker Image to ECR**
```bash
# Authenticate
aws ecr get-login-password --region ap-southeast-1 | docker login --username AWS --password-stdin your-account-id.dkr.ecr.ap-southeast-1.amazonaws.com

# Build
docker build -t lighting-factory .

# Tag
docker tag lighting-factory:latest your-account-id.dkr.ecr.ap-southeast-1.amazonaws.com/lighting-factory:latest

# Push
docker push your-account-id.dkr.ecr.ap-southeast-1.amazonaws.com/lighting-factory:latest
```

2. **Create ECS Task Definition, Service, and Cluster via AWS Console or CLI**

---

## 🔧 Environment Setup by Environment

### Development (.env.local)
```env
NODE_ENV=development
NEXT_PUBLIC_APP_URL=http://localhost:3000
DATABASE_URL=postgresql://user:pass@localhost:5432/lighting_dev
NEXTAUTH_URL=http://localhost:3000
```

### Staging (.env.staging)
```env
NODE_ENV=production
NEXT_PUBLIC_APP_URL=https://staging.lightingfactory.th
DATABASE_URL=postgresql://user:pass@staging-db:5432/lighting_staging
NEXTAUTH_URL=https://staging.lightingfactory.th
```

### Production (.env.production)
```env
NODE_ENV=production
NEXT_PUBLIC_APP_URL=https://lightingfactory.th
DATABASE_URL=postgresql://user:pass@prod-db:5432/lighting_production
NEXTAUTH_URL=https://lightingfactory.th
```

---

## 📊 Database Setup

### PostgreSQL on Vercel (Neon)

1. Go to [Vercel Storage](https://vercel.com/storage)
2. Create Postgres database
3. Copy connection string
4. Add to environment variables

### PostgreSQL on AWS RDS

1. Create RDS instance (PostgreSQL 15)
2. Configure security groups
3. Get connection string
4. Run migrations:
```bash
npx prisma migrate deploy
```

### Supabase

1. Create project on [supabase.com](https://supabase.com)
2. Get connection string
3. Add to environment variables

---

## 🔐 SSL/HTTPS Setup

### With Vercel
- Automatic SSL with Let's Encrypt
- Custom domains: Settings → Domains

### With Cloudflare
1. Add site to Cloudflare
2. Update nameservers
3. Enable SSL/TLS (Full)
4. Enable Always Use HTTPS

### With Nginx (Self-hosted)
```nginx
server {
    listen 80;
    server_name lightingfactory.th www.lightingfactory.th;
    return 301 https://$server_name$request_uri;
}

server {
    listen 443 ssl http2;
    server_name lightingfactory.th www.lightingfactory.th;

    ssl_certificate /etc/letsencrypt/live/lightingfactory.th/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/lightingfactory.th/privkey.pem;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

---

## 📈 Monitoring & Logging

### Vercel Analytics
- Enable in Vercel dashboard
- Automatic performance monitoring

### Sentry (Error Tracking)
```bash
npm install @sentry/nextjs
```

```javascript
// sentry.client.config.js
import * as Sentry from '@sentry/nextjs';

Sentry.init({
  dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,
  tracesSampleRate: 1.0,
});
```

### LogRocket (Session Replay)
```bash
npm install logrocket
```

### Datadog
- Full stack monitoring
- APM and logs

---

## 🔄 CI/CD Pipeline

### GitHub Actions
```yaml
# .github/workflows/deploy.yml
name: Deploy to Production

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
          
      - name: Install dependencies
        run: npm ci
        
      - name: Run tests
        run: npm test
        
      - name: Build
        run: npm run build
        
      - name: Deploy to Vercel
        uses: amondnet/vercel-action@v20
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.ORG_ID }}
          vercel-project-id: ${{ secrets.PROJECT_ID }}
          vercel-args: '--prod'
```

---

## 🔍 Health Checks

### API Health Endpoint
```typescript
// app/api/health/route.ts
export async function GET() {
  return Response.json({
    status: 'ok',
    timestamp: new Date().toISOString(),
    version: process.env.npm_package_version,
  });
}
```

### Database Check
```typescript
// app/api/health/db/route.ts
import { prisma } from '@/lib/prisma';

export async function GET() {
  try {
    await prisma.$queryRaw`SELECT 1`;
    return Response.json({ status: 'ok' });
  } catch (error) {
    return Response.json({ status: 'error' }, { status: 500 });
  }
}
```

---

## 🛡️ Security Checklist

- [ ] HTTPS enabled
- [ ] Environment variables secured
- [ ] CORS configured properly
- [ ] Rate limiting enabled
- [ ] SQL injection prevention (Prisma ORM)
- [ ] XSS protection (React escapes by default)
- [ ] CSRF tokens for forms
- [ ] Secure password hashing (bcrypt)
- [ ] Security headers configured
- [ ] Dependencies updated regularly
- [ ] API authentication required
- [ ] Input validation on all forms

### Security Headers
```javascript
// next.config.js
const securityHeaders = [
  {
    key: 'X-DNS-Prefetch-Control',
    value: 'on'
  },
  {
    key: 'Strict-Transport-Security',
    value: 'max-age=63072000; includeSubDomains; preload'
  },
  {
    key: 'X-Frame-Options',
    value: 'SAMEORIGIN'
  },
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff'
  },
  {
    key: 'Referrer-Policy',
    value: 'origin-when-cross-origin'
  }
];

module.exports = {
  async headers() {
    return [
      {
        source: '/:path*',
        headers: securityHeaders,
      },
    ];
  },
};
```

---

## 📱 Domain & DNS Setup

### Custom Domain Configuration

1. **Purchase Domain** (e.g., from Namecheap, GoDaddy)

2. **Add to Vercel**
   - Settings → Domains
   - Add domain: `lightingfactory.th`
   - Add subdomain: `www.lightingfactory.th`

3. **Update DNS Records**
```
Type    Name    Value
A       @       76.76.21.21
CNAME   www     cname.vercel-dns.com
```

4. **Wait for Propagation** (up to 48 hours)

---

## 🔧 Post-Deployment Tasks

- [ ] Test all critical user flows
- [ ] Verify payment processing
- [ ] Check email notifications
- [ ] Test pool joining functionality
- [ ] Verify PRO registration
- [ ] Check mobile responsiveness
- [ ] Run Lighthouse audit
- [ ] Set up monitoring alerts
- [ ] Configure backups
- [ ] Update documentation
- [ ] Train support team
- [ ] Announce launch

---

## 📞 Support Contacts

### Infrastructure Issues
- **Vercel Support**: support@vercel.com
- **AWS Support**: Through AWS Console

### Critical Issues Escalation
1. Check error logs (Sentry/Vercel)
2. Review recent deployments
3. Rollback if necessary: `vercel rollback`
4. Contact DevOps team

---

**Last Updated**: December 11, 2024
**Deployment Status**: Ready for MVP deployment
