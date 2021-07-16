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
 
 let valor2  = (lado1 + lado2 + lado3);
    return valor2;
}
//Circulo 
function AreaCirculo(radio){
    return radio*radio*3.1415;
}
function perimetroCirculo(radio){
    return radio*3.1415*2;
}

//AQUI CONECTAMOS CON HTML
//Recibimos card1 CUADRADO
function calcularPerimetroCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}

function calcularAreaCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const areaC = areaCuadrado(value);
    alert(areaC);
}
//Recibimos card2 Triangulo
function calcularPerimetroTriangulo(){
    const lado1 = document.getElementById("InputTriangle1");
    const lado2 = document.getElementById("InputTriangle2");
    const lado3 = document.getElementById("InputTriangle3");

    const value1 = Number(lado1.value);
    const value2 = Number(lado2.value);
    const value3 = Number(lado3.value);
    const PeriTriangulo = PerimetroTriangulo(value1, value2, value3);
    alert(PeriTriangulo);
}
function calcularAreaTriangulo(){
    const lado1 = document.getElementById("InputTriangle1");
    const lado2 = document.getElementById("InputTriangle2");


    const value1 = lado1.value;
    const value2 = lado2.value;

    const PeriTriangulo = AreaTriangulo(value1, value2);
    alert(PeriTriangulo);
}


//Recibimos card3 cuadrado
function calcularPerimetroircle1(){
    const radio1 = document.getElementById("InputCircle");
    const radio2 = radio1.value;

    const areaC = perimetroCirculo(radio2);
    alert(areaC); 
}
function calcularAreaCircle1(){
    const radio1 = document.getElementById("InputCircle");
    const radio2 = radio1.value;

    const areaC = AreaCirculo(radio2);
    alert(areaC); 
}