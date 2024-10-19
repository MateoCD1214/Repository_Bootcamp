function siempreAburrido(arreglo) {
    for (let i = 0; i < arreglo.length; i++) {
        if (arreglo[i] === "ver TV") {
            console.log("¡Entretenido!");
        }    
        else {
            console.log("¡Estoy Aburrido!");
        }
    }

}

siempreAburrido(["cantar", "correr", "salir", "ver TV"]);