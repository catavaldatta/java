console.log ("Ingreso al js")
function validarUsu() {
    console.log ("Ingreso a validarUsu")
    
    let correo=document.getElementById("correo").value
    console.log(correo)

    if (correo.length==0) {
        console.log ("usu vacio")
        document.getElementById("msjUsu").innerHTML="El usuario no puede estar vacío"
        document.getElementById("msjUsu").style="color: red"
    } else if(correo.indexOf("@")==-1){
        console.log("usu No vacío, sin @")
        document.getElementById("msjUsu").innerHTML="El usuario debe contener un @"
    } else if(correo.indexOf(".com")==-1){
        console.log("usu No vacío, sin .com")
        document.getElementById("msjUsu").innerHTML="El usuario debe contener el dominio '.com'"
    } else {
        console.log("usu correcto")
        document.getElementById("msjUsu").innerHTML=""
    }
}


const ticket=200
const estudiante=80
const trainee=50
const junior=15

function Total() {
    let cantidad=document.getElementById("cantidad").value
    
    let categoria=document.getElementById("categoria").value

    let total=0
    let subtotal=cantidad*ticket
    if (categoria=="Elige una opción") {
        total=cantidad*ticket
    } else if (categoria=="Estudiante") {
        total=subtotal-(cantidad*ticket*0.8)
    } else if (categoria=="Trainee") {
        total=subtotal-(cantidad*ticket*0.5)
    } else {
        total=subtotal-(cantidad*ticket*0.15) 
    }
    document.getElementById("monto").innerHTML=`Total a pagar: $${total}`
    
}


function borrar(){

    document.getElementById("nombre").value = ""
    document.getElementById("apellido").value = ""
    document.getElementById("correo").value = ""
    document.getElementById("cantidad").value = ""    
    document.getElementById("categoria").value =""
    document.getElementById("monto").innerHTML="Total a Pagar: $ "
}


var input = document.getElementById("info");
input.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("enter").click();
  }
});