# Next in Chair - Deployment Guide

## 🚀 Quick Deployment to Vercel

### Prerequisites
- GitHub account
- Vercel account (free tier available)
- Supabase project with database configured

### Step 1: Push to GitHub
```bash
# Initialize git repository
git init

# Add all files
git add .

# Commit changes
git commit -m "Initial commit: Next in Chair website"

# Add your GitHub repository
git remote add origin https://github.com/YOUR_USERNAME/next-in-chair-website.git

# Push to GitHub
git push -u origin main
```

### Step 2: Deploy to Vercel
1. Go to [vercel.com](https://vercel.com)
2. Sign in with GitHub
3. Click "New Project"
4. Import your `next-in-chair-website` repository
5. Configure environment variables (see below)
6. Click "Deploy"

### Step 3: Environment Variables
Add these in Vercel dashboard under "Settings" > "Environment Variables":

```
PUBLIC_SUPABASE_URL = https://umeqctwilfdlhheqbscd.supabase.co
PUBLIC_SUPABASE_ANON_KEY = eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVtZXFjdHdpbGZkbGhoZXFic2NkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTA3OTg3MTcsImV4cCI6MjA2NjM3NDcxN30.kZIJe_enONH-diDxqfFLUjxjpwIqmX_8h3Hz_aDbLQ4
```

### Step 4: Configure Supabase
1. Go to your Supabase dashboard
2. Navigate to "Authentication" > "URL Configuration"
3. Add your Vercel URL to:
   - **Site URL**: `https://your-project.vercel.app`
   - **Redirect URLs**: `https://your-project.vercel.app/**`

### Step 5: Test Your Deployment
1. Visit your Vercel URL
2. Test registration flow
3. Test login flow
4. Verify dashboard access

## 🔧 Troubleshooting

### Build Fails
- Check that all dependencies are in `package.json`
- Verify environment variables are set correctly

### Authentication Not Working
- Verify Supabase environment variables
- Check Supabase URL configuration includes your domain

### Images Not Loading
- Ensure images are in the `static/` folder
- Check file paths in components

## 📱 Features Included

✅ Complete authentication system
✅ User registration and login
✅ Dashboard for authenticated users
✅ Responsive design
✅ Professional salon-focused styling
✅ Supabase integration
✅ Form validation
✅ Error handling

## 🎯 Post-Deployment

After successful deployment:
1. Update your domain in Supabase settings
2. Test all functionality
3. Share your live website URL
4. Monitor analytics and user registrations

Your Next in Chair website is now live and ready for salon owners!

