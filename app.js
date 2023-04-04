//declaro funciones 
const suma = (a,b) => a + b;
const resta = (a,b) => a - b;
const iva = (x) => x * 0.21;

//defino variables y precios
let precioAlquilerAutoDia = 70;
let precioAlquilerCamionetaDia = 90;
let precioAlquilerMinibusDia = 110;
let tipoVehiculo = 0;

//validacion para opcion correcta
while (tipoVehiculo === 0){
    tipoVehiculo = prompt("Elija la opcion de vehiculo que desea alquilar: \n1-Auto \n2-Camioneta \n3-Minibus");
    let precioIvaAuto = suma(precioAlquilerAutoDia, iva(precioAlquilerAutoDia));
    let precioIvaCamioneta = suma(precioAlquilerCamionetaDia, iva(precioAlquilerCamionetaDia));
    let precioIvaMinibus = suma(precioAlquilerMinibusDia, iva(precioAlquilerMinibusDia));
    if (tipoVehiculo === "1"){
        alert("Precio del Auto + Iva por dia: " + precioIvaAuto);
    } else if (tipoVehiculo === "2"){
        alert("Precio del Camioneta + Iva por dia: " + precioIvaCamioneta);
    } else if (tipoVehiculo === "3"){
        alert("Precio del Minibus + Iva por dia: " + precioIvaMinibus);
    } else {
        alert("Opcion Invalida");
        tipoVehiculo = 0;
    }
}