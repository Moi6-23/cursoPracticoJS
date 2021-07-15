console.log("Hello word");
const ladoCuadrado = 5;

//Código del cuadrado
console.group("Cuadrados");
console.log("Los lados del cuadrado miden: "+ ladoCuadrado + "cm");

const perimetroCuadrado = ladoCuadrado*4;
console.log("El perímetro del cuadrado es: "+ perimetroCuadrado + "cm");

const areaCuadrado = ladoCuadrado*ladoCuadrado;
console.log("El area del caudrado es: " + areaCuadrado + "cm^2");
console.groupEnd();

console.group("Triángulos")
//Código del triángulo
const ladoTriangulo1 = 6;
const ladoTriangulo3 = 6;
const BaseTriangulo2 = 4;

console.log("Los lados del triángulo miden: " + ladoTriangulo1
+ "cm, "
+ ladoTriangulo3 
+ "cm, " 
+ BaseTriangulo2 
+"cm"
)

const AlturaTriangulo2 = 5.5;
console.log("La altura del triángulo es: "+AlturaTriangulo2 + "cm")

const perimetroTriangulo=ladoTriangulo1 + ladoTriangulo3 + BaseTriangulo2;
console.log("El perimetro del triángulo es: " +perimetroCuadrado + "cm")

const AreaTriangulo = (BaseTriangulo2*AlturaTriangulo2)/2;
console.log("El area del triángulo es: "+AreaTriangulo + "cm^2")
console.groupEnd();

//Código del circulo
console.group("Circulo")
const pi = 3.1415;
const radio = 10;

const perimetroCirculo = 2*pi*radio;
console.log("El perímetro del círculo es: " + perimetroCirculo+"cm")

const AreaCirculo = pi*(radio)*(radio);
console.log("El area dle círculo es: "+AreaCirculo +"cm^2");
console.groupEnd()

