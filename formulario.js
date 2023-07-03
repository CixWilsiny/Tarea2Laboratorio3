/* Mostrar un cuadro que confirme si se envia o no */
function validarDatos() {

    /* Si devuelve true la pregunta */
    if (confirm("¿Desea enviar su formulario?")) {

        // Referencia al valor del elemento #txtNombre
        let inputNombre = document.getElementById("txtNombre").value;
        // Validamos el nombre ingresado.
        if (inputNombre == null || inputNombre.length == 0 || /^\s+$/.test(inputNombre)) {
            alert('El nombre es inválido.');
            return false;
        }

        // Referencia al valor del elemento #txtApellidos
        let inputApellidos = document.getElementById("txtApellidos").value;
        // Validamos el nombre ingresado.
        if (inputApellidos == null || inputApellidos.length == 0 || /^\s+$/.test(inputApellidos)) {
            alert('Los apellidos son inválido.');
            return false;
        }

        // Referencia al valor del elemento #intDni
        let inputDni = document.getElementById("#intDni").value;
        // Validamos el DNI ingresado.
        if (!(/^\d{8}$/.test(inputDni))) {
            alert('DNI inválido.');
            return false;
        }

        /* Referencia al valor del elemento #txtEmail */
        let inputEmail = document.getElementById("txtEmail").value;

        /* Definimos una expresión regular */
        var validarEmail = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;

        /* Validar que el email ingresado cumple con la expresión regular */
        if (!(validarEmail.test(inputEmail))) {
            alert('El correo electónico es inválido.');
            return false;
        }


        /* Referencia al valor del elemento #txtUsuario */
        let inputUser = document.getElementById("txtUsuario").value;
        /* Validar si el usuario está mal escrito */
        if (inputUser.length < 4 || inputUser.length > 16 || inputUser.length == null) {
            /* Referencia al elemento de apoyo */
            //let apoyoInputUser = document.getElementById("apoyoInputUser");
            /* Cambiar el atributo style */
            //apoyoInputUser.setAttribute("style", "");
            alert("El usuario es invalido.");
            return false;
        }

        /* Referencia al valor del elemento #txtClave */
        let inputPassword = document.getElementById("txtClave").value;
        /* Validar que la contraseña cumpla las condiciones */
        if (inputPassword.length < 4 || inputPassword.length > 16 || inputPassword.length == null) {
            document.getElementById("txtClave").value = "";
            alert("La contraseña NO CUMPLE con los requisitos mínimos. Debe ser Mayor o igual a 4 caracteres, menor o igual que 16 caracteres y diferente de vacío");
            return false;
        }

        // Referencia al valor del elemento #intCelular
        let inputCel = document.getElementById("#intCelular").value;
        // Validamos el DNI ingresado.
        if (!(/^\d{9}$/.test(inputCel))) {
            alert('Número de celular inválido.');
            return false;
        }

        // Referencia al valor del elemento #bolAcepta
        let acepta = document.getElementById("#bolAcepta");
        // Validamos el check de Condiciones.
        if (!acepta.checked) {
            alert('Debe aceptar los términos para crear cuenta.');
            return false;
        }

        /* Devolver AFIRMACIÓN para enviar el formulario */
        return true;

    } else {
        return false;
    }
}