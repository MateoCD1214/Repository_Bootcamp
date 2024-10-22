//CAMBIAR TEXTTO
/*var botoniniciar = document.getElementById("botoniniciar");
botoniniciar.addEventListener("click", function() {
    this.innerText = "Cerrar sesión";
});*/

function cambiarTexto() {
    document.getElementById("namePerfil").innerText = "Jose Castillo";
}

// Esperar a que el DOM esté completamente cargado
document.addEventListener("DOMContentLoaded", function() { 
    // Seleccionar todos los botones de aceptar
    const acceptButtons = document.querySelectorAll('.accept-btn');
    let totalConexiones = document.querySelectorAll('.conexion_1_a').length;
    let numSoli = document.getElementById("num-soli") 
    let totalconex = document.getElementById("total-conex")
    let totalConect = 500; 
    console.log("Total conexiones inicial:",totalConexiones);

    // Imprimir total inicial de conexiones
    console.log('Total conexiones inicial:', totalConexiones);
    numSoli.innerText = totalConexiones;

    // Añadir evento de clic a cada botón de aceptar
    acceptButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            // Buscar el elemento padre más cercano con la clase 'connection-item'
            const connectionItem = this.closest('.conexion_1_a');

            // Verificar si se encontró el elemento
            if (connectionItem) {
                // Opción 1: Eliminar todo el elemento connection-item
                connectionItem.remove();
                totalConexiones--;
                totalConect++;
                numSoli.innerText = totalConexiones;
                totalconex.innerText = "Tus conexiones ("+totalConect+")";
            }
        });
    });
});

//ELIMINAR ELEMENTO
/*var botondefin = document.getElementById("botondefinicion");
botondefin.addEventListener("click", function() {
    this.remove();
});*/
