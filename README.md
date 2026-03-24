# 🔸 YASHSTORE

YASHSTORE is a **full-stack modern e-commerce platform** built with **Next.js App Router**, **Prisma**, **PostgreSQL**, **NextAuth**, and **Stripe**.  
It provides a complete shopping flow: authentication, product catalog, cart, checkout, order creation, and an admin dashboard for store management.

## 🌐 Live Demo

- **Website:** [YASHSTORE - E-Commerce](https://yashstore-eosin.vercel.app/)
- **Showcase Video:** [Watch on YouTube](https://youtu.be/DhGAmZbGHws)

---

## 📁 Project Structure

```
YASHSTORE/
│
├── app/
│   ├── (auth)/                 → Login/Register pages
│   ├── (pages)/                → Storefront pages (products, cart, checkout, orders)
│   ├── (admin)/dashboard/      → Admin panel (products, categories, users, orders)
│   ├── api/
│   │   ├── auth/[...nextauth]/ → NextAuth handlers
│   │   ├── create-payment-intent/
│   │   └── webhook/            → Stripe webhook event handling
│   ├── payment-success/        → Payment confirmation page
│   ├── layout.tsx              → Global layout + analytics + navbar
│   └── globals.css             → Global Tailwind styles/utilities
│
├── actions/                    → Server Actions (auth, products, cart, order status)
├── components/                 → Reusable UI components (store + admin)
├── lib/
│   ├── db.ts                   → Prisma client singleton
│   └── utils.ts                → Utility helpers
├── prisma/
│   ├── schema.prisma           → DB models (User, Product, Cart, Order, etc.)
│   └── migrations/
├── auth.ts                     → NextAuth v5 config (Credentials + Google)
├── middleware.ts               → Middleware entry (currently empty)
├── next.config.mjs             → Next.js config + image domains
└── tailwind.config.ts          → Tailwind theme and custom animations
```

---

## 🚀 Tech Stack

### Core

- **Framework:** [Next.js 14](https://nextjs.org/) (App Router)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **UI:** [React 18](https://react.dev/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)

### Data & Auth

- **ORM:** [Prisma](https://www.prisma.io/)
- **Database:** [PostgreSQL](https://www.postgresql.org/)
- **Authentication:** [NextAuth.js v5 (beta)](https://authjs.dev/)
  - Credentials login
  - Google OAuth login
  - Role-based authorization (`ADMIN` / `USER`)

### Payments

- **Payment Processor:** [Stripe](https://stripe.com/)
  - Payment intents from API route
  - Webhook verification and order creation

### UI/UX & Utilities

- [react-hot-toast](https://react-hot-toast.com/) for notifications
- [Lucide React](https://lucide.dev/) for icons
- [GSAP](https://gsap.com/) (included)
- [Vercel Analytics](https://vercel.com/analytics) + [Speed Insights](https://vercel.com/docs/speed-insights)

---

## 🧩 Core Features

### 👤 Authentication & Authorization

- Register with name, email, phone, and password
- Login with credentials
- Google sign-in support
- Session-based auth via NextAuth
- Role-aware UI/route behavior for `ADMIN` and `USER`

### 🛍️ Storefront

- Home page with hero and new products section
- Product listing with:
  - Search by name
  - Category filters (mobile + desktop variants)
- Product detail page with image carousel
- Add/remove items from cart

### 💳 Checkout & Orders

- Stripe Payment Element checkout flow
- Server-side payment intent creation
- Stripe webhook handling for successful payments
- Automatic order creation and cart cleanup after payment
- User order history and single-order detail page

### 🛠️ Admin Dashboard

- Dashboard overview (users, products, orders, categories)
- Product management:
  - Create product
  - Edit product
  - Delete product
- Category management with category detail view
- User listing and search
- Order listing/search and per-order status update

---

## 🗃️ Database Models (Prisma)

Main entities:

- `User`
- `Product`
- `Category`
- `Cart`
- `Order`
- `Wishlist`
- `Review`

Also includes enums:

- `Role`: `ADMIN`, `USER`
- `Status`: `PENDING`, `PROCESSING`, `DELIVERING`, `SHIPPED`, `COMPLETED`, `CANCELLED`, `REFUNDED`

---

## 📦 API Endpoints

### Auth

| Method | Endpoint                  | Description            |
| ------ | ------------------------- | ---------------------- |
| GET    | `/api/auth/[...nextauth]` | NextAuth route handler |
| POST   | `/api/auth/[...nextauth]` | NextAuth route handler |

### Payments

| Method | Endpoint                     | Description                                     |
| ------ | ---------------------------- | ----------------------------------------------- |
| POST   | `/api/create-payment-intent` | Creates Stripe PaymentIntent and returns secret |
| POST   | `/api/webhook`               | Handles Stripe webhook events                   |

---

## ⚙️ Environment Variables

Create a `.env` (or `.env.local`) file in the project root.

```env
# Prisma / PostgreSQL
POSTGRES_PRISMA_URL="postgresql://..."
POSTGRES_URL_NON_POOLING="postgresql://..."

# NextAuth (Google)
clientId="your_google_client_id"
clientSecret="your_google_client_secret"

# Stripe
NEXT_PUBLIC_STRIPE_PUBLIC_KEY="pk_test_..."
STRIPE_SECRET_KEY="sk_test_..."
STRIPE_WEBHOOK_SECRET="whsec_..."
```

> Note: Variable names `clientId` and `clientSecret` are used as-is in the current code.

---

## 🛠️ Getting Started

### Prerequisites

- Node.js 18+
- npm
- PostgreSQL database
- Stripe account (test mode is fine)

### Installation

1. **Clone the repository**

   ```bash
   git clone <your-repo-url>
   cd YASHSTORE
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Configure environment variables**
   - Create `.env` or `.env.local`
   - Add all required variables from the section above

4. **Run Prisma migration and generate client**

   ```bash
   npx prisma migrate dev
   npx prisma generate
   ```

5. **Start development server**

   ```bash
   npm run dev
   ```

6. **Open app**
   - [http://localhost:3000](http://localhost:3000)

---

## 📜 Scripts

```bash
npm run dev        # Start development server
npm run build      # Production build
npm start          # Start production server
npm run lint       # Run Next.js linting
```

---

## ☁️ Deployment

Recommended stack:

- **App:** Vercel
- **Database:** Neon / Supabase / Railway PostgreSQL
- **Payments:** Stripe

Deployment checklist:

1. Add all environment variables in hosting provider
2. Run Prisma migrations in production database
3. Configure Stripe webhook endpoint to:
   - `https://your-domain.com/api/webhook`
4. Verify Google OAuth callback URL setup in Google Cloud Console

---

## 🔒 Security Notes

- Passwords are hashed with `bcryptjs`
- Stripe webhook signature is verified before processing
- Admin routes are protected by role checks in dashboard layout
- Session tokens include user role for authorization decisions

---

## 📈 Future Improvements

- Add unit/integration tests
- Complete middleware-based route protection
- Add inventory/stock management
- Improve checkout address handling
- Add wishlist/reviews UI (models already exist)

---

## 🧑‍💻 Author

Built by **YASHDEV42**.

---

**YASHSTORE — a modern full-stack e-commerce experience. ✨**
