
document.addEventListener('DOMContentLoaded', function() {

     // Limpiar errores previos antes de validar
    const form = document.querySelector('form');
    if (!form) return;

    // Función para mostrar un mensaje de error junto al input
    function setError(input, message) {
        let error = input.nextElementSibling;
        if (error && error.classList.contains('error-message')) {
            error.textContent = message;
        }
    }

    // Función para limpiar el mensaje de error junto al input
    function clearError(input) {
        let error = input.nextElementSibling;
        if (error && error.classList.contains('error-message')) {
            error.textContent = '';
        }
    }

    // Validación para el formulario de inicio de sesión
    if (document.getElementById('password') && !document.getElementById('confirmar')) {
        form.addEventListener('submit', function(e) {
            let valid = true;

            // Selecciona los campos de email y contraseña
            const email = document.getElementById('email');
            const password = document.getElementById('password');

            // Limpiar errores previos antes de validar
            clearError(email);
            clearError(password);

            // ---------------- Validación del email ----------------
            if (!email.value.trim()) { 
                setError(email, 'Por favor, ingresa tu correo electrónico.');
                valid = false;
            } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value.trim())) {
                setError(email, 'El correo electrónico no es válido.');
                valid = false;
            }

            // ---------------- Validación de la contraseña ----------------
            if (!password.value.trim()) { 
                setError(password, 'Por favor, ingresa tu contraseña.');
                valid = false;
            } else if (password.value.length < 6) { 
                setError(password, 'La contraseña debe tener al menos 6 caracteres.');
                valid = false;
            }

            // Si alguna validación falla, se previene que el formulario se envíe
            if (!valid) e.preventDefault();
        });
    }

    // ---------------- Validación para REGISTRO ----------------
    if (document.getElementById('confirmar')) {
        form.addEventListener('submit', function(e) {
            let valid = true;

            // Selecciona todos los campos del formulario
            const nombre = document.getElementById('nombre');
            const email = document.getElementById('email');
            const password = document.getElementById('password');
            const confirmar = document.getElementById('confirmar');

            // Limpiar mensajes de error previos
            clearError(nombre);
            clearError(email);
            clearError(password);
            clearError(confirmar);

            // ---------------- Validación del nombre ----------------
            if (!nombre.value.trim()) { 
                setError(nombre, 'Por favor, ingresa tu nombre completo.');
                valid = false;
            }

            // ---------------- Validación del email ----------------
            if (!email.value.trim()) {
                setError(email, 'Por favor, ingresa tu correo electrónico.');
                valid = false;
            } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value.trim())) {
                setError(email, 'El correo electrónico no es válido.');
                valid = false;
            }

            // ---------------- Validación de la contraseña ----------------
            if (!password.value.trim()) {
                setError(password, 'Por favor, ingresa una contraseña.');
                valid = false;
            } else if (password.value.length < 6) {
                setError(password, 'La contraseña debe tener al menos 6 caracteres.');
                valid = false;
            }

            // ---------------- Validación de confirmación de contraseña ----------------
            if (!confirmar.value.trim()) {
                setError(confirmar, 'Por favor, confirma tu contraseña.');
                valid = false;
            } else if (password.value !== confirmar.value) { 
                setError(confirmar, 'Las contraseñas no coinciden.');
                valid = false;
            }

            // Previene el envío del formulario si algo no es válido
            if (!valid) e.preventDefault();
        });
    }

}); // Fin de DOMContentLoaded

//Mi cuenta
    // Solo ejemplo visual, no guarda datos reales
    document.getElementById('formCuenta').onsubmit = function(e) {
        e.preventDefault();
        alert('Datos actualizados correctamente.');
    };
    document.getElementById('cerrarSesion').onclick = function() {
        alert('Sesión cerrada.');
    };

    // Obtiene todos los elementos con la clase "tabcontent" (el contenido de cada pestaña)
    function openTab(evt, tabName) {
    let tabcontent = document.getElementsByClassName("tabcontent");

    // 2. Recorremos cada contenido de pestaña y lo ocultamos
    for (let i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // 3. Seleccionamos todos los botones de pestañas
    let tablinks = document.getElementsByClassName("tablinks");

    // 4. Recorremos cada botón y le quitamos la clase 'active'
    for (let i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // 5. Mostramos la pestaña que corresponde al botón clickeado
    document.getElementById(tabName).style.display = "block";

    // 6. Agregamos la clase 'active' al botón clickeado
    evt.currentTarget.className += " active";
}