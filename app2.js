console.log('Inicio de programa');

setTimeout( ()=> {
    console.log('Primer Timeout');
},300);

setTimeout( ()=> {
    console.log('Segundo Timeout');
},0);

setTimeout( ()=> {
    console.log('Tercer Timeout');
},0);

console.log('Fin del programa');