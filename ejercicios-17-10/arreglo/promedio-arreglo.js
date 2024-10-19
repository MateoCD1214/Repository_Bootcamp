//Ejemplo para sacar promedio de gastos con objetos:

const cost_per_day = {
    Monday: 100,
    Tuesday: 200,
    Wednesday: 300,
    Thursday: 400,
    Friday: 500,
    Saturday: 600,
    Sunday: 700
}


let promedio = 0;
for (let day in cost_per_day) {
    console.log(${day}: ${cost_per_day[day]});
    promedio += cost_per_day[day];
}
promedio = promedio/Object.keys(cost_per_day).length;
console.log(promedio);