-- =====================================================
-- NEXT IN CHAIR DATABASE SETUP
-- Run this SQL in your Supabase SQL Editor
-- =====================================================

-- Step 1: Drop existing table if it exists (to start fresh)
DROP TABLE IF EXISTS public.tenants;

-- Step 2: Create the tenants table with correct structure
CREATE TABLE public.tenants (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID UNIQUE NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
    business_name TEXT NOT NULL,
    full_name TEXT,
    created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- Step 3: Enable Row Level Security
ALTER TABLE public.tenants ENABLE ROW LEVEL SECURITY;

-- Step 4: Create RLS policies for authenticated users

-- Policy 1: Users can view their own tenant data
CREATE POLICY "Users can view their own tenant data"
ON public.tenants
FOR SELECT 
USING (auth.uid() = user_id);

-- Policy 2: Users can insert their own tenant data
CREATE POLICY "Users can insert their own tenant data"
ON public.tenants
FOR INSERT 
WITH CHECK (auth.uid() = user_id);

-- Policy 3: Users can update their own tenant data
CREATE POLICY "Users can update their own tenant data"
ON public.tenants
FOR UPDATE 
USING (auth.uid() = user_id)
WITH CHECK (auth.uid() = user_id);

-- Step 5: Grant necessary permissions
GRANT ALL ON public.tenants TO authenticated;
GRANT ALL ON public.tenants TO service_role;

-- Step 6: Create indexes for better performance
CREATE INDEX idx_tenants_user_id ON public.tenants(user_id);
CREATE INDEX idx_tenants_created_at ON public.tenants(created_at);

-- =====================================================
-- VERIFICATION QUERIES
-- Run these to verify everything is set up correctly
-- =====================================================

-- Check table structure
SELECT column_name, data_type, is_nullable, column_default
FROM information_schema.columns 
WHERE table_name = 'tenants' AND table_schema = 'public'
ORDER BY ordinal_position;

-- Check RLS policies
SELECT schemaname, tablename, policyname, permissive, roles, cmd, qual
FROM pg_policies 
WHERE tablename = 'tenants';

-- Check permissions
SELECT grantee, privilege_type 
FROM information_schema.role_table_grants 
WHERE table_name = 'tenants' AND table_schema = 'public';

-- =====================================================
-- TEST DATA (Optional - for testing)
-- =====================================================

-- You can insert test data after a user is created
-- This is just an example - don't run this now
/*
INSERT INTO public.tenants (user_id, business_name, full_name)
VALUES (
    'your-user-id-here',
    'Test Salon',
    'Test Owner'
);
*/

