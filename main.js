console.log('desde archivo');

let nombre = 'diegp';

console.log(nombre);


// 35 , 40, 45, 50
//for(incialización;condición;acutalización)
for(i=35; i <= 50; i+=5){
    console.log(i);
}


/// 35 , 40, 47 , 52, 59.  numero a sumar 
//.  1.   2.   3.   4. 5.  i 
// i++ =====> i = i + 1
// i-- =====> i = i - 1
// i+=5 =====> i = i + 5


// length           1       2       3
const frutas = ['manzana','kiwi','fresa', 'mandarina', 'durazno'];
// positon             0       1.    2



//. length 5 ===< 4
//. length 4 ===< 3
//. length 3 ===< 2
console.log(frutas);
console.log(frutas[1])

/// manzana =====> manzanas
// console.log(frutas[0] + 's')
// console.log(frutas[1] + 's')
// console.log(frutas[2] + 's')

console.log('Fruts plural');
for(i=0; i < frutas.length ;i++){
    console.log(frutas[i] + 's')
}


console.log('Fruts plural invertidas');
for(i= frutas.length  - 1 ; i >=0 ;i--){
    console.log(i )
    console.log(frutas[i] + 's')
}