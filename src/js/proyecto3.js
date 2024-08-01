const trea = document.getElementById("trea")
const fecha = document.getElementById("fecha")
const slct = document.getElementById("slct")
const guard = document.getElementById("guard")
const evento2= document.getElementById("evento2")
const tarea = document.getElementById("tarea")



guard.addEventListener("click", function () {


    

    const ttrea = trea.value;
    const ffecha = fecha.value;
    const select = slct.value 
    

    
    if (select === "evento") {
      
        
        
        const etiquetaP = document.createElement("p");
        const botonEli = document.createElement("button");
        const botonEdi = document.createElement("button");

        etiquetaP.innerHTML = ttrea+ " " +ffecha
        evento2.appendChild(etiquetaP)

        botonEli.innerHTML = "Eliminar"
        evento2.appendChild(botonEli)

        botonEdi.innerHTML = "Editar"
        evento2.appendChild(botonEdi)

        botonEli.addEventListener("click", function () {
            evento2.removeChild(etiquetaP);
            evento2.removeChild(botonEli);
            evento2.removeChild(botonEdi);
            
        })
        
        botonEdi.addEventListener("click", function () {
            const input1 = document.createElement("input");
            const input2 = document.createElement("input");
            const botonB = document.createElement("button");

            input1.value = ttrea
            input2.value = ffecha

            etiquetaP.appendChild(input1);
            etiquetaP.appendChild(input2);
            botonB.innerHTML = "Guardar"
            etiquetaP.appendChild(botonB);

            botonB.addEventListener("click", function () {
                etiquetaP.innerHTML = input1.value+ " " +input2.value
                
            })



            
        })



    }
        if (select === "tarea2") {
            

            const etiquetaP = document.createElement("p");
            const botonEli = document.createElement("button");
            const botonEdi = document.createElement("button");

            etiquetaP.innerHTML = ttrea+ " " +ffecha
            tarea.appendChild(etiquetaP)

            botonEli.innerHTML = "Eliminar"
            tarea.appendChild(botonEli)

            botonEdi.innerHTML = "Editar"
            tarea.appendChild(botonEdi)

            botonEli.addEventListener("click", function () {
                tarea.removeChild(etiquetaP);
                tarea.removeChild(botonEli);
                tarea.removeChild(botonEdi);
                
            })

            botonEdi.addEventListener("click", function () {
                const input1 = document.createElement("input");
                const input2 = document.createElement("input");
                const botonB = document.createElement("button");
    
                input1.value = ttrea
                input2.value = ffecha
    
                etiquetaP.appendChild(input1);
                etiquetaP.appendChild(input2);
                botonB.innerHTML = "Guardar"
                etiquetaP.appendChild(botonB);
    
                botonB.addEventListener("click", function () {
                    etiquetaP.innerHTML = input1.value+ " " +input2.value
                    
                })
    
    
    
                
            })
            



            


            


    

            
        }
        
    


})

   
   






























