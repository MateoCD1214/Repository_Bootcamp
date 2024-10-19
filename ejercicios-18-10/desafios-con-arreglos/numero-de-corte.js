function numeroDeCorte(arreglo, valorCorte) {
    let resultado = [];
    for (let i = 0; i < arreglo.length; i++) {
        if (arreglo[i] < valorCorte) {
            resultado.push(arreglo[i]);
        }
    }
    return resultado;
}

original = [1,2,3,4,5];
let valor_de_corte = 3;
let nuevo_arreglo = numeroDeCorte(original, valor_de_corte);
console.log(nuevo_arreglo);//Salida: [1,2] 
