const nombre = document.getElementById("nombre")
const apellido = document.getElementById("apellido")
const edad = document.getElementById("edad")
const altura = document.getElementById("altura")
const correo = document.getElementById("correo")
const boton = document.getElementById("boton")
const mensaje = document.getElementById("mensaje")

boton.addEventListener("click",()=>{
    
    const nombreLimpio = nombre.value.trim().replaceAll(" ","")
    const apellidoLimpio = apellido.value.trim().replaceAll(" ","")
    const correoLimpio = correo.value.trim().replaceAll(" ","")
    let mostrarAll = ""
    console.log(nombreLimpio.length)
    //ABCDEFGHIJKLMN1234567890opqrstuvwxyzXYZabcdefghki51
    if (nombreLimpio == "") {
        mostrarAll += "En nombre: texto vacío <br>"
    } else if (nombreLimpio.length > 50) {
        mostrarAll += "En nombre: el nombre no puede exceder los 50 caracteres <br>"
    }

    if (apellidoLimpio == "") {
        mostrarAll += "En apellido: el apellido no puede estar vacío <br>"
    } else if (apellidoLimpio.length > 50) {
        mostrarAll += "En apellido: el apellido no puede exceder los 50 caracteres <br>"
    }

    if (Number(edad.value) < 0) {
        mostrarAll += "En edad: la edad no puede ser negativa <br>"
    } else if (Number(edad.value) < 18) {
        mostrarAll += "En edad: debe ser mayor de edad <br>"
    }

    if (Number(altura.value) < 0) {
        mostrarAll += "En altura: la altura no puede ser negativa <br>"
    } else if (Number(altura.value) > 230) {
        mostrarAll += "En altura: la altura no puede ser mayor a 230 cm <br>"
    }

    if (correoLimpio == "") {
        mostrarAll += "En correo: no puede estar vacío <br>"
    } else if (!correoLimpio.includes("@")) {
        mostrarAll += 'En correo: el correo debe incluir "@" <br>'
    }

    if (mostrarAll.length) {
        mensaje.innerHTML = mostrarAll
        mensaje.classList.add("rojo")
    } else {
        mensaje.textContent += "Todas las validaciones son correctas"
        mensaje.classList.add("verde")
    }
})