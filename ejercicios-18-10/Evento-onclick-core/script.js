//boton dar megusta 
var contador = 0;
var boton = document.getElementById("likebtn")

boton.addEventListener("click", function(){
    contador++;
    boton.textContent = contador + "Me gusta";
})

//cambiar texto de un boton
var botoniniciar = document.getElementById("botoniniciar");
botoniniciar.addEventListener("click", function() {

    this.innerText = "Cerrar sesión";
})

//boton iniciar sesion
var botoniniciar = document.getElementById("botoniniciar");
botoniniciar.addEventListener("click", function() {

    this.innerText = "Cerrar sesión";
});