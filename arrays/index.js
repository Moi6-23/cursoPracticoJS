//concatenar array

const farray = [1,2,3,4];
const sarray = [6,7,8];
const tArray = ['Hola'];

concArray1 = farray.concat(sarray);
concArray2 = sarray.concat(farray);

console.log(concArray1);
console.log(concArray2);

//Concatena los dos arrays y genera un nuevo arreglo, los iniciales siguen igual


//METODO ENTRIES
const sarray2 = [6,7,8];
console.log([sarray2.entries()])
for (let [index, value] of sarray2.entries()){
    console.log(index, value);
}


//METODO forEach(value, index)
/* const vector = [9,8,3,2,7,5]

vector.forEach(value, index) => {
    console.log(value, index)

    if(value === 3){
        console.log(value)
    }
}
 */
//METODO Asegurarnos que los valores sean mayores a cero, no negativos
const vector2 = [-2,5,3,1]

console.log( //Envia true si todos son positivos
    vector2.every(value => value >= 0)
)
console.log( //Envia true si alguno de los valores cumple la condición
    vector2.some(value => value > 20)
)

//METODO SLICE, devuelve un nuevo array identico
const vector3 = [2,4,8,3]
console.log(
    vector3.slice()
)   
const newArray = vector3.slice();
newArray.push(8);

console.log(newArray)
console.log(vector3)
//tambien permite cortar un array el valor de inicio lo toma, pero el de final no; tambien toma valores negativos y muestra los ultimos
const divArray = vector3.slice(1,3)
console.log(divArray);


//METODO filter y find buscan elementos en un array

//FILTER ENCUENTRA TODOS LOS VALORES CON LA CONDICIONES QUE MARCAMOS
const vector4 = [3,4,5,6,7,2,3,4];

console.log(
    vector4.filter(value => value >3)
)

//FIND ENCUENTRA EL PRIMER VALOR QUE CUMPLA LA CONDICIÓN
const vector5 = [3,4,5,6,7,2,3,4];

console.log(
    vector5.find(value => value >7)
)
//findIndex devuelve el index o posición del valor 
const vector5 = [3,6,5,6,7,2,3,4];

console.log(
    vector5.findIndex(value => value >5)
)


//METODO INCLUDES Y INDEXOF
//includes devuelve true si el valor se encuentra en el array
const vector5 = [3,4,5,6,7,2,3,4];

console.log(
    vector5.includes(70)
)
//indexOf devuelve el indice del valor
const vector5 = [3,4,5,6,7,2,3,4];

console.log(
    vector5.indexOf(30)
)
//lastIndexOf busca de derecha a izquierda


//PARA SABER SI UN OBJETO ES UN ARRAY
console.log(
    Array.isArray(vector5)
)

//METODO join convierte los valores del array a string por default separado por comas
const vector5 = [3,4,5,6,7,2,3,4];
console.log(
    vector5.join()
)
//METODO Keys se obtiene los indeces del array

console.log(
    [...vector5.keys()]
)

//METODO MAP modificamos el valor de un array, pero devuelve uno nuevo
const vector5 = [3,4,5,6,7,2,3,4];
console.log(
    vector5.map(value => value * 2)
)
console.log(vector5)


//METODO pop saca el ultimo valor de un array, modifica el original
const vector5 = [3,4,5,6,7,2,3,4];
console.log(
    vector5.pop()
)
console.log(vector5)
//Con el metodo push se inserta un elemento al final modificanco el array original
console.log(
    vector5.push(4)
)
console.log(vector5)


//Metodo reduce, reduce el array  a un unico valor, no modifica el original
const vector5 = [3,4,5,6,7,2,3,4];
console.log(
    vector5.reduce((acumulativo, value) => acumulativo + value)
)
const valor = vector5.reduce((acumulativo, value) => acumulativo + value);
console.log(vector5)
console.log(valor)

//METODO reverse, le da la veulta al contenido y modifica el array original
const vector5 = [3,4,5,6,7,2,3,4];
console.log(
    vector5.reverse()
)
console.log(vector5)

//Metodo shift saca el primer valor y modifica el array
const vector5 = [3,4,5,6,7,2,3,4];
console.log(
    vector5.shift()
)
valorsacado = vector5.shift();
console.log(valorsacado)
console.log(vector5)
//Metodo shift inserta un valor  de primero y modifica el array
console.log(
    vector5.unshift(3)
)
console.log(vector5)


//Metodo splice saca los valores segun el indece, a partir del 5 saca los valores en adelante, devuelve los valores sacados y modifica el array original
const vector5 = [3,4,5,6,7,2,3,4];
console.log(
    vector5.splice(5)
)
//tambien se le puede indiciar cuantos va a sacar splice(5,1)
//se puede insertar valores tambein 
const vector5 = [3,4,5,6,7,2,3,4];
console.log(
    vector5.splice(5, 0, 101, 345, 8)
)
console.log(vector5)


//METODO SORF para ordenar, modifica el array original
const vector5 = [3,4,5,6,7,2,3,4];
console.log(
    vector5.sort((a,b) => a-b)
)
console.log(vector5)

//METODO copyWithin
const myArray = ["q", "w", "e", "r", "t", "y"];
myArray.copyWithin(0,3);
console.log(myArray);

const myArray = ["q", "w", "e", "r", "t", "y"];
myArray.copyWithin(0, 3, 4);
console.log(myArray);