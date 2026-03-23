import { supabase } from './supabase.js';

/**
 * --- REGISTRO DE USUARIOS ---
 * Registra un nuevo usuario en Supabase Auth incluyendo su nombre completo.
 * @param {string} email 
 * @param {string} password 
 * @param {string} fullName 
 */
export async function signUp(email, password, fullName) {
    const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
            data: {
                full_name: fullName // Se guarda en auth.users.raw_user_meta_data
            }
        }
    });
    
    if (error) throw error; 
    return data;
}

/**
 * --- INICIO DE SESIÓN ---
 * Autentica al usuario mediante correo y contraseña.
 * @param {string} email 
 * @param {string} password 
 */
export async function signIn(email, password) {
    const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
    });
    
    if (error) throw error; 
    return data;
}