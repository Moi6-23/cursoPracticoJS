//Helpets
function esPar(numero){
    return  (numero % 2 === 0);
  }
  
const salariosCol = colombia.map(
    function(persona){
        return persona.salary;
    }
);

const salariosColSorted = salariosCol.sort(
    function(salaryA, salaryB){
        return salaryA - salaryB;
    }
);


function medianaSalarios(lista){
    const mitad = parseInt(lista.length / 2);

    if(esPar(lista.length)){
        const personitaMitad1 = lista[mitad - 1];
        const personitaMitad2 = lista[mitad];
        const medianaPar = (personitaMitad1 + personitaMitad2)/2;
        return medianaPar;
    }else{
        const personitaMitad = lista[mitad];
        return personitaMitad;
    }
}


//CALCULANDO EL 10% DE SALARIOS

//Mediana del top 10%
const posicionInicial = salariosColSorted.length - salariosColSorted.length * 0.1;
const cantidad = salariosColSorted.length * 0.1;

const salarioColTop10 = salariosColSorted.splice(
    posicionInicial,
    cantidad
);


const medianaGeneralCol = medianaSalarios(salariosColSorted);
const medianaTop10 = medianaSalarios(salarioColTop10 );

console.log(
    medianaGeneralCol

)
console.log(

    medianaTop10
)