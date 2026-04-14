-- ============================================================
--  TASHEEL QURAN — Supabase SQL Schema
--  Run this entire file in: Supabase → SQL Editor → New Query
-- ============================================================

-- 1. Enable UUID extension (already enabled on most Supabase projects)
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- ============================================================
-- 2. MAIN USERS TABLE → "Manara_Users"
-- ============================================================
CREATE TABLE IF NOT EXISTS public."Manara_Users" (
  id              UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  auth_id         UUID UNIQUE NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  full_name       TEXT NOT NULL,
  email           TEXT UNIQUE NOT NULL,
  avatar_url      TEXT,
  plan            TEXT NOT NULL DEFAULT 'free'
                    CHECK (plan IN ('free', 'basic', 'full')),
  grade           TEXT,                        -- e.g. "الصف العاشر"
  joined_at       TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  last_seen       TIMESTAMPTZ,
  is_active       BOOLEAN NOT NULL DEFAULT TRUE,
  metadata        JSONB DEFAULT '{}'::jsonb    -- flexible extra fields
);

-- ============================================================
-- 3. INDEX for fast auth_id lookups
-- ============================================================
CREATE INDEX IF NOT EXISTS idx_manara_users_auth_id
  ON public."Manara_Users" (auth_id);

CREATE INDEX IF NOT EXISTS idx_manara_users_email
  ON public."Manara_Users" (email);

-- ============================================================
-- 4. ROW LEVEL SECURITY
-- ============================================================
ALTER TABLE public."Manara_Users" ENABLE ROW LEVEL SECURITY;

-- Users can only read their own row
CREATE POLICY "Users can view own profile"
  ON public."Manara_Users"
  FOR SELECT
  USING (auth.uid() = auth_id);

-- Users can update their own row (not plan — that's server-side only)
CREATE POLICY "Users can update own profile"
  ON public."Manara_Users"
  FOR UPDATE
  USING (auth.uid() = auth_id)
  WITH CHECK (auth.uid() = auth_id);

-- Only the service role can insert (handled via trigger below)
CREATE POLICY "Service role can insert"
  ON public."Manara_Users"
  FOR INSERT
  WITH CHECK (auth.uid() = auth_id);

-- ============================================================
-- 5. AUTO-CREATE profile row on signup (trigger)
-- ============================================================
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  INSERT INTO public."Manara_Users" (auth_id, full_name, email)
  VALUES (
    NEW.id,
    COALESCE(NEW.raw_user_meta_data->>'full_name', 'مستخدم جديد'),
    NEW.email
  );
  RETURN NEW;
END;
$$;

-- Drop trigger if it already exists, then recreate
DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;

CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW
  EXECUTE FUNCTION public.handle_new_user();

-- ============================================================
-- 6. AUTO-UPDATE last_seen on every login
-- ============================================================
CREATE OR REPLACE FUNCTION public.handle_user_login()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  UPDATE public."Manara_Users"
  SET last_seen = NOW()
  WHERE auth_id = NEW.id;
  RETURN NEW;
END;
$$;

DROP TRIGGER IF EXISTS on_auth_user_login ON auth.users;

CREATE TRIGGER on_auth_user_login
  AFTER UPDATE OF last_sign_in_at ON auth.users
  FOR EACH ROW
  EXECUTE FUNCTION public.handle_user_login();

-- ============================================================
-- 7. HELPER VIEW — safe user profile (no sensitive cols)
-- ============================================================
CREATE OR REPLACE VIEW public.manara_user_profile AS
  SELECT
    id,
    full_name,
    email,
    avatar_url,
    plan,
    grade,
    joined_at,
    last_seen,
    is_active
  FROM public."Manara_Users"
  WHERE auth_id = auth.uid();

-- ============================================================
-- 8. QUICK VERIFICATION QUERIES (run after setup)
-- ============================================================
-- SELECT * FROM public."Manara_Users";
-- SELECT * FROM public.manara_user_profile;
-- ============================================================
