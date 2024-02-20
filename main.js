
// Array
// Mario
// Luigi
// Bowser
// Toad
// Peach

let marioNames = ['Mario','Luigi','Bowser','Toad','Peach']


for(i = 0; i < marioNames.length;i++){
    console.log(marioNames[i])
}
//// 0 1 2 3 4
//// 4 3 2 1 0
/// i 4 /// peach
//// i 3  toad
for(i = marioNames.length - 1 ; i >= 0;i--){
    console.log(marioNames[i])
}

let numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
//. i = i + 3. i+=3
for(i = 0; i < numbers.length;i = i + 3){
    console.log(numbers[i])
}


//marioNames = ['Mario','Luigi','Bowser','Toad','Peach']
//goodGameNames = ['Mario','Luigi','Toad','Peach']
console.log('Filtrar los malos')
let goodGameNames = []
for(i = 0; i < marioNames.length;i++){
    if(marioNames[i] !== 'Bowser'){
        goodGameNames.push(marioNames[i])
    }
}

console.log(marioNames)
console.log(goodGameNames)

console.log('CON FILTRO')
console.log(marioNames.filter( (elemento)=> elemento !== 'Bowser'))
console.log(numbers.filter((numero) => numero == 7 ))
console.log(numbers.filter((numero) => numero != 7 ))
console.log(numbers.filter((numero) => numero > 7 ))
console.log(numbers.filter((numero) => numero > 7 && numero < 15))
console.log(numbers.filter((numero) => numero%3 == 0 ))


let newNumbers = []
// newnumbers 4,8,12,16 .....
for(i = 0 ; i < numbers.length; i++){
    console.log(numbers[i] * 4)
    newNumbers.push(numbers[i] * 4)
}

console.log(numbers)
console.log(newNumbers)

console.log('CON MAP')
console.log(numbers.map( numero => numero * 4 ))

let marioNAmesMap = marioNames.map( nombre => nombre + 's' )
console.log(marioNAmesMap)
console.log(marioNames)


console.log('forEach')
marioNames.forEach( (item) => {
    console.log(item)
})


console.log('DO WHILE')
let j = 20
do{
    console.log(j)
    j++
}while(j < 10)
