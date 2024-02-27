console.log('desde main .js 123')

// objeto persona, nombre, edad , nacionalidad
let persona = {
    nombre :'karen',
    edad: 30,
    nacionalidad: 'mexicana',
    skills: ['js','python','react'],
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
    document.querySelector('#title').innerHTML = 'titulo azul'
    document.querySelector('#title').style.backgroundColor = 'blue'
}


// PSEUDOCODIGO
// agregar un bootn que cuando le de click cambie color a azuk y titulo a 'titulo azul'
// 1. agregar un botn en index html -DONE
// 2. cuando le de clik debo ejectuar algo -DONE
// 3. cambiar el color titulo-DONE
// 4. cambiar texto -DONE
// 5. Integrar todo

