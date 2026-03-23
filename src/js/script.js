import { signUp, signIn } from './auth.js';

/**
 * --- ELEMENTOS DE LA INTERFAZ ---
 */
const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

const signUpForm = document.querySelector('.sign-up form');
const signInForm = document.querySelector('.sign-in form');

/**
 * --- ANIMACIONES DE TRANSICIÓN ---
 */
registerBtn.addEventListener('click', () => container.classList.add("active"));
loginBtn.addEventListener('click', () => container.classList.remove("active"));

/**
 * --- LÓGICA DE REGISTRO ---
 */
signUpForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const name = signUpForm.querySelector('input[type="text"]').value;
    const email = signUpForm.querySelector('input[type="email"]').value;
    const password = signUpForm.querySelector('input[type="password"]').value;

    try {
        await signUp(email, password, name);
        
        showToast("¡Usuario registrado con éxito!", "success");
        signUpForm.reset();
        
        // Retraso para que el usuario vea la burbuja
        setTimeout(() => {
            container.classList.remove("active");
        }, 1500);

    } catch (error) {
        showToast("Error al registrar: " + error.message, "error");
    }
});

/**
 * --- LÓGICA DE INICIO DE SESIÓN ---
 */
signInForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const email = signInForm.querySelector('input[type="email"]').value;
    const password = signInForm.querySelector('input[type="password"]').value;

    try {
        const data = await signIn(email, password);
        
        if (data) {
            showToast("¡Sesión iniciada con éxito!", "success");
            
            // REDIRECCIÓN: Como el HTML está en la raíz, usamos ruta directa
            setTimeout(() => {
                window.location.href = "login.html"; 
            }, 1500);
        }
    } catch (error) {
        showToast("Error al entrar: " + error.message, "error");
    }
});

/**
 * --- SISTEMA DE NOTIFICACIONES (TOASTS) ---
 */
function showToast(message, type) {
    const toast = document.createElement('div');
    toast.innerText = message;
    
    Object.assign(toast.style, {
        position: 'fixed',
        top: '20px',
        right: '20px',
        padding: '12px 24px',
        borderRadius: '8px',
        color: '#fff',
        zIndex: '10000',
        fontFamily: 'Montserrat, sans-serif',
        fontSize: '14px',
        boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
        transition: 'all 0.5s ease',
        backgroundColor: type === 'success' ? '#ff4500' : '#e74c3c' // Naranja lava para éxito
    });

    document.body.appendChild(toast);

    setTimeout(() => {
        toast.style.opacity = '0';
        setTimeout(() => toast.remove(), 500);
    }, 3000);
}