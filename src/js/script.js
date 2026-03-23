import { signUp, signIn } from './auth.js' //

// --- ANIMACIÓN ---
const container = document.getElementById('container'); //
const registerBtn = document.getElementById('register'); //
const loginBtn = document.getElementById('login'); //

// Cambia entre los paneles de naranja sutil y naranja lava
registerBtn.addEventListener('click', () => container.classList.add("active")); //
loginBtn.addEventListener('click', () => container.classList.remove("active")); //

// --- LÓGICA DE FORMULARIOS ---
const signUpForm = document.querySelector('.sign-up form'); //
const signInForm = document.querySelector('.sign-in form'); //

// Evento Registro
signUpForm.addEventListener('submit', async (e) => {
    e.preventDefault(); // Evita que la página se recargue
    
    // Captura de datos de los campos de entrada
    const name = signUpForm.querySelector('input[type="text"]').value; //
    const email = signUpForm.querySelector('input[type="email"]').value; //
    const password = signUpForm.querySelector('input[type="password"]').value; //

    try {
        // Pasamos el nombre como metadato a Supabase Auth
        const { data, error } = await signUp(email, password, name); //
        
        if (error) throw error; //
        
        // Alerta de éxito al centro del navegador
        alert("¡Registrado con éxito!");
        
        // Limpiar formulario y volver al panel de login
        signUpForm.reset(); //
        container.classList.remove("active"); //
    } catch (error) {
        alert("Error al registrar: " + error.message); //
    }
});

// Evento Login
signInForm.addEventListener('submit', async (e) => {
    e.preventDefault(); //
    const email = signInForm.querySelector('input[type="email"]').value; //
    const password = signInForm.querySelector('input[type="password"]').value; //

    try {
        const { data, error } = await signIn(email, password); //
        
        if (error) throw error; //
        
        if(data) {
            // Redirección al apartado login.html tras éxito
            window.location.href = "login.html";
        }
    } catch (error) {
        alert("Error al entrar: " + error.message); //
    }
});