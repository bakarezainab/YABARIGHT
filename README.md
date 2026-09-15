# YABARIGHT - E-Commerce Platform

## Project Overview

**YABARIGHT** is a Next.js-based e-commerce platform for buying and selling thrift fashion items (clothes, bags, shoes) online. Inspired by the YabaRight business model, it brings affordable quality fashion to consumers while creating a digital marketplace for sellers.

### Tagline
> "Look Good. Spend Smart. Shop Right."

## Vision
Build Nigeria's leading affordable-fashion marketplace by making premium-looking fashion accessible to everyone through a technology-enabled platform.

## Core Features

### For Buyers
- **Browse & Discover**: Curated thrift fashion collections with advanced search and filtering
- **Premium Access**: Affordable prices on quality items
- **Convenient Shopping**: Browse and purchase from anywhere
- **Secure Checkout**: Multiple payment options and trusted transactions
- **Track Orders**: Real-time order tracking with delivery updates
- **Reviews & Ratings**: Community feedback on products and sellers
- **Wishlist**: Save items for later

### For Sellers
- **Digital Storefront**: Create a professional shop for free
- **Product Management**: Upload and manage inventory easily
- **Sales Dashboard**: Monitor sales, revenue, and metrics
- **Payment Processing**: Receive earnings directly
- **Promotional Tools**: Reach millions of potential buyers
- **Analytics**: Track bestsellers and customer behavior

### For Platform
- **Commission Model**: Marketplace fees on transactions
- **Data Insights**: Purchasing behavior trends
- **Category Expansion**: Foundation for expanding beyond fashion
- **Scalability**: Regional expansion capabilities

## Technology Stack

- **Framework**: Next.js 14 with TypeScript
- **Database**: PostgreSQL with Prisma ORM
- **Authentication**: JWT-based auth with bcryptjs
- **Payments**: Stripe integration
- **Styling**: Tailwind CSS
- **State Management**: Zustand
- **HTTP Client**: Axios
- **Form Handling**: React Hook Form
- **UI Components**: Custom components + Radix UI

## Project Structure

```
YABARIGHT/
├── app/                      # Next.js app directory
│   ├── api/                 # API routes
│   │   ├── auth/           # Authentication endpoints
│   │   ├── products/       # Product management
│   │   ├── orders/         # Order processing
│   │   ├── payments/       # Payment handling
│   │   └── shop/           # Shop management
│   ├── (buyer)/            # Buyer-facing pages
│   │   ├── layout.tsx
│   │   ├── page.tsx        # Home page
│   │   ├── products/       # Product listing
│   │   ├── cart/           # Shopping cart
│   │   ├── checkout/       # Checkout flow
│   │   └── orders/         # Order history
│   ├── (seller)/           # Seller dashboard
│   │   ├── dashboard/
│   │   ├── products/
│   │   ├── analytics/
│   │   └── settings/
│   ├── (auth)/             # Auth pages
│   │   ├── login/
│   │   ├── register/
│   │   └── forgot-password/
│   └── layout.tsx          # Root layout
│
├── components/              # Reusable React components
│   ├── common/             # Shared components
│   ├── product/            # Product-related components
│   ├── cart/               # Cart components
│   ├── shop/               # Shop components
│   └── navigation/         # Navigation components
│
├── lib/                     # Utility functions
│   ├── auth.ts            # Authentication helpers
│   ├── api.ts             # API client setup
│   ├── validators.ts      # Form validators
│   └── constants.ts       # App constants
│
├── store/                   # Zustand stores
│   ├── authStore.ts       # Auth state
│   ├── cartStore.ts       # Cart state
│   └── productStore.ts    # Product state
│
├── types/                   # TypeScript types
│   ├── index.ts           # Shared types
│   ├── models.ts          # Model types
│   └── api.ts             # API response types
│
├── styles/                  # Global styles
│   └── globals.css
│
├── prisma/                  # Database schema
│   └── schema.prisma
│
├── public/                  # Static assets
├── .env.example            # Environment template
├── next.config.js          # Next.js config
├── tailwind.config.js      # Tailwind config
├── tsconfig.json           # TypeScript config
└── package.json            # Dependencies
```

## Road to 2028

### Phase 1: Build (Q1-Q2 2026)
- Launch marketplace with core features
- Onboard initial sellers and establish customer base
- Implement basic product search and discovery

### Phase 2: Traction (Q3-Q4 2026)
- Increase transactions and improve logistics
- Build repeat purchasing patterns
- Optimize for customer retention

### Phase 3: Scale (Q1-Q2 2027)
- Expand beyond Lagos into major Nigerian markets
- Increase inventory from more sellers
- Build trust and community features

### Phase 4: Market Leadership (Q3 2027-Q1 2028)
- Establish YABARIGHT as Nigeria's leading affordable-fashion marketplace
- Expand product categories beyond fashion
- Build data foundation for future growth

## Getting Started

### Prerequisites
- Node.js 18+
- PostgreSQL database
- Stripe account (for payments)

### Installation

```bash
# Install dependencies
npm install

# Setup environment variables
cp .env.example .env.local
# Edit .env.local with your database and API keys

# Setup database
npx prisma migrate dev --name init

# Run development server
npm run dev
```

Visit `http://localhost:3000` to see the application.

## Key Differentiators

1. **Real Problem**: Affordability and convenience in fashion retail
2. **Tech Leverage**: Digital marketplace reduces acquisition costs
3. **Multiple Revenue Streams**: Commissions, advertising, logistics, proprietary products
4. **Scalability**: Digital platform expands without physical stores
5. **Marketing DNA**: Built on deep understanding of Nigerian youth culture
6. **Vision 2028**: Build a major Nigerian commerce company

## Investor Value Proposition

We're not asking investors to finance another clothing website. We're inviting them to participate in:

1. **Capital**: Initial platform funding
2. **Connections**: Industry relationships and distribution networks
3. **Experience**: Strategic guidance and operational expertise
4. **Guidance**: Navigate regulatory and market challenges

Together, we're building the technology company that makes quality fashion accessible to Nigeria.

## MVP Features Roadmap

- [ ] User authentication (buyers and sellers)
- [ ] Product listing and catalog
- [ ] Shopping cart and wishlist
- [ ] Checkout and payment processing
- [ ] Order management and tracking
- [ ] Basic seller dashboard
- [ ] Review and rating system
- [ ] Search and filtering
- [ ] Admin dashboard
- [ ] Email notifications
- [ ] SMS notifications
- [ ] Seller verification system
- [ ] Product quality control
- [ ] Logistics integration
- [ ] Refund management system

## Contributing

This project is built by Wakocoding team as the foundation for the YABARIGHT platform.

## License

Proprietary - YABARIGHT 2026

---

**Built by Wakocoding. Powered by Technology. Inspired by Yaba. Built for Nigeria.**
