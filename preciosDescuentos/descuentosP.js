/* const precioOrginial = 140;
const descuento = 15;

const porcentajePrecioConDescuento = 100 - descuento;

const precioConDescuento = (precioOrginial*(porcentajePrecioConDescuento))/100; */

/* console.log("El precio original es " + precioOrginial) */
/* console.log({
    precioOrginial,
    descuento,
    porcentajePrecioConDescuento,
    precioConDescuento
})
 */

//FUNCIÓN

function calcularPrecioConDescuento(precio, descuento){
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio*(porcentajePrecioConDescuento))/100;
    return precioConDescuento;

}

function onClickButtonPriceDiscount(){
    const inputPrice = document.getElementById("InputPrice");

    const priceValue = inputPrice.value;
  
    const inputDiscount = document.getElementById("InputDiscount");

    const discountValue = inputDiscount.value;
    
    const precioConDescuento = calcularPrecioConDescuento(priceValue,discountValue);

    const resultP = document.getElementById("ResultP");
    resultP.innerText = "$" + precioConDescuento;
}