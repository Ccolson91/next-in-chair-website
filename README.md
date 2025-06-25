# Next In Chair - Automated Marketing for Salon Owners

A modern, responsive website built with SvelteKit, TypeScript, and TailwindCSS that provides automated marketing solutions for busy salon owners.

## 🚀 Features

- **Modern Tech Stack**: Built with SvelteKit, TypeScript, and TailwindCSS
- **User Authentication**: Secure registration and login with Supabase Auth
- **Responsive Design**: Beautiful, mobile-first design that works on all devices
- **Dark Theme**: Elegant dark theme with vibrant accent colors
- **Customer Testimonials**: Real reviews from satisfied salon owners
- **Professional Landing Page**: Conversion-optimized design for salon owners

## 🛠️ Tech Stack

- **Framework**: SvelteKit
- **Language**: TypeScript
- **Styling**: TailwindCSS
- **Authentication**: Supabase Auth
- **Database**: Supabase (PostgreSQL)
- **Form Handling**: SvelteKit Superforms with Zod validation
- **Deployment**: Static site generation ready

## 📦 Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd next-in-chair-website
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env
```
Then edit `.env` with your Supabase credentials.

4. Set up the database:
Run the following SQL in your Supabase SQL Editor:

```sql
-- Create the tenants table to store business information
CREATE TABLE public.tenants (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID UNIQUE NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
    business_name TEXT NOT NULL,
    full_name TEXT,
    created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.tenants ENABLE ROW LEVEL SECURITY;

-- Policy to allow users to see their own tenant data
CREATE POLICY "Users can view their own tenant data"
ON public.tenants
FOR SELECT USING (auth.uid() = user_id);
```

5. Start the development server:
```bash
npm run dev
```

## 🏗️ Project Structure

```
src/
├── lib/
│   ├── utils/
│   │   ├── auth.ts          # Authentication utilities
│   │   ├── supabase.ts      # Supabase client configuration
│   │   ├── types.ts         # TypeScript type definitions
│   │   └── validation.ts    # Zod validation schemas
│   ├── Features.svelte      # Features section component
│   ├── Footer.svelte        # Footer component
│   ├── Header.svelte        # Header/navigation component
│   ├── Hero.svelte          # Hero section component
│   └── TestimonialsSection.svelte # Customer testimonials
├── routes/
│   ├── about/
│   │   └── +page.svelte     # About page
│   ├── dashboard/
│   │   └── +page.svelte     # User dashboard (protected)
│   ├── pricing/
│   │   └── +page.svelte     # Pricing page
│   ├── register/
│   │   ├── +page.server.ts  # Registration form actions
│   │   └── +page.svelte     # Registration form
│   └── +page.svelte         # Homepage
├── app.css                  # Global styles and Tailwind imports
└── app.html                 # HTML template
```

## 🎨 Design System

The website uses a sophisticated dark theme with vibrant accent colors:

- **Background**: Deep black (#0A0A0A) for sophistication
- **Primary Gradients**: Pink to Orange (#EC4899 → #F97316)
- **Secondary Gradients**: Purple to Cyan (#8B5CF6 → #06B6D4)
- **Accent Gradients**: Amber to Red (#F59E0B → #EF4444)
- **Text**: White with various opacity levels for hierarchy

## 🔐 Authentication Flow

1. User clicks "Create Your Marketing System" or "Get Started"
2. Redirected to `/register` page
3. Fills out registration form (Name, Business Name, Email, Password)
4. Form validation with Zod schemas
5. User created in Supabase Auth
6. Business information stored in `tenants` table
7. Redirected to `/dashboard` upon success

## 📱 Pages

- **Homepage** (`/`): Landing page with hero, features, and testimonials
- **About** (`/about`): Company information and mission
- **Pricing** (`/pricing`): Service plans and pricing
- **Register** (`/register`): User registration form
- **Dashboard** (`/dashboard`): Protected user dashboard

## 🚀 Deployment

The project is configured for static site generation. To build for production:

```bash
npm run build
```

The built files will be in the `build/` directory, ready for deployment to any static hosting service.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is proprietary software for Next In Chair.

## 🆘 Support

For support, please contact the development team or create an issue in the repository.

