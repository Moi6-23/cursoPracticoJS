function calcularMediaAritmetica(lista) {
    const sumaLista = lista.reduce(
      function (valorAcumulado = 0, nuevoElemento) {
        return valorAcumulado + nuevoElemento;
      }
    );
    const promedioLista = sumaLista / lista.length;
    return promedioLista;
  }

  
const lista1 = [
    50,
    20,
    30,
    40,
    10
];


function esPar(numero){
    //% modulo

    if(numero % 2 === 0)
    {
        return true;
    }else{
        return false;
    }
}



    let mediana;
    const mitadLista1 = (lista1.length)/2; 
    if (esPar(lista1.length)) {
        const elemento1 = lista1[mitadLista1 - 1];
        const elemento2 = lista1[mitadLista1];
      
        const promedioElemento1y2 = calcularMediaAritmetica([
          elemento1,
          elemento2,
        ]);
        
        mediana = promedioElemento1y2;
      } else {
        mediana = lista1[mitadLista1];
      }
      console.log(mediana);




