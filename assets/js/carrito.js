//----------------------------------------------------Aca los traje elemento por elemento;
const nombre=document.getElementById('nombre');
const apellido=document.getElementById('apellido');
const direccion=document.getElementById('direccion');
const email=document.getElementById('email');
const telefono=document.getElementById('telefono');
//---------------------------------------------------
​
const boton= document.getElementById('boton-enviar');
const nuevos_datos= document.getElementById('ingresar')
​
​
const datos=[];
//-----------------------------------------------------------Boton ENVIAR;
​
boton.addEventListener('click', () => {
    const nmbre= (nombre.value);
    const aplldo= (apellido.value);
    const direc= (direccion.value);
    const mail=(email.value);
    const celular=(telefono.value);
​
    datos.push(nmbre,aplldo,direc,mail,celular);
    console.log(datos)
    
    
    //----------------------------------hasta aca fucniona.
    //let data=document.createElement('p')
    // datos.innerHTML(data)
    // nuevos_datos.appendChild(datos);
    //-----------------------------------------------------------Boton Enviar-FORMULARIO;
});
​
boton.addEventListener('mouseover', color)
​
boton.addEventListener('mouseout', removerColor)
​
function color() {
    boton.classList.add('color-button')
}
​
function removerColor() {
    boton.classList.remove('color-button')
}
//-----------------------------------------------------------Botones de PAGO;
​
let botonTarj= document.getElementById('button');
let botonEfec= document.getElementById('button2');
//-----------------------------------------------------------
​
botonTarj.addEventListener('mouseover', colorTarj)
botonTarj.addEventListener('mouseout', removerColorTarj);
​
function colorTarj() {
    botonTarj.classList.add('color-button')
}
​
function removerColorTarj() {
    botonTarj.classList.remove('color-button')
}
//-----------------------------------------------------------
​
botonEfec.addEventListener('mouseover', colorEfec)
botonEfec.addEventListener('mouseout', removerColorEfec);
​
function colorEfec() {
    botonEfec.classList.add('color-button')
}
​
function removerColorEfec() {
    botonEfec.classList.remove('color-button')
}
//-----------------------------------------------------------Estilo a los LABEL;
​
const label= document.getElementsByTagName('label')
// console.log(label)
​
for (let i = 0; i < label.length; i++) {
    
   (label[i]).classList.add('forLabel')
}
//---------------------------------------------------------Forma de Pago;
​