// console.log('desde archivo');

// let nombre = 'diegp';

// console.log(nombre);


// // 35 , 40, 45, 50
// //for(incialización;condición;acutalización)
// for(i=35; i <= 50; i+=5){
//     console.log(i);
// }


// /// 35 , 40, 47 , 52, 59.  numero a sumar 
// //.  1.   2.   3.   4. 5.  i 
// // i++ =====> i = i + 1
// // i-- =====> i = i - 1
// // i+=5 =====> i = i + 5


// // length           1       2       3
// const frutas = ['manzana','kiwi','fresa', 'mandarina', 'durazno'];
// // positon             0       1.    2



// //. length 5 ===< 4
// //. length 4 ===< 3
// //. length 3 ===< 2
// console.log(frutas);
// console.log(frutas[1])

// /// manzana =====> manzanas
// // console.log(frutas[0] + 's')
// // console.log(frutas[1] + 's')
// // console.log(frutas[2] + 's')

// console.log('Fruts plural');
// for(i=0; i < frutas.length ;i++){
//     console.log(frutas[i] + 's')
// }


// console.log('Fruts plural invertidas');
// for(i= frutas.length  - 1 ; i >=0 ;i--){
//     console.log(i )
//     console.log(frutas[i] + 's')
// }

// // Imprimir numeros aleatorios
// // 35 , 40, 47, 52, 59
// let number = 35;
// for(i=0; i < 5; i++){
//     // console.log(i);
//     console.log(number);
//     if(i % 2 == 0){
//         number +=5;
//         // console.log('par')
//     }else{
//         // console.log('impar')
//         number +=7;
//     }
// }


// function saludar(){
//     console.log('hola desde funcion')
// }
// saludar()

// function transportar(origen,destino){
//     console.log('Saliendo de ' + origen)
//     console.log('moviendome')
//     console.log('Llegando a '+ destino )
// }
// transportar('casa','centro comercial')
// transportar('centro comercial','oficina')
// transportar('oficina','casa')


// let nombre = 'Ricardo'
// console.log('Antes de la funcion ' +  nombre)
// function saludarAlumno(nombre){
//     console.log('Durante de la funcion ' +  nombre)
//     console.log('Hola ' + nombre)
// }
// console.log('Despues de la funcion ' +  nombre)
// saludarAlumno('Angel')
// saludarAlumno('Luis')
// saludarAlumno('Karen')

// function sumar(num1 ,num2){
//     console.log('haciendo calculo')
//     return num1 + num2
// }
// console.log(sumar(2,2)) // 4
// console.log(sumar(3,8)) // 11
// console.log(sumar(5,2)) // 7
// console.log(sumar(6,0)) // 6


// function admitido(edad){
//     /// Si eres menor de edad
//     if(edad < 18){
//         console.log('antes if return')
//         return 'Tienes que esperar'
//         console.log('despues if return')
//     }else{
//         return 'Si puedes entrar'
//     }    
// }

// console.log(admitido(15)) // Tienes que esoerar
// console.log(admitido(23)) // Si puedes entrar

// function calculoRenta(salario){
//     console.log('Debes pagar : ' + salario*0.3)
//     return salario * 0.3
// }

// calculoRenta(10000)

// // gelemetbyid. queryselector
// // document.getElementById('resultado').innerText = calculoRenta(10000)
// document.querySelector('#resultado').innerText = calculoRenta(10000)
// // document.querySelector('.description').innerText = 'nueva description'
// // document.getElementsByClassName('description').innerText = 'clas name'

// console.log('ANTES se ejecuto window onload');
// window.onload = function() {

//     console.log('se ejecuto window onload');

// }
// console.log('DESPUES se ejecuto window onload');

// Función declarativa
// saludoDeclartivo()
// function saludoDeclartivo(){
//     console.log('Hola saludoDeclartivo ')
// }

// // Función dexpresión
// const saludoExpresion = function(){
//     console.log('Hola saludoExpresion ')
// }
// saludoExpresion()

// // Función flecha o Arrow
// const saludoArrow = () => {
//     console.log('Hola saludoArrow ')
// }
// saludoArrow()

// Refactoring
// OK 
function sumar(num1 ,num2){   
    return  num1 + num2
}
console.log(sumar(5 ,6))

// PSEUDO CODIGO
// desarroola un generador de excusas de Quien, Accion, Cuando, Que
// 1. modificar el html desde js
// 2. concantenar el resultade de una acción de  Quien, Accion, Cuando, Que
// 3. generar un numero al azar
// 4. tomar el array de Quien y traer un elemento aleatorio
// 5. tomar el array de Accion y traer un elemento aleatorio
// 6. tomar el array de Cuando y traer un elemento aleatorio
// 7. tomar el array de Que y traer un elemento aleatorio



