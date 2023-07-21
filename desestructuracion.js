/*const empresa = {
    nombre : 'Pepi',
    direccion: 'Calle X',
    rol: 'Venta de refrescos'
};

//const nombre = empresa.nombre;
//const direccion = empresa.direccion;
//const rol = empresa.rol;

const {nombre, direccion, rol} = empresa;

console.log(empresa);
console.log(nombre);
console.log(rol);

const imprimeEmpresa = ({nombre,rol}) => {
    console.log({nombre,rol})
}

imprimeEmpresa(empresa);

const carros = ['mazda','bmw','porsche'];

const [auto1,auto2,auto3] = carros;
//const auto1 = carros[0];

console.log(auto1);
*/
const perfil = {
    nombre:'Pedro',
    apellido:'Perez',
    correo:'pedrop',
    salario:'2'
}

const imprimeNombreSalario = ({nombre,salario}) => {
    console.log({nombre,salario});
}

imprimeNombreSalario(perfil);