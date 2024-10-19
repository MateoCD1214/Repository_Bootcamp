let compras_semanales = [1000, 20000, 300, 4000, 2000, 6000, 10000];
let dias_semana = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado", "Domingo"]

let total_compras = 0;
let promedio_compras = 0;
for(let i = 0; i < compras_semanales.length; i++){
    console.log("Dia "+dias_semana[i]+" gaste: "+compras_semanales[i]);
    total_compras += compras_semanales[i];
}

promedio_compras = total_compras / dias_semana.length;
console.log("El total de compras es: $"+total_compras);
console.log("El promedio de compras es: $"+promedio_compras);