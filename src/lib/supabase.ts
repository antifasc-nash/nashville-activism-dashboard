import { createClient } from '@supabase/supabase-js';

// These 'process.env' lines tell the app to look in your .env.local file
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

// This is the "bridge" that allows the web app to talk to your database
export const supabase = createClient(supabaseUrl, supabaseAnonKey);
