import { createClient } from '@supabase/supabase-js';
import { env } from './env.js';

const supabaseUrl = env.SUPABASE_URL ?? 'https://placeholder.supabase.co';
const supabaseAnonKey = env.SUPABASE_ANON_KEY ?? 'placeholder-key';

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    persistSession: false,
    autoRefreshToken: false,
  },
});
