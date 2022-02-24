// Lectura de Nodos

// Por ID
// let elementoPorId = document.getElementById('parrafo1');
let elementoPorId = document.querySelector('#parrafo1');
elementoPorId.innerHTML = 'Suscríbete';

// Por nombre de la clase
// let elementosPorClase = document.getElementsByClassName('parrafos');
let elementosPorClase = document.querySelectorAll('.parrafos');
console.log(elementosPorClase);
const arreglo = [...elementosPorClase];
console.log(arreglo);
arreglo[1].innerHTML = 'a CodingTube';

// Por etiqueta
// let elementosPorEtiquetas = document.getElementsByTagName('p');
let elementosPorEtiquetas = document.querySelectorAll('p');
elementosPorEtiquetas[2].innerHTML = 'ahora!'