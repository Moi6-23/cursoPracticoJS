//Cuadrado

function perimetroCuadrado(ladoCuadrado){
    return ladoCuadrado * 4;
}

function areaCuadrado(ladoCuadrado){
    return ladoCuadrado*ladoCuadrado;
}
//Triángulo
function AreaTriangulo(BaseTriangulo,AlturaTriangulo){
    
    AreaT=(BaseTriangulo*AlturaTriangulo)/2;
    return AreaT; 
}
function PerimetroTriangulo(lado1,lado2,lado3){
perimetroTriangulo= lado1 + lado2 + lado3;
    return perimetroTriangulo;
}
//Circulo 
function AreaCirculo(radio){
    return radio*3.1415*3.1415;
}
function perimetroCirculo(radio){
    return radio*3.1415*2;
}