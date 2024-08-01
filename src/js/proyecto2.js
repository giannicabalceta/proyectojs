const correo = document.getElementById("correo")
const contraseña = document.getElementById("contraseña")
const botonI = document.getElementById("botonI")

let listaUsuarios = JSON.parse(localStorage.getItem("listaUsuarios")||[])

botonI.addEventListener("click" , function () {
    
    for (let index = 0; index <= listaUsuarios.length; index++) {

        if (listaUsuarios[index] === correo.value) {
            
            console.log("Verificación correcta")

            window.location.href="index3.html"
            
        }else{
            console.log("Verificación incorrecto")
        }
        
        
              
        
        localStorage.setItem("listaUsuarios", JSON.stringify(listaUsuarios))
        
    }

     window.location.href="index3.html"

    
})



























