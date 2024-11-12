
// sumo las notas
const sumarNotas = (n1, n2, n3, n4, n5, n6) => {
    return n1 + n2 + n3 + n4 + n5 + n6;
}

// calculo promedio
function calcularPromedio(n1, n2, n3, n4, n5, n6) {     // creo funcion nueva 
    let suma = sumarNotas(n1, n2, n3, n4, n5, n6);      // llamo la funcion sumarNotas
    let promedio = suma / 6;
    return promedio;
}

// fin
let promedio = calcularPromedio(6, 8, 9, 2, 5, 10);         // ingreso las 6 notas en la funcion
console.log("El promedio de las 6 notas es:", promedio);    // muestro resultado en la consola
