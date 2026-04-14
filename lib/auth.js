import { createClient } from "./supabase/server";

/**
 * Get the current authenticated Supabase auth user (server-side).
 * Returns null if not logged in.
 */
export async function getUser() {
  const supabase = await createClient();
  const {
    data: { user },
    error,
  } = await supabase.auth.getUser();
  if (error || !user) return null;
  return user;
}

/**
 * Get the full Manara_Users profile row for the current user.
 */
export async function getProfile() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) return null;

  const { data, error } = await supabase
    .from("Manara_Users")
    .select("*")
    .eq("auth_id", user.id)
    .maybeSingle();

  if (error) {
    console.error("getProfile error:", error.message);
    return null;
  }

  return data;
}

/**
 * Sign the user out (server action compatible).
 */
export async function signOut() {
  const supabase = await createClient();
  await supabase.auth.signOut();
}
