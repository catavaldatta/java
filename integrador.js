console.log ("Ingreso al js")
function validarUsu() {
    console.log ("Ingreso a validarUsu")
    
    let correo=document.getElementById("correo").value
    console.log(correo)

    if (correo.length==0) {
        console.log ("usu vacio")
        document.getElementById("msjUsu").innerHTML="El usuario no puede estar vacío"

    } else if(correo.indexOf("@")==-1){
        console.log("usu No vacío, sin @")
        document.getElementById("msjUsu").innerHTML="El usuario debe contener un @"
    } else if(correo.indexOf(".com")==-1){
        console.log("usu No vacío, sin .com")
        document.getElementById("msjUsu").innerHTML="El usuario debe contener el dominio '.com'"
    }
}



function total(){
    console.log ("Ingreso a total")
    let cantidad=document.getElementById("cantidad").value
    console.log(cantidad)
    let categoria=document.getElementById("categoria").innerHTML

    if (categoria="Elige una opción"){
        document.getElementById("monto").innerHTML= 200*cantidad
    } else if (categoria="Estudiante"){
        document.getElementById("monto").innerHTML= (200*cantidad)*0.8
    }
    else if (categoria="Trainee"){
        document.getElementById("monto").innerHTML= (200*cantidad)*0.5
    }
    else if (categoria="Junior"){
        document.getElementById("monto").innerHTML= (200*cantidad)*0.15
    }
}



