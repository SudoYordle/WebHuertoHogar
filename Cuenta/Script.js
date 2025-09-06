// Espera que todo el contenido HTML del DOM esté completamente cargado antes de ejecutar el script.
// Esto asegura que los elementos del formulario existan y se puedan manipular sin errores.
document.addEventListener('DOMContentLoaded', function() {

    // Selecciona el primer formulario que encuentre en la página.
    // querySelector('form') devuelve el primer elemento <form> que encuentre.
    const form = document.querySelector('form');
    if (!form) return; // Si no hay formulario, el script se detiene para no generar errores.

    /**
     * Función para mostrar un mensaje de error en un campo específico.
     * @param {HTMLElement} input - El campo del formulario donde mostrar el error.
     * @param {string} message - El mensaje de error que se mostrará.
     *
     * nextElementSibling: selecciona el siguiente hermano del elemento en el DOM.
     * Esto es útil si debajo del input hay un <span> o <div> donde mostramos el mensaje.
     */
    function setError(input, message) {
        let error = input.nextElementSibling; // Busca el siguiente elemento hermano del input
        // Si existe y tiene la clase 'error-message', actualiza su contenido con el mensaje
        if (error && error.classList.contains('error-message')) {
            error.textContent = message;
        }
    }

    /**
     * Función para limpiar cualquier mensaje de error previo en un campo.
     * @param {HTMLElement} input - El campo del formulario del cual eliminar el mensaje.
     */
    function clearError(input) {
        let error = input.nextElementSibling; // Busca el siguiente elemento hermano
        // Si existe y es un mensaje de error, lo borra
        if (error && error.classList.contains('error-message')) {
            error.textContent = '';
        }
    }

    // ---------------- Validación para INICIAR SESIÓN ----------------
    // Detecta si la página es de login verificando que exista el campo 'password'
    // y que NO exista el campo 'confirmar' (el cual solo aparece en registro)
    if (document.getElementById('password') && !document.getElementById('confirmar')) {
        form.addEventListener('submit', function(e) {
            let valid = true; // Bandera que indica si el formulario es válido

            const email = document.getElementById('email'); // Campo email
            const password = document.getElementById('password'); // Campo contraseña

            // Limpiar errores previos antes de validar
            clearError(email);
            clearError(password);

            // ---------------- Validación del email ----------------
            if (!email.value.trim()) { 
                // .value obtiene el valor que escribió el usuario
                // .trim() elimina espacios al inicio y al final
                // Esto evita que el usuario solo escriba espacios en blanco
                setError(email, 'Por favor, ingresa tu correo electrónico.');
                valid = false;
            } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value.trim())) {
                // Expresión regular para validar formato de correo electrónico:
                // ^ -> inicio de la cadena
                // [^\s@]+ -> uno o más caracteres que NO sean espacios o '@'
                // @ -> debe contener '@'
                // [^\s@]+ -> uno o más caracteres que NO sean espacios o '@'
                // \. -> un punto literal
                // [^\s@]+ -> uno o más caracteres que NO sean espacios o '@'
                // $ -> fin de la cadena
                // .test() devuelve true si el valor coincide con el patrón
                setError(email, 'El correo electrónico no es válido.');
                valid = false;
            }

            // ---------------- Validación de la contraseña ----------------
            if (!password.value.trim()) { 
                setError(password, 'Por favor, ingresa tu contraseña.');
                valid = false;
            } else if (password.value.length < 6) { 
                // length devuelve la cantidad de caracteres del string
                // Aquí aseguramos que la contraseña tenga al menos 6 caracteres
                setError(password, 'La contraseña debe tener al menos 6 caracteres.');
                valid = false;
            }

            // Si alguna validación falla, se previene que el formulario se envíe
            if (!valid) e.preventDefault();
        });
    }

    // ---------------- Validación para REGISTRO ----------------
    // Detecta si es un formulario de registro verificando que exista el campo 'confirmar'
    if (document.getElementById('confirmar')) {
        form.addEventListener('submit', function(e) {
            let valid = true; // Bandera para controlar validez general del formulario

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
                // trim() elimina espacios en blanco al inicio y al final
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
                // Compara si la contraseña original y la confirmación son iguales
                setError(confirmar, 'Las contraseñas no coinciden.');
                valid = false;
            }

            // Previene el envío del formulario si algo no es válido
            if (!valid) e.preventDefault();
        });
    }

}); // Fin de DOMContentLoaded