// Seleccionando Elementos

// Por ID
// let elementoPorId = document.getElementById('parrafo1');
let elementoPorId = document.querySelector('#parrafo1');
elementoPorId.innerHTML = 'Suscríbete';

// Por nombre de la clase
// let elementosPorClase = document.getElementsByClassName('parrafos');
let elementosPorClase = document.querySelectorAll('.parrafos');
elementosPorClase[1].innerHTML = 'a';

// Por etiqueta
// let elementosPorEtiquetas = document.getElementsByTagName('p');
let elementosPorEtiquetas = document.querySelectorAll('p');
elementosPorEtiquetas[2].innerHTML = 'CodingTube';