//Calcular la moda de una serie de numeros 
let list = [1,1,1,1,1,1,7,7,7,7,7,7,8,8,8,8,8,8,9,3,];
//Contar cuantas veces se repite cada elemento 
//Crear un objeto del tipo: clave-valor 
let obj = {}; 

list.map(element =>{
    //Si existe ese atributo con la clave "element", súmale 1 a su valor 
    if(obj[element]){
        obj[element] += 1; //Cuenta el elemento
    }
    else{
        obj[element] = 1; //Crea el atributo y le asigan el valor de 1 (primer conteo).
    }
});

//El objeto se convierte a un array del tipo: [ ["clave",valor],["clave2",valor] ... ]
let objToList = Object.entries(obj);

//Ordenar el array
//element1 es un mini array del tipo ["clave",valor], por eso se toma element[1] para
//Obtener el valor. La función compara cada valor entre sí, retorna 0 si son iguales 
//Si element1 es mayor retorna un +num y si es menor retorna un -num
objToList.sort((element1,element2)=> element1[1]-element2[1]);

function moda(){
    //Que no tenga moda 
    if(objToList[objToList.length-1][1] === 1){
        return "Es amodal";
    }
    else{
        let numModas = [];
        //Se obtiene un array con cada moda (ya sea una o más)
        for(let i = 0; i<objToList.length;i++){
            if(objToList[i][1] === objToList[objToList.length-1][1]){
                numModas.push(objToList[i][0]);
            }
        }
        if(numModas.length>1){
            return `Hay ${numModas.length} modas, las cuales son: ${numModas}`
        }
        else{
            return `La moda es: ${numModas[0]}`;
        }
    }
}

console.log(moda());