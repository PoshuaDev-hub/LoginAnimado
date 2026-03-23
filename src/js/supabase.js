import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm'

/**
 * --- CONFIGURACIÓN DE SUPABASE ---
 * Usando variables de entorno (Compatible con Vite/Frameworks)
 */
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL; 
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

/**
 * --- VALIDACIÓN Y CLIENTE ---
 */
if (!supabaseUrl || !supabaseAnonKey) {
  console.warn("Precaución: Las variables de entorno de Supabase no están definidas.");
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);