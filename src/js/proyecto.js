const correo = document.getElementById("correo")
const nombreU = document.getElementById("nombreU")
const contraseña = document.getElementById("contraseña")
const botonR = document.getElementById("botonR")

let listaUsuarios = JSON.parse(localStorage.getItem("listaUsuarios"))||[]

botonR.addEventListener("click" , function () {

    let usuario = {
        correo:correo.value,
        usuario:nombreU.value,
        contraseña:contraseña.value
    }


    listaUsuarios.push(usuario)
   

    console.log(listaUsuarios)

   

    localStorage.setItem("listaUsuarios", JSON.stringify(listaUsuarios))


    window.location.href="index2.html"
    
})


























