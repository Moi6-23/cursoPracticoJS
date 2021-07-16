function calcularMediana(lista) {

    var lista = lista.sort(function(a,b){return a - b;});
    console.log(lista);
  
    let mediana;
  
    const mitadLista = parseInt(lista.length / 2);
  
    function esPar(num) {
      if(num % 2 === 0){
        return true;
      } else {
        return false;
      }
    }
    
    if(esPar(lista.length)) {
      const elemento1 = lista[mitadLista];
      const elemento2 = lista[mitadLista - 1];
      
      const promedioElementos = calcularMedia([
        elemento1,
        elemento2,
      ]);
  
      mediana = promedioElementos;
    } else {
      mediana = lista[mitadLista];
    };
    
    return mediana;
  };