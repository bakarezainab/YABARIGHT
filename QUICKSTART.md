# YABARIGHT - Quick Start Guide

## 🚀 Get Started in 5 Minutes

### Prerequisites
- Node.js 18+ installed
- PostgreSQL database running
- Git installed

### Step 1: Installation
```bash
cd YABARIGHT
npm install
```

### Step 2: Environment Setup
```bash
# Copy the example environment file
cp .env.example .env.local

# Edit .env.local and add:
# - DATABASE_URL (your PostgreSQL connection)
# - JWT_SECRET (run: openssl rand -base64 32)
# - STRIPE keys (if integrating payments)
```

### Step 3: Database Setup
```bash
# Run Prisma migrations
npx prisma migrate dev --name init

# (Optional) View database with Prisma Studio
npx prisma studio
```

### Step 4: Start Development Server
```bash
npm run dev
```

Visit `http://localhost:3000` in your browser.

## 📁 Project Structure
```
YABARIGHT/
├── app/                    # Next.js app pages
│   ├── api/               # API routes
│   ├── (auth)/            # Auth pages
│   ├── (buyer)/           # Buyer pages
│   └── (seller)/          # Seller pages
├── components/            # Reusable components
├── lib/                   # Utilities & helpers
├── store/                 # Zustand state stores
├── types/                 # TypeScript types
├── prisma/                # Database schema
└── styles/                # Global styles
```

## 🎯 Key Pages

### Public Pages
- `/` - Homepage
- `/products` - Product catalog
- `/login` - User login
- `/register` - User registration

### Buyer Pages (Requires Login)
- `/products` - Browse products
- `/cart` - Shopping cart
- `/checkout` - Checkout
- `/orders` - Order history

### Seller Pages (Requires Seller Role)
- `/dashboard` - Sales overview
- `/products/new` - Create product
- `/analytics` - Sales analytics

### Admin Pages (Requires Admin Role)
- `/admin/dashboard` - Admin panel
- `/admin/users` - User management
- `/admin/reports` - Reports

## 🔐 Authentication

### Login
```typescript
// Using the authStore
const { login } = useAuthStore();
await login('user@example.com', 'password');
```

### Register
```typescript
const { register } = useAuthStore();
await register('John Doe', 'john@example.com', 'password');
```

### Protected Routes
Routes are protected using middleware (to be implemented).

## 🛒 Shopping Features

### Add to Cart
```typescript
const { addItem } = useCartStore();
addItem(product, quantity);
```

### View Cart
```typescript
const { items, total } = useCartStore();
```

### Clear Cart
```typescript
const { clearCart } = useCartStore();
clearCart();
```

## 📦 Product Management

### Browse Products
```typescript
const { filteredProducts, setFilters } = useProductStore();
setFilters({ category: 'Clothing', maxPrice: 10000 });
```

### Search Products
```typescript
setFilters({ search: 'leather jacket' });
```

### Sort Products
```typescript
setFilters({ sort: 'price-low' });
```

## 💳 Payment Integration

### Stripe Setup
1. Get Stripe API keys from [stripe.com](https://stripe.com)
2. Add to `.env.local`:
   ```
   NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_...
   STRIPE_SECRET_KEY=sk_test_...
   ```
3. Implement checkout with Stripe elements

## 📱 Responsive Design

The project uses Tailwind CSS for responsive design:
- Mobile-first approach
- `md:` breakpoint for tablets
- `lg:` breakpoint for desktops
- `xl:` breakpoint for large screens

## 🎨 Styling

### YABARIGHT Colors
- **Primary**: #FFC600 (Yellow) - Brand color
- **Secondary**: #000000 (Black) - Text/backgrounds
- **Accent**: #FF6B6B (Red) - Highlights

### Using Tailwind
```jsx
<button className="bg-primary text-secondary px-6 py-2 rounded-lg">
  Button
</button>
```

### Custom Utilities
```css
/* Available in globals.css */
.btn-primary    /* Primary button style */
.btn-secondary  /* Secondary button style */
.btn-outline    /* Outline button style */
.input-field    /* Input field style */
.card           /* Card component style */
.badge          /* Badge element style */
```

## 🔍 Debugging

### Browser DevTools
- Use React Developer Tools extension
- Check Network tab for API calls
- View Console for errors

### Server Logs
```bash
# Check terminal where npm run dev is running
# Look for API request logs
```

### Prisma Studio
```bash
npx prisma studio
# Opens visual database browser
```

### VS Code Extensions
- ESLint
- Prettier
- Tailwind CSS IntelliSense
- Thunder Client (for API testing)

## 📚 Common Tasks

### Create a New Component
```bash
# Create file: components/MyComponent.tsx
'use client';

export default function MyComponent() {
  return <div>My Component</div>;
}
```

### Add a New API Route
```bash
# Create file: app/api/my-endpoint/route.ts
import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  return NextResponse.json({ message: 'Hello' });
}
```

### Query Database
```typescript
import { prisma } from '@/lib/prisma';

const products = await prisma.product.findMany({
  where: { published: true },
  take: 12,
});
```

### Use Zustand Store
```typescript
import { useAuthStore } from '@/store/authStore';

export default function MyComponent() {
  const { user, logout } = useAuthStore();
  
  return <div>{user?.name}</div>;
}
```

## 🧪 Testing

### Run Type Checking
```bash
npm run type-check
```

### Lint Code
```bash
npm run lint
```

### Manual Testing
1. Register as a buyer
2. Browse products
3. Add items to cart
4. Register as a seller
5. Create a product listing
6. Process a test order

## 🚀 Deployment

### Deploy to Vercel
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Set environment variables in Vercel dashboard
```

### Deploy to Docker
```bash
# Build image
docker build -t yabaright .

# Run container
docker run -p 3000:3000 yabaright
```

## 📖 Next Steps

1. **Read the Full Guide**: Review `IMPLEMENTATION_GUIDE.md`
2. **Setup Database**: Run Prisma migrations
3. **Test Login Flow**: Try registering and logging in
4. **Explore API**: Check existing API routes
5. **Build Features**: Implement buyer/seller features

## 🆘 Troubleshooting

### Port 3000 Already in Use
```bash
# Find and kill process on port 3000
lsof -ti:3000 | xargs kill -9

# Or use different port
npm run dev -- -p 3001
```

### Database Connection Error
- Check PostgreSQL is running
- Verify DATABASE_URL in .env.local
- Ensure database exists: `createdb yabaright`

### Module Not Found Error
```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

### TypeScript Errors
```bash
# Generate Prisma types
npx prisma generate
```

## 💡 Pro Tips

1. **Use Prisma Studio** often to inspect data
2. **Read console errors** carefully - they're usually helpful
3. **Keep .env.local** secure - never commit it
4. **Test API routes** with Postman before integration
5. **Use browser DevTools** to debug frontend
6. **Follow git workflow** for team development

## 📞 Support

- Check the IMPLEMENTATION_GUIDE.md for detailed info
- Review component examples in `/components`
- Check API examples in `/app/api`
- Visit [Next.js docs](https://nextjs.org/docs)
- Check [Prisma docs](https://www.prisma.io/docs/)

---

**Let's build Africa's leading affordable fashion marketplace! 🚀**

Built by Wakocoding. Powered by Technology. Inspired by Yaba. Built for Nigeria.
