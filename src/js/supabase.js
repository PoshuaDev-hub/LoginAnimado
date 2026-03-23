import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm'


const supabaseUrl = 'https://cynwzzyzfwxajjhewpkg.supabase.co'; 
const supabaseAnonKey = 'sb_publishable_y5DAvEYpomnlApGUHPta8w_malv21_h';

if (!supabaseUrl || !supabaseAnonKey) {
  console.error("Faltan variables de entorno de Supabase");
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);