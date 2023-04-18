const tempInicial = document.getElementById ("TemperaturaInicial");
const eleccion = document.getElementsByTagName("input");
const temp_Final = document.getElementById("tempFinal");
const grados = document.getElementById("grados")
const mercurio = document.getElementById("div2")
let resultado;

function convertir(){
    if (eleccion [1].checked==true){
        resultado =+ (tempInicial.value -32)*5/9
    }
    else if(eleccion[2].checked ==true){
         resultado =+ (tempInicial.value*9/5)+32
    }
    else{
        alert ("no seleccionado")
    }
    if (resultado>=100){
        mercurio.style.height = 100
    }
    else if(resultado <= 0){
        mercurio.style.height = 0
    }
    else{
        mercurio.style.height = 0
    }
    
    temp_Final.textContent = ` ${resultado}°` 
    mercurio.style.height= ` ${resultado}%` 
    temp_Final.textContent= ` ${resultado.toFixed(2)}°` 
    grados.textContent = ` ${resultado}°` 
}