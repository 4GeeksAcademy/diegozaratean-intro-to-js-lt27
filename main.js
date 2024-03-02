console.log('desde main .js 123')

// objeto persona, nombre, edad , nacionalidad
let persona = {
    nombre :'karen',
    edad: 30,
    nacionalidad: 'mexicana',
    skills: ['js','python','react'],
    'lugar de nacimiento': 'guadalajara jalisco',
    mascota:{
        nombre:'spanky',
        raza:'pastor ingles'
    },
    programar: function(){
        console.log('estoy programando')
    }
}

let arraypersona = ['karen',30,'mexicana']


// Objeto perro , nombre , color, tamaño edad,   ladrar 'wow'
const perro = {
    nombre: 'jr',
    color:'negro',
    tamano:'chico',
    edad: 6,
    ladrar: function(){
        console.log('wow')
    }

}

function cambiarTitulo(){
    console.log('ejecutar algo ')
    const names = ['Mario','Luigi','Toad','Peach','Bowser','star']
    const colors = ['red','blue','green','violet','black']

    document.querySelector('#title').innerHTML = 'Hola ' + names[Math.floor(Math.random() * names.length)]
    document.querySelector('#title').style.backgroundColor = colors[Math.floor(Math.random() * colors.length)]
}


// PSEUDOCODIGO
// agregar un bootn que cuando le de click cambie color a azuk y titulo a 'titulo azul'
// 1. agregar un botn en index html -DONE
// 2. cuando le de clik debo ejectuar algo -DONE
// 3. cambiar el color titulo-DONE
// 4. cambiar texto -DONE
// 5. Integrar todo



// PSEUDOCODIGO
// Hagan un programa que lance dos dados
// - DONE 1. cuando le de click a un boton ejecutar una accion
// - DONE 2. generar dos numeros aletorio entre 1 y 6 - DONE
// - DONE 3. graficas o mostrar de alguna forma que no sea en consola los dados al usuario
// - DONE 4. asignar el numero aleatorio a los datos (desde js hasta html)
// - DONE 4.1 asignar un valor desde js a html
// - DONE 4.2 aaigna un numero aletorio de 1 a 6 a dado 1
// - DONE 4.3 aaigna un numero aletorio de 1 a 6 a dado 2
// 5. estilizar los dados para que se vean como dados

console.log(Math.ceil(Math.random() * 6))

function lanzarDados(){
    console.log('lanzarDados')
    document.getElementById('dado1').textContent = Math.ceil(Math.random() * 6)
    document.querySelector('#dado2').innerText = Math.ceil(Math.random() * 6)
}


// PSEUDOCODIGO
// Cuando seleccinoo un boton cambiar dimensiones de los dados de acuerdo a lo que indique el usuario
// DONE - agregar dos entradas que permitan ingresar alto y ancho
//   DONE - agregarlos en la vista(HTML)
//   DONE -leer estas entradas en js 
// DONE - agregar un boton que cunado le de click ejecute fancion
// DONE - cambiar el alto de un dado
// DONE - cambiar el ancho de un dado 
// Juntar todo

function cambiarDimensionDados(){
    let ancho = document.getElementById('ancho').value
    let alto = document.getElementById('alto').value
    document.getElementById('dado1').style.height =  `${alto}px`
    document.getElementById('dado1').style.width = `${ancho}px`
    document.getElementById('dado2').style.height =  `${alto}px`
    document.getElementById('dado2').style.width = `${ancho}px`
    document.getElementById('dado1').classList.add("comodin");
}


// document.getElementById('bt-transformar').addEventListener('click', 
//     cambiarDimensionDados
// )





const intervalID = setInterval(lanzarDados, 3000);

